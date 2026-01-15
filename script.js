// Mob variants with 50+ types
const MOB_VARIANTS = [
  { name: "Normal", emoji: "🧟", color: "#ff0000", hpMult: 1.0, damageMult: 1.0 },
  { name: "Shiny", emoji: "✨", color: "#ffff00", hpMult: 1.2, damageMult: 1.3 },
  { name: "Inverted", emoji: "🔄", color: "#00ffff", hpMult: 1.5, damageMult: 0.8 },
  { name: "Frozen", emoji: "❄️", color: "#00aaff", hpMult: 1.8, damageMult: 0.5 },
  { name: "Burning", emoji: "🔥", color: "#ff6600", hpMult: 1.1, damageMult: 1.6 },
  { name: "Toxic", emoji: "☠️", color: "#00ff00", hpMult: 1.3, damageMult: 1.4 },
  { name: "Shadow", emoji: "🌑", color: "#1a1a1a", hpMult: 1.4, damageMult: 1.2 },
  { name: "Ethereal", emoji: "👻", color: "#ccccff", hpMult: 0.9, damageMult: 1.5 },
  { name: "Iron", emoji: "⚙️", color: "#888888", hpMult: 2.0, damageMult: 0.9 },
  { name: "Crystal", emoji: "💎", color: "#00ffff", hpMult: 1.3, damageMult: 1.1 },
  { name: "Molten", emoji: "🌋", color: "#ff4400", hpMult: 1.6, damageMult: 1.5 },
  { name: "Blessed", emoji: "✨", color: "#ffff00", hpMult: 1.2, damageMult: 1.4 },
  { name: "Cursed", emoji: "💀", color: "#8800ff", hpMult: 1.4, damageMult: 1.3 },
  { name: "Ancient", emoji: "🏛️", color: "#aa5500", hpMult: 2.2, damageMult: 1.2 },
  { name: "Spectral", emoji: "👻", color: "#0088ff", hpMult: 1.1, damageMult: 1.4 },
  { name: "Volcanic", emoji: "🌋", color: "#ff2200", hpMult: 1.7, damageMult: 1.6 },
  { name: "Glacial", emoji: "🧊", color: "#0099ff", hpMult: 1.9, damageMult: 0.6 },
  { name: "Plague", emoji: "🦠", color: "#00ff66", hpMult: 1.5, damageMult: 1.3 },
  { name: "Phantom", emoji: "👁️", color: "#ff00ff", hpMult: 1.2, damageMult: 1.5 },
  { name: "Wraith", emoji: "🌪️", color: "#ccccff", hpMult: 1.3, damageMult: 1.4 },
  { name: "Abyssal", emoji: "🌑", color: "#000066", hpMult: 1.8, damageMult: 1.3 },
  { name: "Radiant", emoji: "☀️", color: "#ffff00", hpMult: 1.3, damageMult: 1.5 },
  { name: "Umbral", emoji: "🌑", color: "#330033", hpMult: 1.4, damageMult: 1.4 },
  { name: "Pristine", emoji: "✨", color: "#ffffff", hpMult: 1.1, damageMult: 1.2 },
  { name: "Corroded", emoji: "🔧", color: "#666600", hpMult: 1.3, damageMult: 1.0 },
  { name: "Resonant", emoji: "🔊", color: "#6600ff", hpMult: 1.2, damageMult: 1.6 },
  { name: "Silent", emoji: "🤐", color: "#333333", hpMult: 1.1, damageMult: 1.3 },
  { name: "Harmonic", emoji: "🎵", color: "#00ff88", hpMult: 1.2, damageMult: 1.5 },
  { name: "Chaotic", emoji: "⚡", color: "#ff00ff", hpMult: 1.6, damageMult: 1.7 },
  { name: "Serene", emoji: "☮️", color: "#00ff00", hpMult: 1.0, damageMult: 1.1 },
  { name: "Primal", emoji: "🦁", color: "#ff8800", hpMult: 1.7, damageMult: 1.6 },
  { name: "Twisted", emoji: "🌀", color: "#ff0088", hpMult: 1.5, damageMult: 1.5 },
  { name: "Stellar", emoji: "⭐", color: "#ffff88", hpMult: 1.4, damageMult: 1.5 },
  { name: "Void", emoji: "🕳️", color: "#000000", hpMult: 1.6, damageMult: 1.4 },
  { name: "Quantum", emoji: "⚛️", color: "#00ff00", hpMult: 1.3, damageMult: 1.5 },
  { name: "Cosmic", emoji: "🌌", color: "#0088ff", hpMult: 1.5, damageMult: 1.5 },
  { name: "Infernal", emoji: "🔥", color: "#ff0000", hpMult: 1.8, damageMult: 1.7 },
  { name: "Celestial", emoji: "🌟", color: "#ffff00", hpMult: 1.6, damageMult: 1.6 },
  { name: "Corrupted", emoji: "😈", color: "#660066", hpMult: 1.7, damageMult: 1.5 },
  { name: "Sanctified", emoji: "😇", color: "#ffff99", hpMult: 1.4, damageMult: 1.4 },
  { name: "Petrified", emoji: "🗿", color: "#888888", hpMult: 2.3, damageMult: 0.7 },
  { name: "Volatile", emoji: "💥", color: "#ff6600", hpMult: 1.2, damageMult: 1.8 },
  { name: "Temporal", emoji: "⏳", color: "#ccaa00", hpMult: 1.5, damageMult: 1.4 },
  { name: "Spatial", emoji: "📦", color: "#0088ff", hpMult: 1.4, damageMult: 1.3 },
  { name: "Dimensional", emoji: "🔷", color: "#ff00ff", hpMult: 1.5, damageMult: 1.5 },
  { name: "Eldritch", emoji: "👁️", color: "#660066", hpMult: 1.9, damageMult: 1.6 },
  { name: "Verdant", emoji: "🌿", color: "#00ff00", hpMult: 1.4, damageMult: 1.1 },
  { name: "Withered", emoji: "🍂", color: "#666600", hpMult: 1.3, damageMult: 0.9 },
  { name: "Luminous", emoji: "💡", color: "#ffff00", hpMult: 1.2, damageMult: 1.4 },
  { name: "Obsidian", emoji: "🖤", color: "#1a1a1a", hpMult: 1.8, damageMult: 1.1 },
  { name: "Diamond", emoji: "💎", color: "#00ffff", hpMult: 1.7, damageMult: 1.0 },
];

