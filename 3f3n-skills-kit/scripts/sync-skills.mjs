import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const registryPath = path.join(rootDir, 'registry', 'skills.registry.json');
const agentsDir = path.join(rootDir, '.agents', 'skills');
const claudeDir = path.join(rootDir, '.claude', 'skills');

console.log('\n🔄 Iniciando Sincronização de Skills 3F3N...\n');

if (!fs.existsSync(registryPath)) {
  console.error('❌ Erro: registry/skills.registry.json não encontrado.');
  process.exit(1);
}

const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const productionSkills = registry.skills.filter(s => s.status === 'production');

// Limpar pastas operacionais antes do sync para remover skills removidas do registry.
// unlinkSync é tolerante a EPERM (ex: ambientes sandboxed/mounted): nesse caso o
// copyFileSync a seguir sobrescreve o arquivo existente de qualquer forma.
const clearDir = (dir) => {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      try {
        fs.unlinkSync(path.join(dir, file));
      } catch (err) {
        if (err.code !== 'EPERM' && err.code !== 'EACCES') throw err;
        // permissão negada no ambiente atual — copyFileSync vai sobrescrever abaixo
      }
    });
  } else {
    fs.mkdirSync(dir, { recursive: true });
  }
};

clearDir(agentsDir);
clearDir(claudeDir);

let count = 0;

productionSkills.forEach(skill => {
  // O path no JSON começa com /, removemos para path.join funcionar corretamente
  const relativeSourcePath = skill.path.startsWith('/') ? skill.path.slice(1) : skill.path;
  const sourcePath = path.join(rootDir, relativeSourcePath);
  
  if (fs.existsSync(sourcePath)) {
    const destFileName = `${skill.name}.md`;
    const agentsDest = path.join(agentsDir, destFileName);
    const claudeDest = path.join(claudeDir, destFileName);

    try {
      fs.copyFileSync(sourcePath, agentsDest);
      fs.copyFileSync(sourcePath, claudeDest);
      console.log(`✅ [SYNC] ${skill.name} -> Camada Operacional`);
      count++;
    } catch (err) {
      console.error(`❌ [ERRO] Falha ao copiar ${skill.name}:`, err.message);
    }
  } else {
    console.warn(`⚠️ [AVISO] Fonte não encontrada para ${skill.name}: ${sourcePath}`);
  }
});

console.log('\n====================================');
console.log(`🚀 STATUS: Sincronização Concluída!`);
console.log(`✅ Skills processadas: ${count}`);
console.log(`📂 Destinos: .agents/skills/ e .claude/skills/`);
console.log('====================================\n');
