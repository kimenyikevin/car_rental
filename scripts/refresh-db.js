// scripts/refresh-db.js
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const configPath = path.resolve(__dirname, '../src/database/config/config.js'); // adjust if needed
const tempConfigPath = path.resolve(__dirname, '../src/database/config.temp.js');

const dbName = 'click_bar_db';
const defaultDb = 'postgres';

console.log('🔄 Starting database refresh...');

// Step 1: Read original config
const originalConfig = fs.readFileSync(configPath, 'utf-8');

// Step 2: Replace DB name with 'postgres' temporarily
const tempConfig = originalConfig.replace(new RegExp(dbName, 'g'), defaultDb);
fs.writeFileSync(tempConfigPath, tempConfig);

// Step 3: Drop + Create using temp config
try {
  execSync(`npx sequelize-cli db:drop --config ${tempConfigPath}`, { stdio: 'inherit' });
  execSync(`npx sequelize-cli db:create --config ${tempConfigPath}`, { stdio: 'inherit' });
} catch (err) {
  console.error('❌ Error dropping/creating database:', err.message);
  process.exit(1);
}

// Step 4: Remove temp config file
fs.unlinkSync(tempConfigPath);

// Step 5: Migrate + Seed using original config
try {
  execSync(`npx sequelize-cli db:migrate --config ${configPath}`, { stdio: 'inherit' });
  execSync(`npx sequelize-cli db:seed:all --config ${configPath}`, { stdio: 'inherit' });
  console.log('✅ Database refresh complete.');
} catch (err) {
  console.error('❌ Migration/Seeding failed:', err.message);
  process.exit(1);
}