// Game state
let gameState = {
  money: 0,
  spins: 0,
  playerHp: 100,
  playerMaxHp: 100,
  baseDamage: 1,
  damageMultiplier: 1.0,
  healthMultiplier: 1.0,
  mobMaxHp: 10,
  mobHp: 10,
  mobLevel: 1,
  inventory: {},
  equipment: {},
  equipedMultipliers: [],
  inventorySlots: 80,
  maxInventorySlots: 80,
  shopOpen: false,
  currentMobVariant: null,
  lastMobAttackTime: 0
};

// Wheel rewards with rarity percentages
const wheel = [
  // Money drops (50% total)
  { type: "money", value: 10, rarity: 15 },
  { type: "money", value: 25, rarity: 12 },
  { type: "money", value: 50, rarity: 12 },
  { type: "money", value: 100, rarity: 11 },
  
  // Health potions (12% total)
  { type: "health_potion", value: 10, name: "Small Health Potion", rarity: 10 },
  { type: "health_potion", value: 25, name: "Medium Health Potion", rarity: 2 },
  
  // Health multipliers (8% total)
  { type: "health_mult", value: 1.05, name: "Health +5%", rarity: 5 },
  { type: "health_mult", value: 1.10, name: "Health +10%", rarity: 3 },
  
  // Damage multipliers (7.49% total)
  { type: "damage_mult", value: 1.05, name: "Damage +5%", rarity: 3 },
  { type: "damage_mult", value: 1.10, name: "Damage +10%", rarity: 1.49 },
  
  // Legendary weapons
  { type: "weapon", damage: 500, name: "Common Legendary Sword", rarity: 10, weaponRarity: "legendary" },
  { type: "weapon", damage: 1000, name: "Rare Legendary Axe", rarity: 2.5, weaponRarity: "rare" },
  { type: "weapon", damage: 2500000, name: "Mythic Godly Blade", rarity: 0.01, weaponRarity: "mythic" }
];

// Shop items
const shopItems = [
  { id: "small_potion", name: "Small Health Potion", price: 50, effect: () => healPlayer(30) },
  { id: "medium_potion", name: "Medium Health Potion", price: 150, effect: () => healPlayer(75) },
  { id: "large_potion", name: "Large Health Potion", price: 400, effect: () => healPlayer(150) },
  { id: "health_upgrade", name: "Health Upgrade (+25 Max HP)", price: 200, effect: () => upgradeMaxHealth(25) },
  { id: "health_upgrade_2", name: "Health Upgrade (+50 Max HP)", price: 500, effect: () => upgradeMaxHealth(50) },
  { id: "damage_upgrade", name: "Damage Multiplier (+10%)", price: 300, effect: () => upgradeDamage(1.10) },
  { id: "damage_upgrade_2", name: "Damage Multiplier (+25%)", price: 1000, effect: () => upgradeDamage(1.25) },
  { id: "inv_mult_1", name: "Inventory Slot +20", price: 100, effect: () => upgradeInventory(20) },
  { id: "inv_mult_2", name: "Inventory Slot +50", price: 350, effect: () => upgradeInventory(50) }
];

function getRandomMobVariant() {
  return MOB_VARIANTS[Math.floor(Math.random() * MOB_VARIANTS.length)];
}

function spawnNewMob() {
  gameState.currentMobVariant = getRandomMobVariant();
  gameState.mobMaxHp = Math.floor(10 * Math.pow(1.3, gameState.mobLevel - 1) * gameState.currentMobVariant.hpMult);
  gameState.mobHp = gameState.mobMaxHp;
  gameState.lastMobAttackTime = Date.now();
}

// Idle mob attack loop
setInterval(() => {
  if (!gameState.currentMobVariant) {
    spawnNewMob();
  }

  gameState.mobHp -= gameState.baseDamage * gameState.damageMultiplier;

  if (gameState.mobHp <= 0) {
    gameState.spins++;
    gameState.mobLevel++;
    log(`🧟 ${gameState.currentMobVariant.name} defeated! +1 Spin (Level ${gameState.mobLevel})`);
    spawnNewMob();
  } else {
    // 50% chance for mob to attack
    if (Math.random() < 0.5) {
      const mobDamage = Math.floor(2 * Math.pow(1.1, gameState.mobLevel - 1) * gameState.currentMobVariant.damageMult);
      gameState.playerHp -= mobDamage;
      log(`💥 ${gameState.currentMobVariant.name} deals ${mobDamage} damage!`);
      
      if (gameState.playerHp <= 0) {
        log("💀 You died! Game Over. Progress reset.");
        resetGameProgress();
      }
    }
  }

  updateUI();
}, 1000);

// Passive health regeneration
setInterval(() => {
  if (gameState.playerHp < gameState.playerMaxHp) {
    gameState.playerHp = Math.min(gameState.playerHp + 1, gameState.playerMaxHp);
    updateUI();
  }
}, 2000);

// Spin wheel
function spinWheel(amount = 1) {
  if (gameState.spins < amount) {
    log(`❌ Not enough spins! (Have: ${gameState.spins}, Need: ${amount})`);
    return;
  }

  gameState.spins -= amount;
  let logText = "";

  for (let i = 0; i < amount; i++) {
    const roll = Math.random() * 100;
    let accumulated = 0;
    let prize = null;

    for (let item of wheel) {
      accumulated += item.rarity;
      if (roll <= accumulated) {
        prize = item;
        break;
      }
    }

    if (!prize) {
      prize = wheel[0];
    }

    // Process prize
    if (prize.type === "money") {
      gameState.money += prize.value;
      logText = `💰 Won $${prize.value}`;
    } else if (prize.type === "health_potion") {
      addToInventory(prize.name, prize.value, "potion");
      logText = `🧪 Won ${prize.name}`;
    } else if (prize.type === "health_mult") {
      gameState.healthMultiplier *= prize.value;
      gameState.playerMaxHp = Math.floor(100 * gameState.healthMultiplier);
      gameState.playerHp = gameState.playerMaxHp;
      logText = `💚 Health Multiplier +${((prize.value - 1) * 100).toFixed(0)}%`;
    } else if (prize.type === "damage_mult") {
      addToInventory(prize.name, prize.value, "damage_mult");
      logText = `⚔️ Won ${prize.name}`;
    } else if (prize.type === "weapon") {
      addToInventory(prize.name, prize.damage, "weapon");
      logText = `⚔️ Won ${prize.name}!`;
    }
  }

  log(logText);
  updateUI();
}

// Spin amount functions
function spinAmount(amount) {
  spinWheel(amount);
}

function spinMax() {
  spinWheel(gameState.spins);
}

// Inventory management
function addToInventory(name, value, type) {
  if (getUsedInventorySlots() >= gameState.maxInventorySlots) {
    log("❌ Inventory full!");
    return false;
  }

  const key = name;
  if (!gameState.inventory[key]) {
    gameState.inventory[key] = {
      name: name,
      value: value,
      type: type,
      count: 0,
      rarity: getItemRarity(name),
      stackable: type === "damage_mult" || type === "health_mult"
    };
  }
  
  if (gameState.inventory[key].stackable && gameState.inventory[key].count >= 128) {
    log("❌ Stack limit (128) reached!");
    return false;
  }

  gameState.inventory[key].count++;
  return true;
}

function getUsedInventorySlots() {
  let used = 0;
  for (let key in gameState.inventory) {
    if (gameState.inventory[key].stackable) {
      used += 1; // Stackable items take 1 slot
    } else {
      used += gameState.inventory[key].count; // Non-stackable items take 1 slot per item
    }
  }
  return used;
}

function getItemRarity(name) {
  if (name.includes("Mythic")) return "mythic";
  if (name.includes("Rare Legendary")) return "rare";
  if (name.includes("Common Legendary")) return "legendary";
  if (name.includes("Potion")) return "common";
  return "common";
}

// Shop functions
function toggleShop() {
  gameState.shopOpen = !gameState.shopOpen;
  document.getElementById("shopModal").style.display = gameState.shopOpen ? "block" : "none";
  updateShopDisplay();
}

function updateShopDisplay() {
  const shopItems_html = document.getElementById("shopItems");
  shopItems_html.innerHTML = "";
  
  shopItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "shop-item";
    div.innerHTML = `
      <div class="shop-item-info">
        <div class="shop-item-name">${item.name}</div>
        <div class="shop-item-price">💰 $${item.price}</div>
      </div>
      <button class="shop-item-button" onclick="buyItem('${item.id}')" ${gameState.money < item.price ? 'disabled' : ''}>Buy</button>
    `;
    shopItems_html.appendChild(div);
  });
}

function buyItem(itemId) {
  const item = shopItems.find(i => i.id === itemId);
  if (!item) return;
  
  if (gameState.money < item.price) {
    log("❌ Not enough money!");
    return;
  }

  gameState.money -= item.price;
  item.effect();
  log(`✅ Bought ${item.name}`);
  updateUI();
  updateShopDisplay();
}

function healPlayer(amount) {
  gameState.playerHp = Math.min(gameState.playerHp + amount, gameState.playerMaxHp);
}

function upgradeMaxHealth(amount) {
  gameState.playerMaxHp += amount;
  gameState.playerHp = gameState.playerMaxHp;
}

function upgradeDamage(multiplier) {
  gameState.baseDamage *= multiplier;
}

function upgradeInventory(amount) {
  gameState.maxInventorySlots += amount;
}

// Equip/Unequip system
function equipItem(itemName) {
  const item = gameState.inventory[itemName];
  if (!item) return;

  if (!item.stackable || item.type === "weapon") {
    log("❌ Cannot equip non-stackable items!");
    return;
  }

  if (item.type === "damage_mult") {
    if (!gameState.equipment[itemName]) {
      gameState.equipment[itemName] = 0;
    }
    gameState.equipment[itemName]++;
    gameState.equipedMultipliers.push(itemName);
    recalculateEquipedMultipliers();
    log(`⚔️ Equipped ${itemName}`);
  }
}

function unequipItem(itemName) {
  if (!gameState.equipment[itemName] || gameState.equipment[itemName] === 0) {
    log("❌ Item not equipped!");
    return;
  }

  gameState.equipment[itemName]--;
  const index = gameState.equipedMultipliers.lastIndexOf(itemName);
  if (index > -1) {
    gameState.equipedMultipliers.splice(index, 1);
  }
  recalculateEquipedMultipliers();
  log(`🔓 Unequipped ${itemName}`);
}

function recalculateEquipedMultipliers() {
  let totalMult = 1.0;
  for (let itemName of gameState.equipedMultipliers) {
    const item = gameState.inventory[itemName];
    if (item && item.type === "damage_mult") {
      totalMult *= item.value;
    }
  }
  gameState.damageMultiplier = totalMult;
}

// Use item from inventory
function useItem(itemName) {
  const item = gameState.inventory[itemName];
  if (!item) return;

  if (item.type === "potion") {
    if (gameState.playerHp >= gameState.playerMaxHp) {
      log(`❌ You already have full health!`);
      return;
    }
    healPlayer(item.value);
    log(`🧪 Used ${itemName}. Restored ${item.value} HP!`);
    item.count--;
    if (item.count <= 0) {
      delete gameState.inventory[itemName];
    }
  } else if (item.type === "weapon") {
    gameState.baseDamage += item.value;
    log(`⚔️ Equipped ${itemName}! Damage +${item.value}`);
    item.count--;
    if (item.count <= 0) {
      delete gameState.inventory[itemName];
    }
  }

  updateUI();
}

// Trash item
function trashItem(itemName) {
  if (!gameState.inventory[itemName]) {
    log("❌ Item not found!");
    return;
  }

  delete gameState.inventory[itemName];
  log(`🗑️ Trashed ${itemName}`);
  updateUI();
}

// UI Updates
function updateUI() {
  document.getElementById("money").innerText = gameState.money;
  document.getElementById("spins").innerText = gameState.spins;
  document.getElementById("baseDamage").innerText = Math.floor(gameState.baseDamage);
  document.getElementById("damageMultiplier").innerText = gameState.damageMultiplier.toFixed(2);
  document.getElementById("totalDamage").innerText = Math.floor(gameState.baseDamage * gameState.damageMultiplier);
  
  document.getElementById("playerHp").innerText = Math.floor(gameState.playerHp);
  document.getElementById("playerMaxHp").innerText = gameState.playerMaxHp;
  
  const hpPercent = (gameState.playerHp / gameState.playerMaxHp) * 100;
  document.getElementById("playerHpBar").style.width = Math.max(hpPercent, 0) + "%";
  
  if (gameState.currentMobVariant) {
    document.getElementById("mobName").innerText = `${gameState.currentMobVariant.emoji} ${gameState.currentMobVariant.name}`;
    document.getElementById("mobLevel").innerText = `Level ${gameState.mobLevel}`;
  }

  document.getElementById("mobHp").innerText = Math.floor(gameState.mobHp);
  document.getElementById("mobMax").innerText = gameState.mobMaxHp;

  const mobHpPercent = (Math.max(gameState.mobHp, 0) / gameState.mobMaxHp) * 100;
  document.getElementById("mobHpBar").style.width = mobHpPercent + "%";

  const usedSlots = getUsedInventorySlots();
  document.getElementById("invSlots").innerText = `${usedSlots}/${gameState.maxInventorySlots}`;

  updateInventoryDisplay();
}

function updateInventoryDisplay() {
  const inventoryDiv = document.getElementById("inventory");
  inventoryDiv.innerHTML = `<h3>📦 Inventory (${getUsedInventorySlots()}/${gameState.maxInventorySlots})</h3>`;

  const items = Object.values(gameState.inventory);
  if (items.length === 0) {
    inventoryDiv.innerHTML += "<p>Empty</p>";
    return;
  }

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = `inventory-item ${item.rarity}`;
    
    let actionButtons = "";
    if (item.type === "potion") {
      actionButtons = `<button style="padding: 5px 10px; font-size: 12px;" onclick="useItem('${item.name}')">Use</button>`;
    } else if (item.type === "weapon") {
      actionButtons = `<button style="padding: 5px 10px; font-size: 12px;" onclick="useItem('${item.name}')">Equip</button>`;
    } else if (item.stackable) {
      const equipped = gameState.equipment[item.name] || 0;
      actionButtons = `
        <button style="padding: 5px 10px; font-size: 12px;" onclick="equipItem('${item.name}')">E+</button>
        <button style="padding: 5px 10px; font-size: 12px;" onclick="unequipItem('${item.name}')">E-</button>
        <span style="color: #ffaa00; margin: 0 5px;">(${equipped} equipped)</span>
      `;
    }

    actionButtons += `<button style="padding: 5px 10px; font-size: 12px; background: #aa0000;" onclick="trashItem('${item.name}')">🗑️</button>`;

    div.innerHTML = `
      <div class="inventory-item-name">
        <strong>${item.name}</strong>
        ${item.type === "weapon" ? `<br/><span style="color: #ffaa00;">Damage: ${item.value}</span>` : ""}
        ${item.type === "potion" ? `<br/><span style="color: #00ff00;">Heal: ${item.value}</span>` : ""}
        ${item.type === "damage_mult" ? `<br/><span style="color: #ff9900;">×${item.value.toFixed(2)}</span>` : ""}
      </div>
      <div style="display: flex; gap: 5px; align-items: center;">
        <span class="inventory-item-count">×${item.count}</span>
        ${actionButtons}
      </div>
    `;
    inventoryDiv.appendChild(div);
  });
}

function log(text) {
  document.getElementById("log").innerText = text;
}

// Cookie Management
function saveToCookie() {
  const data = JSON.stringify(gameState);
  document.cookie = `waeGameState=${encodeURIComponent(data)}; path=/; max-age=${60*60*24*365}`;
}

function loadFromCookie() {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === 'waeGameState') {
      try {
        const savedState = JSON.parse(decodeURIComponent(value));
        Object.assign(gameState, savedState);
        return true;
      } catch (e) {
        console.error('Error loading save:', e);
        return false;
      }
    }
  }
  return false;
}

function resetGameProgress() {
  gameState = {
    money: 0,
    spins: 0,
    playerHp: 100,
    playerMaxHp: 100,
    baseDamage: 1,
    damageMultiplier: 1.0,
    healthMultiplier: 1.0,
    mobMaxHp: 10,
    mobHp: 10,
    mobLevel: 1,
    inventory: {},
    equipment: {},
    equipedMultipliers: [],
    inventorySlots: 80,
    maxInventorySlots: 80,
    shopOpen: false,
    currentMobVariant: null,
    lastMobAttackTime: 0
  };
  spawnNewMob();
  updateUI();
  saveToCookie();
}

// Auto-save on intervals
setInterval(() => {
  saveToCookie();
}, 5000);

// Initialize UI
loadFromCookie();
if (!gameState.currentMobVariant) {
  spawnNewMob();
}
updateUI();

