
const CARDS = {

 // ────────────────────────────────────────────────────────────
 // ROGUE
 // ────────────────────────────────────────────────────────────
 Rogue: [
 // TIER I
 { id:'r01', name:'Backstab', tier:1, type:'damage', risk:6,
 hit:'If the enemy has taken damage this turn, deal 5 melee damage. Otherwise deal 1. Gain 1 Combo Point.',
 crit:'Deal double damage OR eliminate a Tier II or lower foe.',
 miss:null, critmiss:'Take 3 damage.' },
 { id:'r02', name:'Sinister Strike', tier:1, type:'damage', risk:6,
 hit:'Deal 4 melee damage. Gain 1 Combo Point.',
 crit:'Deal double damage, gain 2 Combo Points.',
 miss:null, critmiss:'Take 2 damage.' },
 { id:'r03', name:'Cheap Shot', tier:1, type:'damage', risk:8,
 hit:'Deal 3 melee damage. Marks target (+2 damage taken). If Stealthed: STUN target — they lose their next turn. Gain 2 Combo Points.',
 crit:'Deal double damage. Play another card.',
 miss:null, critmiss:'Take 1 damage.' },
 { id:'r04', name:'Deadly Poison', tier:1, type:'cards', risk:5,
 hit:'Apply 3 Poison stacks to target. Gain 1 Combo Point. Play another card this turn.',
 crit:'Apply 6 Poison stacks to target. Gain 2 Combo Points. Play another card.',
 miss:null, critmiss:'Take 1 damage and lose 1 Combo Point.' },
 { id:'r05', name:'Marked for Death',tier:1, type:'target', risk:7,
 hit:'Apply Marked debuff (+2 damage taken this turn). Play another card. If Stealthed: also deal +2 bonus damage immediately. Gain 1 Combo Point.',
 crit:'Apply Marked to ALL enemies. Stealthed bonus applies to each.',
 miss:null, critmiss:'You take +1 damage from all sources this turn.' },
 { id:'r06', name:'Sprint', tier:1, type:'health', risk:6,
 hit:'Extra play this turn. +4 bonus to that card\'s roll (needs 4 less to succeed).',
 crit:'+4 to next roll. All enemies deal half attack damage this round.',
 miss:null, critmiss:'-3 from your next roll.' },
 { id:'r07', name:'Pick Pocket', tier:1, type:'cards', risk:5,
 hit:'Steal 3-15 gold AND a random item from the enemy (Potion, Stone, Smoke Bomb, etc). Gain 1 Combo Point.',
 crit:'Steal gold AND an item twice — pulls rarer items too.',
 miss:null, critmiss:'Take 2 damage.' },
 { id:'r08', name:'Gouge', tier:1, type:'damage', risk:6,
 hit:'Deal 2 melee damage. Enemy deals half attack damage this round. Gain 1 Combo Point.',
 crit:'Targeted enemy cannot attack this round. Gain 2 Combo Points.',
 miss:null, critmiss:'Take 1 damage and lose 1 Combo Point.' },
 { id:'r09', name:'Shiv', tier:1, type:'damage', risk:5,
 hit:'Deal 1 damage. Gain +2 on your next roll. Play another card. Gain 1 Combo Point.',
 crit:'+5 on next roll. Play another card. Gain 2 Combo Points.',
 miss:null, critmiss:'Take 1 damage.' },
 { id:'r10', name:'Roll the Bones', tier:1, type:'cards', risk:0,
 hit:'Rolls its own d20 (+your roll bonus). 1-5: Lose half HP. 6-10: Heal 5. 11-15: Next ability +3 dmg + extra play. 16-19: 2 auto-succeed plays. 20: Pick any card from hand/discard/deck — play as CRITICAL HIT.',
 crit:null, miss:null, critmiss:null },
 { id:'r11', name:'Rupture', tier:1, type:'damage', risk:8,
 hit:'Spend Combo Points. Apply Hemorrhage stacks that deal damage each enemy turn and tick down: 1pt=1, 2pt=2, 3pt=4, 4pt=7, 5pt=11 stacks.',
 crit:'Points are returned — apply stacks for free.',
 miss:null, critmiss:'Lose all Combo Points.' },
 { id:'r12', name:'Obfuscate', tier:1, type:'cards', risk:6,
 hit:'Play a card from your discard pile. Gain Stealth (lasts until your next attack). Gain 1 Combo Point.',
 crit:'Also play the top ability from your deck as a critical.',
 miss:null, critmiss:'Only draw 1 card on your next turn.' },
 // TIER II
 { id:'r13', name:'Stealth', tier:2, type:'health', risk:6,
 hit:'Your next damaging ability deals double damage but requires +3 to succeed. Play another card. Gain 1 Combo Point.',
 crit:'Your next 2 abilities deal double damage.',
 miss:null, critmiss:'Only draw 1 card on your next turn.' },
 { id:'r14', name:'Ambush', tier:2, type:'damage', risk:5,
 hit:'If Stealthed: deal 7 melee damage. Gain 2 Combo Points.',
 crit:'Deal double damage OR eliminate a Tier II or lower foe.',
 miss:null, critmiss:'Take 5 damage.' },
 { id:'r15', name:'Coup de Grâce', tier:2, type:'damage', risk:8,
 hit:'Spend Combo Points. Scaling damage: 1pt=3, 2pt=6, 3pt=10, 4pt=15, 5pt=21. Target below half HP: multiplier increases per point spent.',
 crit:'Deal double damage. Points not consumed.',
 miss:null, critmiss:'Lose all Combo Points and take that much damage.' },
 { id:'r16', name:'Fan of Knives', tier:2, type:'damage', risk:7,
 hit:'Deal 2 melee damage to all enemies. Gain 1 Combo Point per enemy hit.',
 crit:'Deal double damage.',
 miss:null, critmiss:'Take 1 damage for each enemy in play.' },
 { id:'r17', name:'Premeditation', tier:2, type:'cards', risk:4,
 hit:'Your next ability automatically succeeds. Gain 1 Combo Point.',
 crit:'Your next ability resolves as a critical hit (usable anytime this combat).',
 miss:null, critmiss:'Resolve the top card of your deck as a roll of 1.' },
 { id:'r18', name:'Mutilate', tier:2, type:'damage', risk:6,
 hit:'Deal 3 damage. Gain 1 Combo Point for each enemy hit (may target the same enemy twice).',
 crit:'Gain 2 Combo Points per enemy hit. Resolve twice.',
 miss:null, critmiss:'Take 1 damage and lose 1 Combo Point.' },
 // TIER III
 { id:'r19', name:'Cloak of Shadows',tier:3, type:'health', risk:10,
 hit:'Take no damage from abilities this turn. Gain Stealth. Play another card. Gain 1 Combo Point.',
 crit:'Effect lasts a second round.',
 miss:null, critmiss:'Take +2 damage from all sources this turn.' },
 { id:'r20', name:'Seal Fate', tier:3, type:'damage', risk:8,
 hit:'Deal 5 melee damage. If target below half health, deal 10 instead. Gain 1 Combo Point.',
 crit:'Deal double damage.',
 miss:null, critmiss:'Take 5 damage.' },
 { id:'r21', name:'Eviscerate', tier:3, type:'damage', risk:6,
 hit:'Spend Combo Points. Scaling damage: 1pt=3, 2pt=7, 3pt=12, 4pt=17, 5pt=23 melee damage.',
 crit:'Deal double. Points not consumed.',
 miss:null, critmiss:'Lose all Combo Points.' },
 { id:'r22', name:'Blade Flurry', tier:3, type:'damage', risk:8,
 hit:'Spend Combo Points. Chosen damage card repeats — scaling: 1pt=1×, 2pt=2×+1dmg, 3pt=3×+2dmg, 4pt=4×+4dmg, 5pt=5×+6dmg each repeat.',
 crit:'Resolve another ability this turn with bonus, OR gain 2 Combo Points.',
 miss:null, critmiss:'Lose all Combo Points and take that much damage.' },
 { id:'r23', name:'Vigor', tier:3, type:'health', risk:6,
 hit:'You require 2 less on rolls to succeed for the rest of combat.',
 crit:null, miss:null, critmiss:'Lose your next turn.' },
 // TIER IV
 { id:'r24', name:'Master of Shadows',tier:4,type:'cards', risk:10,
 hit:'Gain Stealth (lasts until next attack). +1 extra play. Gain 1 Combo Point.',
 crit:'Gain Stealth. +2 extra plays. Gain 1 Combo Point.',
 miss:null, critmiss:'Take 3 damage.' },
 { id:'r25', name:'Adrenaline Rush', tier:4, type:'health', risk:10,
 hit:'Adrenaline Rush gains 3 counters. Once per turn, remove a counter to draw and play an additional card.',
 crit:'May use counters to replay the same ability.',
 miss:null, critmiss:'Lose your next turn.' },
 { id:'r26', name:'Shadow Step', tier:4, type:'target', risk:7,
 hit:'Your next ability deals double damage. Play another card. You have Stealth this turn.',
 crit:'Gain 3 Combo Points.',
 miss:null, critmiss:'Take +3 damage this turn.' },
 { id:'r27', name:'Skull Crack', tier:1, type:'damage', risk:6,
 hit:'Deal 2 melee damage. enemy deals half ability damage this round (rounded up). Gain 1 combo point',
 crit:null, miss:null, critmiss:'only draw 1 card on your next turn.' },
 { id:'r28', name:"Slice 'n Dice", tier:1, type:'cards', risk:6,
 hit:'You and target ally may play another ability this turn. Gain 1 combo point',
 crit:'All adventurers may play another ability', miss:null, critmiss:'lose 2 combo points' },
 { id:'r29', name:'Way Lay', tier:2, type:'damage', risk:10,
 hit:'Use up to X combo points. Deal 2 melee damage for each combo point used',
 crit:'Deal double damage', miss:null, critmiss:'Lose all combo points and take that much damage' },
 { id:'r30', name:'Killing Spree', tier:2, type:'damage', risk:10,
 hit:'Use up to X combo points. Deal X x2 damage to an enemy. If this kills an enemy you may eliminate X Tier 1 or less enemies.',
 crit:'Deal double damage.', miss:null, critmiss:'Lose all combo points. and deal X damage to all allies. X is equal to the number of combo points lost' },
 { id:'r31', name:'Preparation', tier:3, type:'cards', risk:10,
 hit:'Gain 3 combo points. Play another ability from your hand',
 crit:'You may Play another ability from your hand and resolve it as a roll 20', miss:null, critmiss:'Lose all combo points. Only draw 1 card on your next turn' },
 { id:'r32', name:'Vanish', tier:3, type:'cards', risk:6,
 hit:'Take no damage from attacks this turn. Gain stealthed. Play another card from your hand. Gain 1 combo point',
 crit:'Resolve the additional card played as a roll 20', miss:null, critmiss:'You take +1 damage from all sources this turn' },
 { id:'r33', name:'Cold Blood', tier:3, type:'cards', risk:12,
 hit:'Play another ability from your hand and roll. If you succeed resolve it as if it were a roll 20',
 crit:'Play an ability from your hand deck or discard and resolve it as a roll 20', miss:null, critmiss:'resolve a random card from your hand as a roll 1' },
 { id:'r34', name:'Shadow Strike', tier:3, type:'damage', risk:8,
 hit:'If you are stealthed deal 10 damage.',
 crit:'deal double damage', miss:null, critmiss:'take 3 damage' },
 { id:'r35', name:'Eviscerate', tier:3, type:'damage', risk:6,
 hit:'Use up to X combo points. Deal 4 melee damage for each combo point used',
 crit:'Deal 5 damage for each combo point used. Dont consume combo points', miss:null, critmiss:'lose all combo points' }],

 // ────────────────────────────────────────────────────────────
 // MAGE
 // ────────────────────────────────────────────────────────────
 Mage: [
 // TIER I
 { id:'m01', name:'Fireball', tier:1, type:'damage', risk:7,
 hit:'Deal 4 fire magic damage. Apply 1 Ignite counter to the enemy.',
 crit:'Deal double damage.',
 miss:null, critmiss:'Take 2 damage.' },
 { id:'m02', name:'Frostbolt', tier:1, type:'damage', risk:6,
 hit:'Deal 2 ice magic damage. Enemy deals half attack damage this turn (rounded up).',
 crit:'Deal double damage.',
 miss:null, critmiss:'Take 2 damage.' },
 { id:'m03', name:'Arcane Missiles', tier:1, type:'target', risk:8,
 hit:'Deal 2 arcane magic damage. Repeat up to 3× (roll again each time).',
 crit:'Deal double damage.',
 miss:null, critmiss:'Take 2 damage.' },
 { id:'m04', name:'Arcane Explosion',tier:1, type:'damage', risk:10,
 hit:'Deal 1 arcane damage to ALL enemies. Next turn draw +1 card per enemy hit (max +3).',
 crit:'Deal double damage.',
 miss:null, critmiss:'Take 2 damage. Only draw 1 card next turn.' },
 { id:'m05', name:'Polymorph', tier:1, type:'target', risk:9,
 hit:'Target enemy gains 5 life. Enemies deal no attack damage this turn.',
 crit:"Enemies don't deal damage for 1 additional round.",
 miss:null, critmiss:'A random ally deals no damage this round.' },
 { id:'m06', name:'Conjure Water', tier:1, type:'cards', risk:8,
 hit:'Create a Conjure Water bottle in your inventory. Use it to draw extra cards (roll ÷ 5, rounded up).',
 crit:'Resolve twice.',
 miss:null, critmiss:'-1 card draw next turn.' },
 { id:'m07', name:'Mana Agate', tier:1, type:'cards', risk:6,
 hit:'Create a Mana Agate in your inventory. Use it to roll a d20 and save the result for any roll this combat.',
 crit:'Resolve twice.',
 miss:null, critmiss:'-2 on next roll.' },
 { id:'m08', name:'Conjure Food', tier:1, type:'cards', risk:8,
 hit:'Create a Conjure Food ration in your inventory. Use it to heal HP (roll ÷ 3, rounded up).',
 crit:'Resolve twice.',
 miss:null, critmiss:'Target ally loses 2 life.' },
 // TIER II
 { id:'m09', name:'Frost Nova', tier:2, type:'damage', risk:9,
 hit:'Deal 1 ice magic damage to ALL enemies. Enemies deal no attack damage this turn.',
 crit:'Deal double damage.',
 miss:null, critmiss:'Take 1 damage. Draw 1 less card next turn.' },
 { id:'m10', name:'Cone of Cold', tier:2, type:'damage', risk:11,
 hit:'Deal 3 ice magic damage to 2 targets. Enemies deal half attack damage this round.',
 crit:null, miss:null, critmiss:null },
 { id:'m11', name:'Pyroblast', tier:2, type:'target', risk:10,
 hit:'Deal 10 fire magic damage, take 2 fire damage yourself. Apply 2 Ignite counters.',
 crit:'Deal double damage.',
 miss:'You and a random ally take 2 damage.', critmiss:'You and an ally take 5 damage.' },
 { id:'m12', name:'Ice Armor', tier:2, type:'health', risk:7,
 hit:'Reduce attack damage by half (2 charges). When triggered, roll 7+ next turn to play a second ability.',
 crit:'Prevent ALL attack damage.',
 miss:null, critmiss:'Deal half damage next turn.' },
 { id:'m13', name:'Ice Lance', tier:2, type:'cards', risk:8,
 hit:'Deal 2 ice magic damage. If target already took ice damage this turn, deal double. Cast up to 3× per turn.',
 crit:'Cast up to 5× per turn.',
 miss:null, critmiss:null },
 { id:'m14', name:'Hot Streak', tier:2, type:'cards', risk:8,
 hit:'If you dealt fire damage last turn, add 1 counter (max 3). Deal +X fire damage equal to counters on this card.',
 crit:'Start with 3 counters.',
 miss:null, critmiss:'Lose your next turn.' },
 { id:'m15', name:'Blast Wave', tier:2, type:'damage', risk:11,
 hit:'Deal 3 fire magic damage to all enemies. Next Fire ability deals +1 per enemy hit. Apply 1 Ignite to each.',
 crit:'Deal double damage to enemies.',
 miss:null, critmiss:'Enemies take no damage from Blast Wave.' },
 { id:'m16', name:'Mage Armor', tier:2, type:'health', risk:7,
 hit:'Reduce ability damage by half (2 charges). When triggered, roll 7+ next turn to roll for each ability twice.',
 crit:'Draw extra cards each round = damage taken previous round.',
 miss:null, critmiss:null },
 // TIER III
 { id:'m17', name:'Combustion', tier:3, type:'damage', risk:10,
 hit:'Your next fire ability auto-succeeds. Each fire ability this turn applies 1 extra Ignite counter.',
 crit:'Your next 2 fire abilities auto-succeed.',
 miss:null, critmiss:'-3 on all rolls this turn.' },
 { id:'m18', name:'Arcane Power', tier:3, type:'damage', risk:10,
 hit:'Your arcane abilities deal +3 damage. Remains in play for 3 turns.',
 crit:'Lasts 5 turns.',
 miss:null, critmiss:'Arcane abilities deal -1 damage this turn.' },
 { id:'m19', name:'Frozen Orb', tier:3, type:'damage', risk:9,
 hit:'Deal 2 ice magic damage to all enemies. Apply 1 Freeze counter. At 3 counters, enemies lose their turn.',
 crit:'Apply 2 Freeze counters.',
 miss:null, critmiss:'Take 2 ice damage.' },
 // TIER IV
 { id:'m20', name:'Counterspell', tier:4, type:'target', risk:10,
 hit:'Cancel one enemy ability this turn. Your next ability requires 2 less to succeed.',
 crit:'Cancel ALL enemy abilities this turn.',
 miss:null, critmiss:'Your next ability requires +3 to succeed.' },
 { id:'m21', name:'Time Stop', tier:4, type:'target', risk:12,
 hit:'Enemies take no actions this turn. You may play 2 additional abilities.',
 crit:'Also deal 3 arcane damage to all enemies.',
 miss:null, critmiss:'Lose your next turn.' },
 { id:'m22', name:'Fireball', tier:1, type:'damage', risk:7,
 hit:'Deal 4 fire damage. Apply 1 ignite counter to the enemy',
 crit:'Deal double damage', miss:null, critmiss:'Take 2 damage' },
 { id:'m23', name:'Frostbolt', tier:1, type:'damage', risk:6,
 hit:'Deal 2 ice damage. They deal half attack damage this turn (rounded up)',
 crit:'Deal double damage', miss:null, critmiss:'Take 2 damage' },
 { id:'m24', name:'Arcane Missiles', tier:1, type:'damage', risk:8,
 hit:'Deal 2 arcane damage. You may repeat this effect up to 3 times. (Roll again for each action)',
 crit:'Deal double damage', miss:null, critmiss:'Take 2 damage' },
 { id:'m25', name:'Hot Streak', tier:2, type:'health', risk:8,
 hit:'At the end of each turn if you dealt fire damage put 1 counter on Hot Streak. Deal + x fire damage = to the amount of counters on hot steak. max of 3 counters.',
 crit:'Start with 3 counters.', miss:null, critmiss:'Lose your next turn' },
 { id:'m26', name:'Molten Armor', tier:2, type:'damage', risk:8,
 hit:'Your fire abilities deal +1 damage. If you take damage from an enemy deal. them 1 damage and roll. On roll > 7 apply 1 ignite counter to them. This ability has 2 charges.',
 crit:null, miss:null, critmiss:'take 2 Fire damage' },
 { id:'m27', name:'Water Elemental', tier:2, type:'target', risk:8,
 hit:'Summon a Water Elemental (6 HP). On summon: deal 2 ice magic to all enemies. Each turn it deals 2 ice magic to ALL enemies and taunts attacks.',
 crit:'Water Elemental enters play with +3 max HP.', miss:null, critmiss:null },
 { id:'m28', name:'Blizzard', tier:3, type:'damage', risk:12,
 hit:'Deal 2 ice magic damage to all enemies. Channel begins: at the start of each turn roll DC 12 — on success deal escalating ice damage to all enemies (3, 4, 5, …). Channel breaks on failed roll.',
 crit:'Initial damage is doubled.', miss:null, critmiss:'You take 2 damage.' },
 { id:'m29', name:'Flamestrike', tier:3, type:'damage', risk:12,
 hit:'Deal 3 fire damage. All enemies take +1 damage this round. apply 2 ignite counters to each enemy dealt damage this way..',
 crit:'Double damage and + damage bonus', miss:null, critmiss:'All allies take 3 damage' },
 { id:'m30', name:'Presence of Mind', tier:3, type:'cards', risk:10,
 hit:'You may play another ability this turn That ability cannot fail.',
 crit:'Your abilities this turn cannot fail. You may play up to 2 other abilities this turn', miss:null, critmiss:'Draw only 1 card on your next turn. -10 on your next roll' },
 { id:'m31', name:'Evocation', tier:3, type:'cards', risk:10,
 hit:'Draw 3 cards and Roll. You may play X additional cards this turn where X is your roll divided by 4 (rounded up)',
 crit:'Draw all remaining cards in your deck and Roll. You may play X additional cards this turn where X is your roll divided by 2 (rounded up)', miss:null, critmiss:null },
 { id:'m32', name:'Dragon’s Breath', tier:3, type:'damage', risk:12,
 hit:'Deal 4 Fire damage Enemies deal half attack damage this turn (rounded up) Apply 1 ignite counter to each enemy dealt damage this way',
 crit:'Deal double damage to enemies', miss:null, critmiss:'all players take 2 damage' },
 { id:'m33', name:'Cold Snap', tier:3, type:'cards', risk:12,
 hit:'Your next ice ability deals+5 damage this turn. You may play another card this turn',
 crit:'Resolve your next ability as a roll 20', miss:null, critmiss:'Take 3 damage' },
 { id:'m34', name:'Pyroclasm', tier:3, type:'damage', risk:10,
 hit:'Remove each ignite counter on an enemy. Deal X + 3 damage for each counter removed this way. Where X is the current ignite value.',
 crit:'Target all enemies. Apply 1 ignite counter', miss:null, critmiss:null },
 { id:'m35', name:'Icy Veins', tier:3, type:'target', risk:10,
 hit:'For the rest of combat. If the first ability you use each turn is an ice ability you may cast a second.',
 crit:null, miss:null, critmiss:null },
 { id:'m36', name:'Phoenix Flames', tier:3, type:'damage', risk:8,
 hit:'You may spread the ignite counters from one enemy to all enemies. Deal 1 fire damage to each enemy for each ignite counter they gain this way.',
 crit:'Apply 3 ignite counters to eaqch enemy', miss:null, critmiss:'Apply 1 ignite to each ally' },
 { id:'m37', name:'Meteor', tier:4, type:'damage', risk:15,
 hit:'Deal 7 fire damage. apply 2 ignite counters to each enemy dealt damage this way',
 crit:'Repeat this effect again at the end of your next turn.', miss:null, critmiss:'all allies take 5 damage and lose your next turn' },
 { id:'m38', name:'Arcane Blast', tier:4, type:'target', risk:15,
 hit:'deal x arcane damage where X is 12 + 3 for each card in your hand',
 crit:'target 1 additional enemy', miss:null, critmiss:'all players take 3 damage draw only 1 card next turn. lose you next turn' },
 { id:'m39', name:'Shatter', tier:4, type:'damage', risk:8,
 hit:'For the rest of combat Your Ice abilities deal double damage if the target has already taken Ice damage this turn',
 crit:null, miss:null, critmiss:null }],

 // ────────────────────────────────────────────────────────────
 // DRUID
 // ────────────────────────────────────────────────────────────
 Druid: [
 // TIER I
 { id:'d01', name:'Rejuvenation', tier:1, type:'health', risk:6,
 hit:'Heal target for 2. (Persists 3 rounds: heals 3 at start of each round.)',
 crit:'Heal 4 HP immediately. HoT heals 6/turn for 3 rounds (double).',
 miss:null, critmiss:'Target takes 1 damage.' },
 { id:'d02', name:'Wrath', tier:1, type:'target', risk:4,
 hit:'Deal 4 nature magic damage.',
 crit:'Deal double damage and +2 on your next roll.',
 miss:null, critmiss:'Take 2 damage.' },
 { id:'d03', name:'Ferocious Bite', tier:1, type:'damage', risk:8,
 hit:'Deal 6 melee damage.',
 crit:'Deal double damage and deal +2 damage next round.',
 miss:null, critmiss:'Take 2 damage.' },
 { id:'d04', name:'Healing Touch', tier:1, type:'health', risk:8,
 hit:'Heal yourself for 8.',
 crit:'Heal double.',
 miss:null, critmiss:'Take 2 damage.' },
 { id:'d05', name:'Claw', tier:1, type:'damage', risk:7,
 hit:'Deal 2 melee damage. Play another card.',
 crit:'Deal triple damage.',
 miss:null, critmiss:'Take 3 damage and -4 on next roll.' },
 { id:'d06', name:'Thorns', tier:1, type:'target', risk:6,
 hit:'Attack damage dealt to you this round is also dealt to 1 enemy.',
 crit:'Effect lasts an additional round.',
 miss:null, critmiss:'Take +2 damage this round.' },
 { id:'d07', name:'Shred', tier:1, type:'damage', risk:9,
 hit:'Deal 4 melee damage. If target is below half HP, deal 8 instead.',
 crit:'Deal double damage.',
 miss:null, critmiss:'Take 2 damage and +2 from all sources this round.' },
 { id:'d08', name:'Hibernate', tier:1, type:'health', risk:4,
 hit:'Regain health equal to 50% of your max life. Lose your next turn but take half damage during it.',
 crit:"Heal double. Don't lose next turn.",
 miss:null, critmiss:'Take damage equal to half the cards in your discard. Shuffle discard into deck.' },
 { id:'d09', name:'Savage Roar', tier:1, type:'damage', risk:9,
 hit:'Deal +1 melee damage this turn. If in Bear Form: +3 instead. If in Cat Form: play another card.',
 crit:'Resolve both form effects simultaneously.',
 miss:null, critmiss:'Take 2 damage.' },
 { id:'d10', name:'Lifebloom', tier:1, type:'health', risk:6,
 hit:'Heal for 1. Repeat until you fail (+4 difficulty each time, max 3×). (Persists 3 rounds, heals X per round, expires for 3X burst. X = successful casts.)', crit:'Automatically apply all 3 stacks of Lifebloom. Heals 1+2+3=6 HP now, HoT heals 3/round, expires for 9 HP burst.',
 miss:null, critmiss:'You and target ally take 1 damage.' },
 { id:'d11', name:'Shapeshift: Cat', tier:1, type:'cards', risk:6,
 hit:'Enter Cat Form. Melee abilities deal +2 damage. Only one form active at a time. Extra play this turn.',
 crit:'Play another card.',
 miss:null, critmiss:'Take 3 damage.' },
 { id:'d12', name:'Shapeshift: Bear', tier:1, type:'cards', risk:6,
 hit:'Enter Bear Form. Take half damage from all sources (min 1). Only one form active at a time. Extra play this turn.',
 crit:'Play another card.',
 miss:null, critmiss:'Take 3 damage.' },
 // TIER II
 { id:'d13', name:'Moonfire', tier:2, type:'target', risk:4,
 hit:'Deal 1 arcane damage. Repeat until fail (+2 difficulty each cast).',
 crit:'Deal double on this roll.',
 miss:null, critmiss:'Take 1 damage.' },
 { id:'d14', name:'Regrowth', tier:2, type:'health', risk:6,
 hit:'Heal for 5. (Persists 4 rounds: heal 2 at start of each round.)',
 crit:'Heal double. Target gets +2 on next roll.',
 miss:null, critmiss:'Target takes 1 damage and -2 on next roll.' },
 { id:'d15', name:'Pounce', tier:2, type:'target', risk:8,
 hit:'Deal 4 melee damage. Enemies take +3 melee damage this turn.',
 crit:'Deal double damage.',
 miss:null, critmiss:'Take 2 damage.' },
 { id:'d16', name:'Maul', tier:2, type:'damage', risk:8,
 hit:'Deal 4 melee damage. Enemy deals half attack damage this turn.',
 crit:'Deal double damage. Gain +1 damage for the rest of this round.',
 miss:null, critmiss:'Your strike goes wide — take 2 damage.' },
 { id:'d17', name:'Ravage', tier:2, type:'damage', risk:4,
 hit:'Deal 3 melee damage. Repeat until fail (+4 difficulty each time, max 3×).',
 crit:'Deal double, no difficulty increase on successive rolls.',
 miss:null, critmiss:'Take 2 damage.' },
 { id:'d18', name:'Prowl', tier:2, type:'cards', risk:8,
 hit:'Your next ability deals double damage. Play another card.',
 crit:'Take no attack damage this turn.',
 miss:null, critmiss:'Take +2 damage this turn.' },
 { id:'d19', name:'Bash', tier:2, type:'damage', risk:6,
 hit:'Deal 2 melee damage. Enemy deals no attack damage this turn.',
 crit:'Double damage. Prevent all attack damage taken this turn.',
 miss:null, critmiss:'Take 2 damage. Draw 1 less card next round.' },
 { id:'d20', name:'Feral Charge', tier:2, type:'damage', risk:7,
 hit:'Deal 6 melee damage. If above half life, take 3 damage. Bear Form: take no attack damage. Cat Form: play another card.',
 crit:'Deal double damage.',
 miss:null, critmiss:null },
 // TIER III
 { id:'d21', name:'Starfall', tier:3, type:'damage', risk:10,
 hit:'Enters play with 3 counters. Start of each turn: deal 4 arcane damage and remove 1 counter. Discard when empty.',
 crit:'Double the counters on Starfall.',
 miss:null, critmiss:'Deal 2 damage to yourself. Lose your next turn.' },
 { id:'d22', name:'Tranquility', tier:3, type:'health', risk:8,
 hit:'Heal 4 and apply a channeled HoT buff. Each turn, roll 8+ to heal (first tick 6, +2 per success after). Buff fades on failed roll.',
 crit:'Initial heal is doubled.',
 miss:null, critmiss:'Lose your next turn.' },
 { id:'d23', name:'Strangling Roots',tier:3, type:'target', risk:8,
 hit:'Enemies deal no attack damage this turn. Deal 2 nature magic damage.',
 crit:'Repeat this ability next round.',
 miss:null, critmiss:null },
 { id:'d24', name:'Bearzerk', tier:3, type:'health', risk:10,
 hit:'+2 damage this turn. Bear Form: deal double damage instead. Play another card.',
 crit:'Heal for all damage you deal this turn.',
 miss:null, critmiss:null },
 { id:'d25', name:'Wild Growth', tier:3, type:'health', risk:10,
 hit:'Heal yourself for 3. (Persists 4 rounds: decreasing heal each round.)',
 crit:null, miss:null, critmiss:'Take 3 damage.' },
 // TIER IV
 { id:'d26', name:"King of the Jungle",tier:4,type:'cards', risk:6,
 hit:'You are in BOTH Cat and Bear Form, gaining both bonuses. Discard if you play a non-Feral card.',
 crit:null, miss:null, critmiss:null },
 { id:'d27', name:'Mangle', tier:4, type:'damage', risk:4,
 hit:'Deal 3X melee damage where X = number of times you\'ve played Mangle this combat.',
 crit:'Resolve twice.',
 miss:null, critmiss:null },
 { id:'d28', name:'Rejuvenation', tier:1, type:'health', risk:6,
 hit:'Heal yourself for 2 HP. (Persists 3 rounds: heals 3 at start of each round.)',
 crit:'Heal 4 HP immediately. HoT heals 6/turn for 3 rounds (double).', miss:null, critmiss:'Take 1 damage.' },
 { id:'d29', name:'Starfire', tier:1, type:'damage', risk:8,
 hit:'Deal 6 arcane damage',
 crit:'Deal triple damage', miss:null, critmiss:'Take 3 damage and get -3 on next roll' },
 { id:'d30', name:'Solar Flare', tier:1, type:'damage', risk:8,
 hit:'Deal 3 nature magic damage to ALL enemies.',
 crit:'Deal double damage to ALL enemies.', miss:null, critmiss:'Take 2 damage.' },
 { id:'d31', name:'Swipe', tier:1, type:'damage', risk:8,
 hit:'Deal 3 melee damage to ALL enemies. Play another card.',
 crit:'Deal double damage to ALL enemies. Play another card.', miss:null, critmiss:'Take 2 damage.' },
 { id:'d32', name:"Nature's Might", tier:1, type:'damage', risk:6,
 hit:'Target ally deals +3 melee damage this turn. You may play another card',
 crit:'All allies deal +3 damage this turn and gain +2 to their next roll', miss:null, critmiss:'Target ally deals -2 damage this turn' },
 { id:'d33', name:'Maim', tier:1, type:'damage', risk:8,
 hit:'Deal 3 melee damage. Target enemy takes +2 # melee damage from all sources this turn.',
 crit:'Hit all enemies', miss:null, critmiss:'take 2 damage' },
 { id:'d34', name:'Shapeshift: Tree of Life', tier:1, type:'health', risk:6,
 hit:'Enter Tree of Life form. +1 to all healing and HoT effects. Only one form active at a time. Extra play this turn.',
 crit:'Double healing bonus', miss:null, critmiss:'-1 to all healing effects. This effect persists untill you succeed a roll' },
 { id:'d37', name:'Shapeshift: Astral', tier:1, type:'target', risk:6,
 hit:'Enter Astral Form. +1 to Balance (nature/arcane) damage. Balance cards crit on 18+. Only one form at a time. Extra play this turn.',
 crit:'you may play another card this turn', miss:null, critmiss:'take 3 damage' },
 { id:'d38', name:'Sunfire', tier:2, type:'damage', risk:4,
 hit:'Deal 1 nature damage to ALL enemies. Repeat until you fail — DC increases by 2 each repeat.',
 crit:'Deal double damage on first hit. Draw 1 extra card next turn.', miss:null, critmiss:'Take 1 damage' },
 { id:'d39', name:'Nourish', tier:2, type:'health', risk:8,
 hit:'Heal target ally for 2 + x where x is the amount healed by your hots at the start of this round',
 crit:'Resolve this card a second time', miss:null, critmiss:'Remove one ongoing effect' },
 { id:'d40', name:'Provoke', tier:2, type:'damage', risk:6,
 hit:'Reset the surge timer on all enemies. Take half damage from attacks this turn. Extra play.',
 crit:'In addition reduce all attack damage you take by half', miss:null, critmiss:'You take double damage this turn.' },
 { id:'d41', name:'Overrun', tier:2, type:'damage', risk:8,
 hit:'Gain + 3 to your next roll. and +2 to damage dealt this turn.',
 crit:'this effect lasts an additional round', miss:null, critmiss:'all allies get -1 on their next roll' },
 { id:'d42', name:'Omen Of Clarity', tier:2, type:'target', risk:6,
 hit:'Apply Clearcasting for 3 turns. While active: each time you hit an enemy, 50% chance to proc — your next ability auto-succeeds. Extra play.',
 crit:'Apply Clearcasting for 5 turns with the same proc effect. Extra play.',
 miss:null, critmiss:'-3 to your next roll.' },
 { id:'d43', name:'Rebirth', tier:4, type:'damage', risk:8,
 hit:'the next time target ally takes fatal damage return them to half life',
 crit:'Prevent all damage Target ally would take this round the next time target ally takes fatal damage return them back to full life', miss:null, critmiss:'take 3 damage' },
 { id:'d44', name:"Tiger's Fury", tier:2, type:'damage', risk:9,
 hit:'You deal +1 melee damage. If you are in cat form increase the bonus to 2. This ability remains in play untill the end of combat',
 crit:'you may play another card this turn', miss:null, critmiss:'-2 on your next roll' },
 { id:'d45', name:'Iron Hide', tier:2, type:'target', risk:11,
 hit:'If you would take damage roll . On a roll > 8 take -1 damage this turn. If you are in bear form this roll automatically succeeds.This card remains in play untill the end of combat.',
 crit:'you may play another card this turn', miss:null, critmiss:'take +1 damage this turn' },
 { id:'d46', name:'Growl', tier:2, type:'buff', risk:7,
 hit:'Unleash a battle roar. All enemy attacks deal 2 less damage for 2 turns. If in Bear Form: also gain +1 damage reduction for the rest of combat.',
 crit:'All enemy attacks deal 3 less damage for 3 turns. Gain +1 damage reduction. Play another card.',
 miss:null, critmiss:'Your growl falls flat. Take 2 damage.' },
 { id:'d47', name:'Swift Mend', tier:3, type:'health', risk:7,
 hit:'You may instantly resolve any HoT effect on target ally. Play another card.',
 crit:'Refresh all hots on target ally.', miss:null, critmiss:null },
 { id:'d48', name:'Innervate', tier:3, type:'target', risk:11,
 hit:'Draw 3 cards. Play 2 additional cards this turn. +3 on all rolls this turn.',
 crit:'Repeat this ability on the next round', miss:null, critmiss:'Target ally only may draw 1 card on their next turn and recieves -3 on their next roll' },
 { id:'d49', name:'Force of Nature', tier:3, type:'target', risk:6,
 hit:'Summon 3 Treant companions (4 HP each). Each turn every Treant deals 2 nature damage to an enemy and taunts attacks. Stacks with existing Treants.',
 crit:'Each summoned Treant enters play with +2 max HP.', miss:null, critmiss:null },
 { id:'d50', name:"Gaia's Bounty", tier:4, type:'health', risk:12,
 hit:'Refresh the count on all hots you have in play and apply each hot to a second ally not currently benefiting from it.',
 crit:'Apply your hots to a 3rd target', miss:null, critmiss:null },
 { id:'d51', name:'Astral Alignment', tier:4, type:'damage', risk:6,
 hit:'Astral form gains: Each time you succeed a roll deal 2 arcane or nature damage to an enemy. (Max 3 times per turn).',
 crit:null, miss:null, critmiss:null },
 { id:'d52', name:'King of the Jungle', tier:4, type:'target', risk:6,
 hit:'You are in both car and bear form. You benefit from the bonuses of each form. Discard this card if you play a \"non-Feral\" card.',
 crit:null, miss:null, critmiss:null }],
 Warrior: [
 { id:'w00', name:'Heroic Strike', tier:1, type:'damage', risk:6,
 hit:'Deal 4 melee damage. Gain 1 Rage. Rage: +2 damage per counter spent.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 3 damage.' },
 { id:'w01', name:'Slam', tier:1, type:'damage', risk:7,
 hit:'Deal 3 melee damage. Target cannot attack this turn. Gain 1 Rage.',
 crit:'Target cannot attack and you gain an extra play.', miss:null, critmiss:'Take 3 damage.' },
 { id:'w02', name:'Rend', tier:1, type:'target', risk:5,
 hit:'Apply 3 bleed (hemorrhage) stacks to target — deals 3 damage/turn, fades by 1 each turn. Gain 1 Rage.',
 crit:'Apply 6 bleed stacks. Play another card.', miss:null, critmiss:'Target takes +1 damage this turn.' },
 { id:'w03', name:'Battle Shout', tier:1, type:'damage', risk:8,
 hit:'Your melee attacks deal +2 damage this turn and next turn. Gain 1 Rage.',
 crit:'+4 damage bonus instead.', miss:null, critmiss:'Take +1 damage this turn.' },
 { id:'w04', name:'Battle Stance', tier:1, type:'damage', risk:10,
 hit:'Melee attacks deal +1 damage (persistent). Only one stance active at a time. Play another card.',
 crit:null, miss:null, critmiss:null },
 { id:'w05', name:'Intercept', tier:1, type:'damage', risk:7,
 hit:'Deal 3 damage, take 1 damage. Play another card.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 2 damage.' },
 { id:'w06', name:'Parry', tier:1, type:'damage', risk:7,
 hit:'Block all attack damage this turn. Play another card.',
 crit:'Block all attack damage and gain 2 Rage.', miss:null, critmiss:'Take +2 damage this turn.' },
 { id:'w07', name:'Berserker Stance', tier:1, type:'damage', risk:10,
 hit:'Deal +1 melee damage (persistent). Take 1 damage per turn, gain 1 rage per turn.',
 crit:null, miss:null, critmiss:null },
 { id:'w08', name:'Defensive Stance', tier:1, type:'damage', risk:10,
 hit:'Melee attacks deal -1 damage but prevent 1 attack damage per source (persistent).',
 crit:null, miss:null, critmiss:null },
 { id:'w09', name:'Shield Bash', tier:1, type:'damage', risk:8,
 hit:'Deal 3 damage. Gain 3 shield charges — each blocks one attack hit. Gain 1 Rage.',
 crit:'Double damage and 6 shield charges.', miss:null, critmiss:'Take 3 damage and +1 from all sources.' },
 { id:'w10', name:'Hamstring', tier:1, type:'damage', risk:7,
 hit:'Deal 2 damage. Target takes +2 damage from all sources this turn. Gain 1 Rage.',
 crit:'Affects all enemies.', miss:null, critmiss:'Take +2 damage this turn.' },
 { id:'w11', name:'Pummel', tier:1, type:'damage', risk:7,
 hit:'Deal 3 damage. Draw 1 extra card next turn. Gain 1 Rage.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 2 damage.' },
 { id:'w12', name:'Anger Management', tier:2, type:'damage', risk:8,
 hit:'Rage spender: +1 armor per Rage counter spent. Spending 3 Rage grants +1 damage reduction instead.',
 crit:null, miss:null, critmiss:null },
 { id:'w13', name:'Counter', tier:2, type:'damage', risk:8,
 hit:'Deal melee damage equal to half your missing HP (max 10).',
 crit:'No damage cap.', miss:null, critmiss:'Take double damage this turn.' },
 { id:'w14', name:'Shield wall', tier:2, type:'damage', risk:7,
 hit:'Gain a buff: at the start of each of your turns for 3 turns, gain 1 shield charge (each blocks one attack hit entirely).',
 crit:'Buff lasts 6 turns instead.', miss:null, critmiss:'Take double damage this turn.' },
 { id:'w15', name:'Taunt', tier:2, type:'damage', risk:6,
 hit:'Block all attack damage to allies this turn. Take 1 damage per ally protected.',
 crit:'Take half attack damage (rounded down).', miss:null, critmiss:'Take double damage this turn.' },
 { id:'w16', name:'Cleave', tier:2, type:'damage', risk:9,
 hit:'Deal 3 melee damage to all enemies. Gain 1 Rage. Rage: +2 damage per counter spent.',
 crit:'Deal double damage.', miss:null, critmiss:'All allies take 2 damage.' },
 { id:'w17', name:'Charge', tier:2, type:'damage', risk:8,
 hit:'Deal 5 damage and take 2 damage. Gain 2 Rage. Rage: +1 damage per counter spent.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 2 damage.' },
 { id:'w18', name:'Bloodthirst', tier:2, type:'health', risk:9,
 hit:'Deal 4 melee damage. Heal for 1/3 of the damage dealt. Rage: +1 damage per counter spent.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 3 damage.' },
 { id:'w19', name:'Devastate', tier:3, type:'damage', risk:9,
 hit:'Deal 2 melee damage. Target takes double melee damage this turn.',
 crit:null, miss:null, critmiss:'Take 3 damage.' },
 { id:'w20', name:'Whirlwind', tier:2, type:'damage', risk:11,
 hit:'Deal 3 melee damage to all enemies. Rage: +1 damage per counter spent.',
 crit:'Deal double damage.', miss:null, critmiss:'Affects allies instead.' },
 { id:'w21', name:'Revenge', tier:2, type:'damage', risk:8,
 hit:'Deal 3 melee damage to each enemy. Costs 1 less to succeed per rage stack.',
 crit:'Deal double damage.', miss:null, critmiss:'Lose 3 rage.' },
 { id:'w22', name:'Onslaught', tier:2, type:'damage', risk:8,
 hit:'Deal +1 melee damage for each rage stack (persistent this combat).',
 crit:'Gain 3 rage', miss:null, critmiss:null },
 { id:'w23', name:'Sweeping Strikes', tier:3, type:'damage', risk:7,
 hit:'Your melee abilities hit one additional target this turn. Play another card.',
 crit:'Effect lasts an extra round.', miss:null, critmiss:'Deal half damage this turn.' },
 { id:'w24', name:'Enrage', tier:3, type:'cards', risk:6,
 hit:'Gain +2 damage this combat. Play another card.',
 crit:'Next ability deals double damage.', miss:null, critmiss:'Take 2 damage.' },
 { id:'w25', name:'Mortal Strike', tier:3, type:'health', risk:8,
 hit:'Deal 5 melee damage. Target cannot heal this turn. Rage: +2 damage per counter spent.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 3 damage. You cannot be healed this turn.' },
 { id:'w26', name:'Execute', tier:3, type:'damage', risk:8,
 hit:'Deal 5 damage, or 8 if target is below half HP. Rage: +1 damage per counter spent, or +3 per counter if target is below half HP.',
 crit:'Double damage. Instantly destroys tier 3 or lower enemies below half HP (not bosses).', miss:null, critmiss:'Affects an ally instead.' },
 { id:'w27', name:'Thunder Clap', tier:3, type:'damage', risk:9,
 hit:'Deal 2 melee damage to all enemies. All enemies deal half damage this turn.',
 crit:'Double damage. Gain 1 rage per enemy hit.', miss:null, critmiss:'Your allies deal half damage this turn.' },
 { id:'w28', name:'Blade Storm', tier:3, type:'damage', risk:10,
 hit:'Deal 3 melee damage to all enemies each turn for 3 turns. Cannot play other cards while active.',
 crit:'Deal 5 melee to all enemies.', miss:null, critmiss:'Take 4 damage.' },
 { id:'w29', name:'Colossus Smash', tier:3, type:'damage', risk:12,
 hit:'Deal 10 melee damage. Lose your next turn. Rage: +2 damage per counter spent.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 3 damage and lose your next turn.' },
 { id:'w30', name:'Maddening Rage', tier:3, type:'damage', risk:8,
 hit:'Double the rage bonus on your next ability. Take 3 damage. Play another card.',
 crit:'Gain maximum rage stacks.', miss:null, critmiss:null },
 { id:'w31', name:'Ignore Pain', tier:4, type:'damage', risk:6,
 hit:'At the end of this turn, heal HP equal to all damage taken this turn.',
 crit:'Return to full HP at end of turn.', miss:null, critmiss:null },
 { id:'w32', name:'Indomitable', tier:4, type:'damage', risk:10,
 hit:'All damage dealt to allies is redirected to you this turn. Your HP cannot drop below 1.',
 crit:'Your HP cannot be reduced below its current value.', miss:null, critmiss:'Reduce your HP to 1.' },
 { id:'w33', name:'Recklessness', tier:4, type:'damage', risk:11,
 hit:'Deal and take double damage this turn. Play 2 extra cards.',
 crit:'Play 2 additional cards this turn.', miss:null, critmiss:null },
 { id:'w34', name:'Die By the Sword', tier:1, type:'damage', risk:10,
 hit:'Cannot be killed by damage less than your current HP (persistent). Cannot be healed while active.',
 crit:null, miss:null, critmiss:'Take double damage this turn.' }
 ],
 Hunter: [
 { id:'h00', name:'Arcane Shot', tier:1, type:'damage', risk:6,
 hit:'Deal 2 ranged arcane damage. Draw 1 card and play another card.',
 crit:'Deal double damage and draw 2 cards.', miss:null, critmiss:'Take 3 damage.' },
 { id:'h01', name:'Kill Command', tier:1, type:'damage', risk:7,
 hit:'Deal 3 melee damage, or 6 if you have a pet in play.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 3 damage. Your pet attacks you this turn if able.' },
 { id:'h02', name:'Aspect of the Monkey', tier:1, type:'damage', risk:8,
 hit:'Passive: each attack, roll. On 11+ you take half damage. Only one aspect active. Play another card.',
 crit:'Play another card.', miss:null, critmiss:'Take 3 damage.' },
 { id:'h03', name:'Aspect of the Hawk', tier:1, type:'damage', risk:8,
 hit:'Passive: ranged attacks deal +1 damage. Draw 1 fewer card per turn. Only one aspect active.',
 crit:'Play another card.', miss:null, critmiss:'Take 3 damage.' },
 { id:'h04', name:'Aspect of the Cheetah', tier:1, type:'damage', risk:8,
 hit:'Passive: +1 to all rolls and draw 1 extra card per turn. Take +1 from attacks. Only one aspect active.',
 crit:'Play another card.', miss:null, critmiss:'Take 3 damage.' },
 { id:'h05', name:'Serpent Sting', tier:1, type:'damage', risk:7,
 hit:'Deal 3 ranged damage. Apply 3 Poison stacks (each deals 1 dmg/turn).',
 crit:'Deal 4 damage and apply 5 Poison stacks.', miss:null, critmiss:'Take 1 damage and apply 1 Poison to yourself.' },
 { id:'h06', name:'Concussive Shot', tier:1, type:'damage', risk:7,
 hit:'Deal 2 ranged damage. Take half damage this turn. Play another card.',
 crit:null, miss:null, critmiss:'Take 3 damage.' },
 { id:'h07', name:'Steel Trap', tier:1, type:'damage', risk:6,
 hit:'Set trap: next time you take damage, discard Steel Trap — target takes 5 damage, you take none.',
 crit:null, miss:null, critmiss:'Take 3 damage and deal half damage this turn.' },
 { id:'h08', name:"Hunter's Mark", tier:1, type:'damage', risk:8,
 hit:'Mark target enemy (persistent debuff). Marked enemy takes +1 damage from all sources and you get +2 to rolls targeting them. Enemies can only have one mark at a time.',
 crit:'Apply the mark to all enemies.', miss:null, critmiss:null },
 { id:'h09', name:'Careful Aim', tier:1, type:'damage', risk:9,
 hit:'Leave this card in play. If you didn\'t take damage last turn you deal +2 ranged damage.',
 crit:null, miss:null, critmiss:null },
 { id:'h10', name:'Summon Animal Companion', tier:1, type:'target', risk:0,
 hit:'Summon a pet companion. Roll: 1-4 Wolf (+2 rolls), 5-8 Turtle (+2 armor), 9-12 Bear (half damage), 13-16 Hawk (draw +1/turn), 17+ Raptor (+3 melee damage).',
 crit:null, miss:null, critmiss:null },
 { id:'h11', name:'Snipe', tier:2, type:'damage', risk:8,
 hit:'Deal 10 ranged damage. Draw only 1 card next turn.',
 crit:'Deal double damage.', miss:null, critmiss:null },
 { id:'h12', name:'Multi Shot', tier:2, type:'damage', risk:8,
 hit:'Deal 3 ranged damage to all enemies.',
 crit:'Deal triple damage.', miss:null, critmiss:'All allies take 3 damage.' },
 { id:'h13', name:'Frost trap', tier:2, type:'damage', risk:8,
 hit:'Set trap: next time you take damage, discard Frost Trap — enemies deal no attack damage this turn.',
 crit:'Effect persists for an extra turn.', miss:null, critmiss:'Allies deal no damage this turn.' },
 { id:'h14', name:"Predator's Mark", tier:2, type:'damage', risk:8,
 hit:'You may only have 1 mark in play at a time. Each time you damage target enemy add a counter to Predator\'s Mark Deal +1 ranged damage for each counter (max 3). This card remains in play.',
 crit:'Apply to all all enemies', miss:null, critmiss:null },
 { id:'h15', name:'Rapid Fire', tier:2, type:'damage', risk:6,
 hit:'Deal 2 ranged damage. Repeat until you fail — each repeat increases the DC by 2.',
 crit:'DC does not increase between repeats.', miss:null, critmiss:'Take 2 damage.' },
 { id:'h16', name:'Aimed Shot', tier:2, type:'damage', risk:7,
 hit:'Your next ranged card deals double damage. Play another card.',
 crit:'Your next ranged card auto-crits instead.', miss:null, critmiss:null },
 { id:'h17', name:'Eagle Eye', tier:2, type:'target', risk:13,
 hit:'Play with top card of your deck revealed each turn — you may play it as a bonus (persistent).',
 crit:null, miss:null, critmiss:null },
 { id:'h18', name:'Ricochet Shot', tier:2, type:'damage', risk:8,
 hit:'Deal 4 ranged damage. On hit, reroll DC to hit a new random enemy — repeat up to 3 total hits.',
 crit:'Deal double damage on the first hit.', miss:null, critmiss:null },
 { id:'h19', name:'Feign Death', tier:2, type:'damage', risk:7,
 hit:'Block all attack damage this turn. Play another card next turn.',
 crit:'Effect lasts an extra round.', miss:null, critmiss:'Take +3 damage this turn.' },
 { id:'h20', name:'Explosive trap', tier:2, type:'damage', risk:10,
 hit:'Set trap: next time you take damage, discard Explosive Trap — deal 5 fire damage to all enemies.',
 crit:'Deal double damage.', miss:null, critmiss:'Deal 5 fire damage to all allies instead.' },
 { id:'h21', name:'Beastial Wrath', tier:3, type:'damage', risk:9,
 hit:'Your pet deals double damage this turn. Play another card.',
 crit:null, miss:null, critmiss:null },
 { id:'h22', name:'Disengage', tier:3, type:'damage', risk:8,
 hit:'Take no attack damage this turn. Next ability needs 2 less to succeed. Play another card.',
 crit:'Play another card.', miss:null, critmiss:'Take double damage this turn.' },
 { id:'h23', name:'Explosive Shot', tier:3, type:'damage', risk:10,
 hit:'Deal 5 fire ranged damage.',
 crit:'Double damage and hits all enemies.', miss:null, critmiss:'You and adjacent allies take 3 damage.' },
 { id:'h24', name:'Apex Predator', tier:3, type:'damage', risk:12,
 hit:'Your pets deal +3 damage (persistent this combat).',
 crit:null, miss:null, critmiss:null },
 { id:'h25', name:'Spirit Bond', tier:3, type:'health', risk:9,
 hit:'Heal 3 HP. If you have a pet, you both heal 6 HP instead.',
 crit:'Repeat this effect next turn.', miss:null, critmiss:'Remove your pet from play.' },
 { id:'h26', name:'Double Tap', tier:3, type:'target', risk:10,
 hit:'Your next damaging ability resolves twice.',
 crit:null, miss:null, critmiss:null },
 { id:'h27', name:'Lock and Load', tier:3, type:'damage', risk:10,
 hit:'Persistent: each time you deal damage, roll — on 15+ play one extra card this turn.',
 crit:null, miss:null, critmiss:null },
 { id:'h28', name:'Guerrilla tactics', tier:3, type:'target', risk:10,
 hit:'Persistent: your traps may be activated twice before discarding.',
 crit:null, miss:null, critmiss:null },
 { id:'h29', name:'Scent of Blood', tier:3, type:'damage', risk:10,
 hit:'Persistent: your pet deals bonus damage equal to 10% of the target max HP.',
 crit:null, miss:null, critmiss:null },
 { id:'h30', name:'Camouflage', tier:3, type:'damage', risk:8,
 hit:'You and your pet gain Stealth. Take half damage from all sources. Next ability deals double damage.',
 crit:'You and your pet heal 5 HP.', miss:null, critmiss:null },
 { id:'h31', name:'Killer Instinct', tier:4, type:'damage', risk:10,
 hit:'Persistent: you and your pet deal +3 damage to targets below 50% HP.',
 crit:null, miss:null, critmiss:null },
 { id:'h32', name:'One With the Pack', tier:4, type:'target', risk:10,
 hit:'Persistent: you may have one of each pet type active simultaneously.',
 crit:null, miss:null, critmiss:null },
 { id:'h33', name:'Thrill of the Hunt', tier:4, type:'target', risk:10,
 hit:'Persistent: rolls of 18+ count as critical hits this combat.',
 crit:null, miss:null, critmiss:null }
 ],
 Priest: [
 { id:'pr00', name:'Heal', tier:1, type:'health', risk:6,
 hit:'Heal 6 HP.',
 crit:'Heal 12 HP.', miss:null, critmiss:'Take +2 damage from next hit.' },
 { id:'pr01', name:'Smite', tier:1, type:'damage', risk:8,
 hit:'Deal 5 Holy damage.',
 crit:'Deal 10 Holy damage and heal for the amount dealt.', miss:null, critmiss:'Take 5 damage.' },
 { id:'pr02', name:'Divine Word: Shield', tier:1, type:'damage', risk:6,
 hit:'Block ALL damage from one source this turn.',
 crit:'Effect persists for a second round.', miss:null, critmiss:'Take 3 damage.' },
 { id:'pr03', name:'Divine Word: Fortitude', tier:1, type:'target', risk:6,
 hit:'Gain +5 max HP for the rest of combat.',
 crit:'Gain +10 max HP.', miss:null, critmiss:'Take 3 damage.' },
 { id:'pr04', name:'Resurrect', tier:1, type:'target', risk:6,
 hit:'Cheat death — survive your next fatal hit and return to half HP.',
 crit:null, miss:null, critmiss:'Lose half your current HP.' },
 { id:'pr05', name:'Shadow word: Pain', tier:1, type:'damage', risk:8,
 hit:'Deal 3 Shadow damage. Apply 2 Poison stacks (repeating Shadow DoT).',
 crit:'Apply to a second target also.', miss:null, critmiss:'Take 3 damage.' },
 { id:'pr06', name:'Mind Control', tier:1, type:'damage', risk:7,
 hit:'The next attack against you is redirected as Shadow damage to an enemy instead.',
 crit:'Affects 2 incoming attacks.', miss:null, critmiss:'Your next damaging ability hits an ally.' },
 { id:'pr07', name:'Divine Word: Empower', tier:1, type:'damage', risk:6,
 hit:'+3 to your next roll and +1 damage this turn. Play another card.',
 crit:'Affects all rolls this turn.', miss:null, critmiss:'-3 to your next roll.' },
 { id:'pr08', name:'Holy Fire', tier:2, type:'damage', risk:6,
 hit:'Deal 4 Holy/Fire damage.',
 crit:'Deal 8 damage and apply 1 Ignite stack.', miss:null, critmiss:'Take 2 damage.' },
 { id:'pr09', name:'Holy Nova', tier:2, type:'health', risk:10,
 hit:'Deal 2 Holy damage to all enemies and heal 2 HP.',
 crit:'Double damage and heal amounts.', miss:null, critmiss:'Heal all enemies for 2 HP.' },
 { id:'pr10', name:'Shadow word: Death', tier:2, type:'damage', risk:7,
 hit:'Deal 5 Shadow damage. Deal 8 instead if target is below 50% HP.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 5 damage.' },
 { id:'pr11', name:'Dispersion', tier:2, type:'damage', risk:7,
 hit:'Immune to ability damage this turn.',
 crit:'Effect persists for a second round.', miss:null, critmiss:'Take 3 damage.' },
 { id:'pr12', name:'Shadow Infusion', tier:2, type:'cards', risk:8,
 hit:'Your next Shadow ability auto-succeeds. Play another Shadow card from hand or discard.',
 crit:'Next card resolves as a critical hit.', miss:null, critmiss:null },
 { id:'pr13', name:'Mind Blast', tier:2, type:'damage', risk:10,
 hit:'Deal 8 Shadow damage.',
 crit:'Deal 16 Shadow damage.', miss:null, critmiss:null },
 { id:'pr14', name:'Greater Heal', tier:2, type:'cards', risk:12,
 hit:'Heal to full HP. Draw 1 extra card next turn.',
 crit:'You do not lose your next turn.', miss:null, critmiss:'Take damage equal to your current HP - 1.' },
 { id:'pr15', name:'Flash Heal', tier:2, type:'health', risk:5,
 hit:'Heal 4 HP. Play another card.',
 crit:'Heal 8 HP instead.', miss:null, critmiss:'Take 2 damage.' },
 { id:'pr16', name:'Devouring Plague', tier:2, type:'health', risk:8,
 hit:'Deal 2 Shadow damage and heal for the total damage dealt. Apply 2 Poison stacks.',
 crit:'Deal double damage.', miss:null, critmiss:null },
 { id:'pr17', name:'Divine Spirit', tier:2, type:'health', risk:6,
 hit:'Your next heal is doubled.',
 crit:'Apply this effect twice.', miss:null, critmiss:'Take 3 damage.' },
 { id:'pr18', name:'Desperate Plea', tier:2, type:'health', risk:8,
 hit:'Heal 5 HP. Cannot fail if target is below half HP.',
 crit:'Heal all allies.', miss:null, critmiss:'Take 3 damage.' },
 { id:'pr19', name:'Divine Word: Enlighten', tier:2, type:'cards', risk:6,
 hit:'Draw 3 extra cards next turn and play 1 extra card now.',
 crit:'Affects all allies.', miss:null, critmiss:'Draw only 1 card next turn.' },
 { id:'pr20', name:'Consecration', tier:2, type:'damage', risk:8,
 hit:'All enemies take 1 Holy damage at the start of each round (persistent).',
 crit:'All allies also gain +1 to all rolls.', miss:null, critmiss:'All allies take 1 damage per round instead.' },
 { id:'pr21', name:'Sins of the Many', tier:2, type:'health', risk:8,
 hit:'Take up to 5 damage. Heal yourself for the amount taken.',
 crit:'Damage taken is prevented — you just heal.', miss:null, critmiss:'Take 5 damage without healing.' },
 { id:'pr22', name:'Damnation', tier:2, type:'target', risk:8,
 hit:'Persistent: your Shadow Word abilities affect a second enemy.',
 crit:null, miss:null, critmiss:null },
 { id:'pr23', name:'Summon Shadow Fiend', tier:2, type:'target', risk:10,
 hit:'Summon a Shadow Fiend (6 HP). Enters with 1 shadow counter (max 5). Each time you deal shadow magic damage it gains a counter. Each turn it deals counter-value shadow magic to a random enemy. Does not taunt.',
 crit:'Enters with +2 extra shadow counters.', miss:null, critmiss:null },
 { id:'pr24', name:'Evangelism', tier:3, type:'target', risk:8,
 hit:'Persistent: your Divine Word abilities affect a second ally.',
 crit:'Search deck or discard for a Divine Word and play it — auto-succeeds.', miss:null, critmiss:null },
 { id:'pr25', name:'Penance', tier:3, type:'damage', risk:8,
 hit:'Deal 4 Holy damage. Block 4 attack damage from two sources.',
 crit:'Allies take no damage this turn.', miss:null, critmiss:'You and a random ally take 3 damage.' },
 { id:'pr26', name:'Black Out', tier:3, type:'health', risk:10,
 hit:'Persistent: Shadow abilities deal double damage. Discards if you play a non-Shadow ability.',
 crit:null, miss:null, critmiss:'Also lose your next turn.' },
 { id:'pr27', name:'Inner Fire', tier:3, type:'damage', risk:10,
 hit:'Gain 2 charges. Spend a charge to block all damage to yourself this turn.',
 crit:'Spending a charge also grants +3 to all rolls.', miss:null, critmiss:'All allies take +4 damage this turn.' },
 { id:'pr28', name:'Crusader Strike', tier:3, type:'damage', risk:10,
 hit:'Deal 5 Holy melee damage. Target takes double Holy damage next time.',
 crit:'Repeat this card effect.', miss:null, critmiss:'Lose your next turn.' },
 { id:'pr29', name:'Inner Focus', tier:3, type:'cards', risk:6,
 hit:'Your next ability cannot fail. Play another card.',
 crit:'Target 1 additional ally.', miss:null, critmiss:null },
 { id:'pr30', name:'Lightwell', tier:3, type:'health', risk:5,
 hit:'Persistent: each round, if an ally rolls 13+, heal them 2 HP.',
 crit:null, miss:null, critmiss:'All rolls above 10 deal 2 damage to the roller this round.' },
 { id:'pr31', name:'Mind Flay', tier:3, type:'damage', risk:12,
 hit:'Deal 3 Shadow damage repeatedly. Draw and play 1 extra card per hit (up to 4 times, DC increases by 3 each time).',
 crit:'+3 to all rolls this turn.', miss:null, critmiss:'Draw 1 fewer card for the rest of combat.' },
 { id:'pr32', name:'Noble Sacrifice', tier:4, type:'damage', risk:12,
 hit:'Heal all allies to full HP, then take damage equal to your current HP (cannot be prevented).',
 crit:'Set your HP to 1 instead.', miss:null, critmiss:'Take damage equal to your HP (cannot be prevented).' },
 { id:'pr33', name:'Lay on Hands', tier:4, type:'target', risk:15,
 hit:'Heal yourself to full HP. Lose your next turn.',
 crit:'Your next ability auto-crits. Skip the lost turn.', miss:null, critmiss:'Lose your next turn and restore all enemies to full HP.' },
 { id:'pr34', name:'Wrath of God', tier:4, type:'damage', risk:15,
 hit:'Deal 15 Holy/Fire damage to all enemies. Lose your next turn.',
 crit:'Deal double damage.', miss:null, critmiss:null },
 { id:'pr35', name:'Hells Advocate', tier:4, type:'damage', risk:12,
 hit:'Persistent: 3 charges. Spend a charge when dealing Shadow damage to double it.',
 crit:null, miss:null, critmiss:null }
 ],
 Warlock: [
 { id:'wl00', name:'Corruption', tier:1, type:'damage', risk:6,
 hit:'Attach to target: deals 3 Shadow damage per turn for 3 turns.',
 crit:'Corruption attaches to a second target.', miss:null, critmiss:'Take 2 damage.' },
 { id:'wl01', name:'Curse of Weakness', tier:1, type:'damage', risk:6,
 hit:'Target deals half attack damage for 3 rounds.',
 crit:'Affects all enemies.', miss:null, critmiss:'Your allies deal half damage this round.' },
 { id:'wl02', name:'Shadow Bolt', tier:1, type:'damage', risk:7,
 hit:'Deal 5 Shadow damage.',
 crit:'Deal 10 Shadow damage.', miss:null, critmiss:'Take 3 damage.' },
 { id:'wl03', name:'Immolate', tier:1, type:'damage', risk:7,
 hit:'Deal 3 fire damage. Apply 1 Ignite stack (1 fire damage per turn).',
 crit:'Deal 6 fire damage and 2 Ignite stacks.', miss:null, critmiss:'Apply Immolate to yourself instead.' },
 { id:'wl04', name:'Summon: Imp', tier:1, type:'target', risk:6,
 hit:'Summon an Imp (2 HP). Grants +3 max HP while alive. Each turn: roll; on >5 deals 1 fire magic to a random enemy. Damage redirect is optional (toggleable).',
 crit:'Play another card.', miss:null, critmiss:'A random tier 1 enemy appears.' },
 { id:'wl05', name:'Create: Health Stone', tier:1, type:'target', risk:5,
 hit:'Heal 5 HP immediately.',
 crit:'Use once without discarding.', miss:null, critmiss:'Take 2 damage.' },
 { id:'wl06', name:'Create: Mana Stone', tier:1, type:'cards', risk:5,
 hit:'Draw 1 extra card and play 1 extra card this turn.',
 crit:'Use once without discarding.', miss:null, critmiss:'Draw only 1 card next turn.' },
 { id:'wl07', name:'Fear', tier:1, type:'damage', risk:8,
 hit:'Target takes +3 Shadow damage for 3 turns.',
 crit:'Affects all enemies.', miss:null, critmiss:'You take +1 damage from the next 3 hits.' },
 { id:'wl08', name:'Siphon Life', tier:1, type:'damage', risk:6,
 hit:'Deal 1 Shadow damage to all enemies. Repeats each turn on a successful roll (DC 8+).',
 crit:'Deal double damage.', miss:null, critmiss:null },
 { id:'wl09', name:'Searing Pain', tier:1, type:'damage', risk:6,
 hit:'Deal 2 fire damage. Target takes +2 from all sources this turn.',
 crit:'Affects all enemies.', miss:null, critmiss:'Take +2 damage this turn.' },
 { id:'wl10', name:'Summon: Fel Guard', tier:2, type:'target', risk:10,
 hit:'Summon a Fel Guard (6 HP). Takes -2 damage from all sources. Each turn: roll; on >7 heals 2 HP. Damage redirect is optional (toggleable).',
 crit:'Play another card.', miss:null, critmiss:'A random tier 3 enemy appears.' },
 { id:'wl11', name:'Summon: Fel Hunter', tier:2, type:'target', risk:10,
 hit:'Summon a Fel Hunter (3 HP). Each turn: roll; on >7 you deal +2 shadow magic damage this turn. Damage redirect is optional (toggleable).',
 crit:'Play another card.', miss:null, critmiss:'A random tier 3 enemy appears.' },
 { id:'wl12', name:'Curse of Agony', tier:2, type:'damage', risk:8,
 hit:'Attach to target: deals escalating Shadow damage per turn (starts at 2, increases by 1 each turn).',
 crit:'Attach to a second target.', miss:null, critmiss:'Attach to an ally instead.' },
 { id:'wl13', name:'Drain Life', tier:2, type:'damage', risk:8,
 hit:'Deal 3 Shadow damage. Attach to target: deals 3 Shadow damage and heals you 3 HP per turn.',
 crit:'Effect lasts until target dies.', miss:null, critmiss:'Take 3 damage and heal all enemies.' },
 { id:'wl14', name:'Life tap', tier:2, type:'damage', risk:8,
 hit:'Take up to 6 damage. Draw and play 1 extra card for every 2 damage taken.',
 crit:'Draw and play 1 extra card per damage taken.', miss:null, critmiss:'Take 6 damage.' },
 { id:'wl15', name:'Create: Soul Stone', tier:2, type:'target', risk:5,
 hit:'Cheat death — if you would die, return to half HP instead (once per combat).',
 crit:'Use once without discarding.', miss:null, critmiss:null },
 { id:'wl16', name:'Soul Siphon', tier:2, type:'damage', risk:8,
 hit:'Deal 3 Shadow damage. Attach to target: deals 1 Shadow damage and heals you 1 HP per turn.',
 crit:'Effect lasts until target dies.', miss:null, critmiss:'Take 3 damage and draw 1 fewer card next turn.' },
 { id:'wl17', name:'Fel Armor', tier:2, type:'target', risk:7,
 hit:'Persistent: abilities need 1 less to succeed. Gain 1 HP per turn.',
 crit:'Double the roll and HP bonuses.', miss:null, critmiss:'-1 to all rolls and lose 1 HP per turn instead.' },
 { id:'wl18', name:'Hell Fire', tier:2, type:'damage', risk:8,
 hit:'Deal 5 fire damage to all enemies. Take 3 fire damage.',
 crit:'Heal for the amount you dealt.', miss:null, critmiss:null },
 { id:'wl19', name:'Soul Fire', tier:2, type:'damage', risk:8,
 hit:'Deal 4 fire damage. If this kills the target, repeat on another enemy.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 3 fire damage.' },
 { id:'wl20', name:'Implosion', tier:2, type:'damage', risk:8,
 hit:'Deal 3 Shadow damage. If this kills the target, it explodes for 5 Shadow damage to all enemies.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 3 damage.' },
 { id:'wl21', name:'Conflagrate', tier:3, type:'damage', risk:7,
 hit:'Deal 9 fire damage if target has Ignite. Deal 1 fire damage otherwise.',
 crit:'Deal double damage.', miss:null, critmiss:null },
 { id:'wl22', name:'Death Coil', tier:3, type:'damage', risk:12,
 hit:'Deal 5 Shadow damage. All other Shadow damage to this target is doubled this turn.',
 crit:'Shadow damage to this target is also doubled next turn.', miss:null, critmiss:'Take damage equal to your full HP (cannot be reduced).' },
 { id:'wl23', name:'Summon Void Walker', tier:3, type:'target', risk:8,
 hit:'Summon a Void Walker (4 HP). Grants +1 card draw and +1 to rolls while alive. Each turn: roll; on >10 gain +3 rolls this turn. Can be sacrificed to heal you for 2× its current HP. Damage redirect is optional (toggleable).',
 crit:'Play another card.', miss:null, critmiss:'A random tier 2 enemy appears.' },
 { id:'wl24', name:'Summon: Infernal', tier:3, type:'target', risk:12,
 hit:'Summon an Infernal (15 HP). Each turn: 1 fire to you AND all enemies, then roll; on >8 deal 5 fire to all enemies. After 3 turns it breaks free and escapes.',
 crit:'Play another card.', miss:null, critmiss:'A random tier 4 enemy appears.' },
 { id:'wl25', name:'Reign Of Fire', tier:3, type:'damage', risk:10,
 hit:'Deal 3 fire damage to all enemies. Repeats each turn on a successful roll (DC 10+).',
 crit:'Deal 5 fire damage.', miss:null, critmiss:null },
 { id:'wl26', name:'Chaos Bolt', tier:2, type:'damage', risk:6,
 hit:'assign each player and enemy a number by rolling. roll . Whichever target\'s number is closest to the number rolled, Deal 8 shadow damage to that target (This ability does 1/2 damage to allies)',
 crit:'repeat this effect 3 times', miss:null, critmiss:'target allies instead' },
 { id:'wl27', name:'Death Bolt', tier:3, type:'damage', risk:9,
 hit:'Deal 3 Shadow damage. +3 bonus damage per Shadow DoT attached to target.',
 crit:'Refresh the duration of all effects attached to target.', miss:null, critmiss:'Remove all your attached effects from target.' },
 { id:'wl28', name:'Havoc', tier:3, type:'damage', risk:6,
 hit:'Attach to target: any damage you deal is also dealt to this target.',
 crit:'Marked target takes +1 damage from you.', miss:null, critmiss:'Mark an ally — they take damage next time you deal damage.' },
 { id:'wl29', name:'Unstable Power', tier:3, type:'damage', risk:9,
 hit:'Each turn take damage equal to your roll divided by 5 (rounded up, min 1). Deal double Shadow damage while active.',
 crit:null, miss:null, critmiss:null },
 { id:'wl30', name:'Unstable Affliction', tier:3, type:'damage', risk:8,
 hit:'Attach to a random target: deals 5 Shadow damage per turn. Rolls each turn — on 7 or less it jumps to a new target.',
 crit:null, miss:null, critmiss:'Attach to a random ally instead.' },
 { id:'wl31', name:'Soul Harvest', tier:4, type:'damage', risk:8,
 hit:'Persistent: each time an enemy dies, gain a charge. Deal +1 damage per charge.',
 crit:null, miss:null, critmiss:null },
 { id:'wl32', name:'Ritual of Doom', tier:4, type:'damage', risk:12,
 hit:'All allies may take 5 damage to deal triple Shadow damage this turn.',
 crit:null, miss:null, critmiss:null },
 { id:'wl33', name:'Armies Of Hell', tier:4, type:'target', risk:10,
 hit:'Summon all four Warlock pets simultaneously. Their attacks are doubled.',
 crit:null, miss:null, critmiss:null }
 ],
 Shaman: [
 { id:'sh00', name:'Earth Shock', tier:1, type:'damage', risk:6,
 hit:'Deal 3 Nature damage. Play another card.',
 crit:'Deal 6 Nature damage. Play another card.', miss:null, critmiss:'Take 2 damage.' },
 { id:'sh01', name:'Flame Shock', tier:1, type:'damage', risk:6,
 hit:'Deal 1 fire damage. Apply 1 Ignite stack.',
 crit:'Deal double damage and 2 Ignite stacks.', miss:null, critmiss:'Take 2 damage.' },
 { id:'sh02', name:'Frost Shock', tier:1, type:'damage', risk:6,
 hit:'Deal 1 ice damage. Deal 4 instead if target is below half HP. Play another card.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 2 damage.' },
 { id:'sh03', name:'Rock Blast', tier:1, type:'damage', risk:7,
 hit:'Deal 6 Nature damage.',
 crit:'Deal 12 Nature damage.', miss:null, critmiss:'Take 3 damage.' },
 { id:'sh04', name:'Healing Wave', tier:1, type:'health', risk:8,
 hit:'Heal 6 HP.',
 crit:'Heal 12 HP.', miss:null, critmiss:'Take 2 damage.' },
 { id:'sh05', name:'Fire Shield', tier:1, type:'damage', risk:6,
 hit:'Reactive: when you take damage, retaliate for 3 fire damage (up to 3 times).',
 crit:'Retaliate for 5 fire damage instead.', miss:null, critmiss:'The next 3 times an enemy would take damage, heal them for 3 instead.' },
 { id:'sh06', name:'Earth Shield', tier:1, type:'health', risk:6,
 hit:'Reactive: when you take damage, heal 3 HP (up to 3 times).',
 crit:'Heal 5 HP per trigger instead.', miss:null, critmiss:'The next 3 times an enemy takes damage, heal them for 3 instead.' },
 { id:'sh07', name:'Ancestral Knowledge', tier:1, type:'target', risk:8,
 hit:'Play a card from your discard pile this turn.',
 crit:'That card auto-succeeds.', miss:null, critmiss:'Lose your next turn.' },
 { id:'sh08', name:'Healing Spring Totem', tier:1, type:'target', risk:6,
 hit:'Place a Healing Spring Totem (1 HP, no taunt). Heals you for 1 HP on summon and at the start of each turn.',
 crit:'On summon heal is 2 HP instead. Play another card.', miss:null, critmiss:'Take 2 damage.' },
 { id:'sh09', name:'Searing Totem', tier:1, type:'target', risk:6,
 hit:'Place a Searing Totem (1 HP, no taunt). At start of each turn: deal 1 fire magic to a random enemy.',
 crit:'Play another card.', miss:null, critmiss:'Take 2 damage.' },
 { id:'sh10', name:'Fire Nova Totem', tier:1, type:'target', risk:6,
 hit:'Place a Fire Nova Totem (1 HP, no taunt). At end of your turn it self-destructs and deals 3 fire magic to every enemy.',
 crit:'Play another card.', miss:null, critmiss:'All allies take 2 damage.' },
 { id:'sh11', name:'Stoneskin Totem', tier:1, type:'target', risk:6,
 hit:'Place a Stone Skin Totem (4 HP). Taunts attacks; takes -1 damage from all sources (minimum 1).',
 crit:'Enters with +2 max HP.', miss:null, critmiss:'Take 2 damage.' },
 { id:'sh12', name:'Healing Surge', tier:1, type:'health', risk:6,
 hit:'Heal 2 HP. Play another card.',
 crit:'Heal 4 HP. Play another card.', miss:null, critmiss:'Take 2 damage.' },
 { id:'sh13', name:'Cloud Burst Totem', tier:2, type:'target', risk:6,
 hit:'Place a Cloud Burst Totem (1 HP, no taunt). Each time you heal it gains a counter. On death or sacrifice: heal you 1 HP per counter. Sacrifice available on your turn.',
 crit:'Enters with +2 counters.', miss:null, critmiss:'Take 2 damage.' },
 { id:'sh14', name:'Fissure', tier:2, type:'damage', risk:8,
 hit:'Deal 3 Nature damage. Deal 7 instead if target is below half HP.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 4 damage.' },
 { id:'sh15', name:'Reincarnation', tier:2, type:'target', risk:8,
 hit:'Cheat death — if you would die, return to half HP instead (once).',
 crit:'Return to full HP instead.', miss:null, critmiss:'Take 3 damage.' },
 { id:'sh16', name:'Lava burst', tier:2, type:'damage', risk:9,
 hit:'Deal 3 fire damage. Deal 6 instead if target already has Ignite.',
 crit:'Deal double damage and 2 Ignite stacks.', miss:null, critmiss:'Take 4 damage.' },
 { id:'sh17', name:'Rock Biter', tier:2, type:'damage', risk:8,
 hit:'Deal 2 Nature melee damage. Target takes +2 Nature damage this turn. Play another card.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 2 damage. -2 to your next roll.' },
 { id:'sh18', name:'Lava Lash', tier:2, type:'damage', risk:8,
 hit:'Deal 2 fire melee damage. Target takes +2 fire damage this turn. Play another card.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 2 damage. -2 to your next roll.' },
 { id:'sh19', name:'Chain Heal', tier:2, type:'health', risk:9,
 hit:'Heal 4 HP. Bounce to a second target for 3 HP. Each bounce heals 1 less.',
 crit:'Heals the same amount each bounce.', miss:null, critmiss:'Chain Heal heals enemies instead.' },
 { id:'sh20', name:'Ice Fury', tier:2, type:'damage', risk:10,
 hit:'Deal 2 Ice melee damage. Your next source of ice damage deals double damage. You may play another card',
 crit:'Deal double damage, and your next 3 sources of Ice damage deal double damage', miss:null, critmiss:'Take two damage and double damage this turn from enemies' },
 { id:'sh21', name:'Ice Blast', tier:2, type:'damage', risk:8,
 hit:'Deal 5 ice damage. Double damage if target is below half HP.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 4 damage.' },
 { id:'sh22', name:'Mana Spring Totem', tier:2, type:'target', risk:6,
 hit:'Place a Mana Spring Totem (1 HP, no taunt). Passive: +1 card draw while alive.',
 crit:'Play another card.', miss:null, critmiss:'Take 2 damage.' },
 { id:'sh23', name:'Grace of Air Totem', tier:2, type:'target', risk:6,
 hit:'Place a Grace of Air Totem (1 HP, no taunt). Passive: +2 to all rolls while alive.',
 crit:'Play another card.', miss:null, critmiss:'Take 2 damage. -2 to your next roll.' },
 { id:'sh24', name:'Frost Bite', tier:2, type:'damage', risk:8,
 hit:'Deal 2 ice melee damage. Target takes +2 ice damage this turn. Play another card.',
 crit:'Deal double damage.', miss:null, critmiss:'Take 2 damage. -2 to your next roll.' },
 { id:'sh25', name:'Riptide', tier:2, type:'health', risk:8,
 hit:'Heal 2 HP. Heal 4 HP instead if target was already healed this turn. Play another card.',
 crit:'Play this card a third time.', miss:null, critmiss:'Take 2 damage.' },
 { id:'sh26', name:'Crash Lightning', tier:2, type:'damage', risk:10,
 hit:'Deal 4 Nature melee damage to one enemy and 1 to all others.',
 crit:'Deal 4 to all enemies.', miss:null, critmiss:'Take 4 damage.' },
 { id:'sh27', name:"Nature's Gaurdian", tier:2, type:'health', risk:10,
 hit:'heal target ally for 20% of their maximum health when there health falls below 50%. Discard this card after they are healed.',
 crit:'heal target ally to full health', miss:null, critmiss:'take 3 damage' },
 { id:'sh28', name:'Whirlwind Strike', tier:2, type:'damage', risk:8,
 hit:'Deal 3 Nature damage. Repeat up to 2 more times — each repeat deals 1 less damage.',
 crit:'Each repeat deals +1 more instead of less.', miss:null, critmiss:'Take 3 damage.' },
 { id:'sh29', name:'Earthquake', tier:3, type:'damage', risk:12,
 hit:'Deal 5 Nature damage to all enemies. Stun all enemies for 1 turn.',
 crit:'Deal double damage.', miss:null, critmiss:'All allies take 5 Nature damage.' },
 { id:'sh30', name:'Eruption', tier:3, type:'damage', risk:12,
 hit:'Deal 1 fire damage to all enemies. Deal 5 fire to all if they were already hit by Eruption this turn.',
 crit:'Deal double damage.', miss:null, critmiss:'All allies take 5 fire damage.' },
 { id:'sh31', name:'Call of The Elements', tier:3, type:'damage', risk:10,
 hit:'Search your deck for a fire, Nature, or ice card and play it — it auto-succeeds.',
 crit:'Chosen card resolves as a critical hit.', miss:null, critmiss:'Lose your next turn.' },
 { id:'sh32', name:'Aspect of Nature', tier:3, type:'damage', risk:10,
 hit:'Passive: you may only play Nature cards. Each Nature hit rolls — on 13+ repeat the card.',
 crit:null, miss:null, critmiss:'Also lose your next turn.' },
 { id:'sh33', name:'Aspect of Fire', tier:3, type:'damage', risk:10,
 hit:'Passive: you may only play fire cards. Each fire hit rolls — on 13+ repeat the card.',
 crit:null, miss:null, critmiss:'Also lose your next turn.' },
 { id:'sh34', name:'Aspect of Ice', tier:3, type:'damage', risk:10,
 hit:'Passive: you may only play ice cards. Each ice hit rolls — on 13+ repeat the card.',
 crit:null, miss:null, critmiss:'Take 3 damage and lose your next turn.' },
 { id:'sh35', name:'Aspect of the Ascended', tier:3, type:'health', risk:10,
 hit:'Passive: you may only play Restoration cards. Each heal rolls — on 13+ heal again.',
 crit:null, miss:null, critmiss:'Take 3 damage and lose your next turn.' },
 { id:'sh36', name:'Ancestral Spirit', tier:1, type:'target', risk:10,
 hit:'Summon an Ancestral Spirit that deals 2 Nature damage per turn.',
 crit:null, miss:null, critmiss:null },
 { id:'sh37', name:'Maelstrom Weapon', tier:4, type:'damage', risk:8,
 hit:'Persistent: each elemental damage hit adds 1 charge. Spend all charges to add to your next roll (max 5).',
 crit:'Start with 3 charges.', miss:null, critmiss:null },
 { id:'sh38', name:'Elemental Mastery', tier:4, type:'damage', risk:10,
 hit:'Fire, ice, and Nature cards need 3 less to succeed this combat.',
 crit:'Fire, ice, and Nature damage deal +1 each.', miss:null, critmiss:'Lose your next turn.' }
 ],
 TimeWalker: [
 { id:'tw00', name:'Magic Missile', tier:1, type:'damage', risk:5,
 hit:'Deal 3 arcane damage. Play another card.',
 crit:null, miss:null, critmiss:null },
 { id:'tw01', name:'Foresight', tier:1, type:'cards', risk:5,
 hit:'Draw 3 extra cards next turn. Play another card.',
 crit:null, miss:null, critmiss:null },
 { id:'tw02', name:'Gravity Bomb', tier:1, type:'damage', risk:8,
 hit:'Attach 3 time bomb counters to all enemies. Bombs detonate for 8 damage when counters reach 0.',
 crit:null, miss:null, critmiss:null },
 { id:'tw03', name:'Accelerate', tier:1, type:'target', risk:8,
 hit:'Double the amount of counters on an ally\'s card',
 crit:null, miss:null, critmiss:null },
 { id:'tw04', name:'Slow', tier:1, type:'target', risk:7,
 hit:'Target\'s counters gain and lose at half speed.',
 crit:null, miss:null, critmiss:null },
 { id:'tw05', name:'Daze', tier:1, type:'target', risk:7,
 hit:'Target enemy\'s surge timer slows to half speed.',
 crit:null, miss:null, critmiss:null },
 { id:'tw06', name:'Insight', tier:1, type:'target', risk:7,
 hit:'Gain 2 lucky charges — spend a charge to reroll any dice result this combat.',
 crit:null, miss:null, critmiss:null },
 { id:'tw07', name:'Blink', tier:1, type:'target', risk:8,
 hit:'Immune to all damage and effects this turn. Play 2 extra cards.',
 crit:null, miss:null, critmiss:null },
 { id:'tw08', name:'Dispel', tier:1, type:'target', risk:6,
 hit:'Remove all Poison, Seared, and negative status effects from yourself. Play another card.',
 crit:null, miss:null, critmiss:null },
 { id:'tw09', name:'Time Warp', tier:2, type:'target', risk:8,
 hit:'Double all time bomb counters currently on enemies.',
 crit:null, miss:null, critmiss:null },
 { id:'tw10', name:'Arcane Orb', tier:2, type:'damage', risk:8,
 hit:'Deal 5 arcane damage.',
 crit:null, miss:null, critmiss:null },
 { id:'tw11', name:'Rewind', tier:2, type:'target', risk:5,
 hit:'Heal half your missing HP and remove all DoTs.',
 crit:null, miss:null, critmiss:null },
 { id:'tw12', name:'Future Sight', tier:2, type:'damage', risk:6,
 hit:'Roll: 1-5 take 3 damage; 6-10 deal 5 arcane damage; 11-15 next ability auto-succeeds; 16+ next ability auto-crits.',
 crit:null, miss:null, critmiss:null },
 { id:'tw13', name:'Inversion', tier:2, type:'target', risk:10,
 hit:'Enemies need 1+ higher on all rolls this turn. You need 1 less on all rolls.',
 crit:null, miss:null, critmiss:null },
 { id:'tw14', name:'Time Loop', tier:2, type:'target', risk:10,
 hit:'You draw again and take another full turn.',
 crit:null, miss:null, critmiss:null },
 { id:'tw15', name:'Chronoshift', tier:2, type:'target', risk:8,
 hit:'Save your current roll. Spend it later on any ability roll this combat. Play another card.',
 crit:null, miss:null, critmiss:null },
 { id:'tw16', name:'Time Bank', tier:2, type:'target', risk:6,
 hit:'Gain 2 extra plays this turn.',
 crit:null, miss:null, critmiss:null },
 { id:'tw17', name:'Temporal Abstraction', tier:2, type:'damage', risk:10,
 hit:'Any damage you take this turn is delayed until the start of your next turn.',
 crit:null, miss:null, critmiss:null },
 { id:'tw18', name:'Memory Lapse', tier:2, type:'damage', risk:9,
 hit:'Target enemy is stunned for 1 turn and their surge timer is set back 3 turns.',
 crit:null, miss:null, critmiss:null },
 { id:'tw19', name:'Mending', tier:2, type:'target', risk:8,
 hit:'Heal 3 HP. Play another card.',
 crit:null, miss:null, critmiss:null },
 { id:'tw20', name:'Switch Fate', tier:2, type:'target', risk:6,
 hit:'Redirect one card or effect this turn to a different target.',
 crit:null, miss:null, critmiss:null },
 { id:'tw21', name:'Time Shudder', tier:2, type:'damage', risk:6,
 hit:'You act only every other turn. On turns you skip, you are immune to all damage.',
 crit:null, miss:null, critmiss:null },
 { id:'tw22', name:'Dimension Lock', tier:2, type:'target', risk:8,
 hit:'Remove one non-boss enemy from this encounter until it ends.',
 crit:null, miss:null, critmiss:null },
 { id:'tw23', name:'Celerity', tier:2, type:'target', risk:9,
 hit:'Play 2 extra cards this turn. +2 to all rolls this turn.',
 crit:null, miss:null, critmiss:null },
 { id:'tw24', name:'Spell Surge', tier:2, type:'target', risk:10,
 hit:'Play one card each from your hand, deck, and discard this turn.',
 crit:null, miss:null, critmiss:null },
 { id:'tw25', name:'Gravity Beam', tier:2, type:'damage', risk:6,
 hit:'Channeled. Gravity beam\'s roll to succeed = the amount of counters on it. Deal 1+x arcane damage to target enemy, where x = the number of counters on Gravity Beam. At the end of your turn add ',
 crit:null, miss:null, critmiss:null },
 { id:'tw26', name:'Arcane Torrent', tier:3, type:'damage', risk:10,
 hit:'Deal 4 arcane damage to all enemies.',
 crit:null, miss:null, critmiss:null },
 { id:'tw27', name:'Time Bomb', tier:3, type:'damage', risk:6,
 hit:'Attach to target: gains 1 counter per turn. Detonates for 8 damage when counters expire.',
 crit:null, miss:null, critmiss:null },
 { id:'tw28', name:'Freeze Time', tier:3, type:'target', risk:10,
 hit:'All enemies are stunned and lose all their attacks this turn. Play 2 extra cards.',
 crit:null, miss:null, critmiss:null },
 { id:'tw29', name:'Reversion', tier:3, type:'target', risk:8,
 hit:'Set a checkpoint (HP, hand, discard). At the start of any future turn you may rewind to this state.',
 crit:null, miss:null, critmiss:null },
 { id:'tw30', name:'Comet', tier:3, type:'damage', risk:12,
 hit:'Deal 10 arcane damage.',
 crit:null, miss:null, critmiss:null },
 { id:'tw31', name:'Portal', tier:3, type:'target', risk:8,
 hit:'Move all counters of one type from any source to another target.',
 crit:null, miss:null, critmiss:null },
 { id:'tw32', name:'Fate of One', tier:4, type:'damage', risk:12,
 hit:'Target ally\'s health total is set to the same as target ally. You share their life total, and cannot die or take damage. If they die you die. This effect last till the end of combat and can only effe',
 crit:null, miss:null, critmiss:null },
 { id:'tw33', name:'Black Hole', tier:4, type:'damage', risk:12,
 hit:'Deal 7 arcane damage to all enemies. Enemies below 10 HP must roll — on 4 or less they are destroyed.',
 crit:null, miss:null, critmiss:null }
 ]
};
const ENEMIES = {
 // ── Minions ──
 stripMiner: {
 id:'stripMiner', name:'Strip Miner', portrait:'⛏️',
 tier:1, maxHP:5, atk:1, type:'minion',
 ongoing:'-1 damage from magic sources.',
 surge:'Deal 2 damage to you.',
 },
 defiastRogue: {
 id:'defiastRogue', name:'Defias Rogue', portrait:'🗡️',
 tier:2, maxHP:15, atk:3, type:'minion',
 ongoing:'When taking damage, roll — on < 5, prevent all damage.',
 surge:'Takes no damage this turn.',
 },
 defiastWizard: {
 id:'defiastWizard', name:'Defias Wizard', portrait:'🧙',
 tier:2, maxHP:12, atk:2, type:'minion',
 ongoing:'At end of each turn, deal 2 fire damage to you.',
 surge:'Deal 3 fire damage to you.',
 },
 mechanoguard: {
 id:'mechanoguard', name:'Mechanoguard', portrait:'🤖',
 tier:2, maxHP:12, atk:2, type:'minion',
 ongoing:'Each turn roll: 1-5 deal 3 dmg, 6-10 deal 2 dmg twice, 11-15 heal boss 5, 16-20 self-destruct (half current HP to all).',
 surge:'SELF-DESTRUCT! Deals half current HP to you.',
 specialOnDamage:'mechanoguard_roll',
 },
 shadowGuard: {
 id:'shadowGuard', name:'Shadow Guard', portrait:'👤',
 tier:2, maxHP:20, atk:3, type:'minion',
 ongoing:'Takes half damage (rounded up). Applies 1 Poison counter to you at end of turn.',
 surge:'Apply 1 Poison counter to you.',
 poisonOnTurn:true,
 },
 murloc: {
 id:'murloc', name:'Murloc Pirate', portrait:'🐟',
 tier:2, maxHP:12, atk:2, type:'minion',
 ongoing:'All enemies deal +1 damage.',
 surge:'Deal 5 melee damage to you.',
 },

 // ── BOSSES ──
 minerJohn: {
 id:'minerJohn', name:'Miner John', portrait:'⛏️',
 tier:2, maxHP:30, atk:3, type:'boss',
 ongoing:'Every 2 rounds: summon a Strip Miner. Surge: summon miners equal to half the miners alive.',
 surge:'You take double damage this turn. Add a Strip Miner for every miner in play.',
 xp:80, gold:25,
 spawnsMinion:'stripMiner', spawnRate:2,
 },
 rhahkZor: {
 id:'rhahkZor', name:"Rhahk'Zor the Bruiser", portrait:'👹',
 tier:3, maxHP:80, atk:5, type:'boss',
 ongoing:'Deals +2 damage. Below 30 HP: enters ENRAGE — deals double damage.',
 surge:'Deal 5 ability damage and stun the player. Then attacks normally.',
 xp:120, gold:35,
 enrageThreshold:30,
 },
 sneed: {
 id:'sneed', name:'Taskmaster Sneed', portrait:'🔧',
 tier:2, maxHP:30, atk:8, type:'boss',
 ongoing:'Takes -2 damage from player abilities. Poison and bleed deal full damage.',
 surge:'Sneed grabs you — you lose your next turn!',
 xp:50, gold:20,
 },
 sneedShredder: {
 id:'sneedShredder', name:'Sneed\'s Shredder', portrait:'⚙️',
 tier:3, maxHP:70, atk:4, type:'boss',
 ongoing:'Deals +1 damage, takes -1 damage. On death: Sneed crawls out of the wreckage!',
 surge:'Deal 5 damage and apply -2 armor to you.',
 xp:100, gold:30,
 },
 gilnid: {
 id:'gilnid', name:'Gilnid, Explosives Expert', portrait:'💣',
 tier:3, maxHP:80, atk:4, type:'boss',
 ongoing:'Deals +1 damage. On even turns, deploys a Mechanoguard.',
 surge:'Deal 5 fire damage to you.',
 xp:120, gold:35,
 spawnsMinion:'mechanoguard', spawnRate:2,
 },
 mrSmite: {
 id:'mrSmite', name:"Mr. Smite, 1st Mate", portrait:'⚓',
 tier:4, maxHP:90, atk:5, type:'boss',
 ongoing:'Deals +2 damage. Start of each turn: equip a random weapon.',
 surge:'You take 2 damage and lose your next turn. Permanently equip 1 weapon.',
 xp:150, gold:45,
 weaponRotation:['Twin Blades','Great Maul','Sword and Shield'],
 weaponEffects:{
 'Twin Blades': { desc:'Attacks resolve twice.', modifier:'double_hit' },
 'Great Maul': { desc:'+10 damage, single target.', modifier:'maul' },
 'Sword and Shield':{ desc:'Takes half damage from all sources.', modifier:'shield' },
 },
 },
 cookie: {
 id:'cookie', name:'Cookie the Chef', portrait:'🍳',
 tier:3, maxHP:70, atk:3, type:'boss',
 ongoing:'Each time you take damage from Cookie, roll — on < 8, apply SEARED. Each turn Cookie rolls Magic Brew.',
 surge:'Heal 5 for each SEARED debuff in play.',
 xp:110, gold:35,
 brewTable:[
 { lo:1, hi:5, effect:'Deal 3 fire magic damage to you.' },
 { lo:6, hi:10, effect:'Deal 2 damage twice to you.' },
 { lo:11, hi:15, effect:'Heal Cookie for 7.' },
 { lo:16, hi:19, effect:'March of the Murlocs! Summon 1 Murloc.' },
 { lo:20, hi:20, effect:'Cookie is invulnerable this turn. March of the Murlocs!' },
 ],
 },
 captainGreenskin: {
 id:'captainGreenskin', name:'Captain Greenskin', portrait:'🏴‍☠️',
 tier:3, maxHP:90, atk:4, type:'boss',
 ongoing:'First time you deal damage each combat: -5 on your next roll and draw 1 less card. When Greenskin deals damage, apply 1 Poison counter.',
 surge:'You critically fail your next ability. Summon 2 crewmates.',
 xp:140, gold:40,
 poisonOnHit:true,
 },
 edwinVanCleef: {
 id:'edwinVanCleef', name:'Edwin VanCleef', portrait:'🗡️',
 tier:5, maxHP:120, atk:6, type:'boss',
 ongoing:'Deals +X damage per turn where X = Poison counters ÷ adventurers. Every 30 HP lost: summon 2 Shadow Guards.',
 surge:'Apply 2 Poison counters to you.',
 xp:300, gold:100,
 isFinalBoss:true,
 phase2HP:60, phase2Spawns:'shadowGuard',
 },
};
const STATUS = {
 seared: {
 id:'seared', label:'SEARED 🔥',
 desc:'Take 2 fire damage at start of each turn.',
 isBuff:false,
 onTurnStart:(stacks) => ({ damage:2, msg:`Seared burns you for 2 fire damage!` }),
 },
 poison: {
 id:'poison', label:'POISON ☠️',
 desc:'Take X damage per turn (X = stacks). Roll 15+ at end of turn to remove a counter.',
 isBuff:false,
 onTurnStart:(stacks) => ({ damage:stacks, msg:`Poison deals ${stacks} damage!` }),
 onTurnEnd:() => ({ tryRemove:true, threshold:15, msg:'Rolling to resist poison...' }),
 },
 stealth: {
 id:'stealth', label:'STEALTHED 👤',
 desc:'Next melee attack deals +1, next ranged +3 damage. Lost when you attack or take damage.',
 isBuff:true,
 },
 enrage: {
 id:'enrage', label:'ENRAGED 😡',
 desc:'Deals double damage.',
 isBuff:false,
 },
 shield: {
 id:'shield', label:'SHIELDED 🛡️',
 desc:'Takes half damage from all sources.',
 isBuff:true,
 },
 hemorrhage: {
 id:'hemorrhage', label:'HEMORRHAGE 🩸',
 desc:'Takes X extra damage per turn where X = Hemorrhage counters.',
 isBuff:false,
 },
};
const ADVENTURES = [
 {
 id: 'deadmines',
 title: 'The Deadmines',
 subtitle: 'Moonbrook, Westfall',
 icon: '⛏️',
 difficulty: 'Beginner',
 difficultyColor: ' ',
 lore: 'The Defias Brotherhood has seized the old Moonbrook mine. Deep below, Edwin VanCleef commands a stolen warship. Fight through his lieutenants and bring him to justice.',
 tags: ['Solo', 'Story-Rich', 'Boss Rush'],
 unlocked: true,
 },
 {
 id: 'shadowfang',
 title: 'Shadowfang Keep',
 subtitle: 'Silverpine Forest',
 icon: '🏰',
 difficulty: 'Intermediate',
 difficultyColor: ' ',
 lore: 'The cursed keep of Shadowfang looms over Silverpine Forest. Worgen haunt its halls. Coming soon.',
 tags: ['Coming Soon'],
 unlocked: false,
 comingSoon: true,
 },
 {
 id: 'ragefire',
 title: 'Ragefire Chasm',
 subtitle: 'Orgrimmar',
 icon: '🔥',
 difficulty: 'Intermediate',
 difficultyColor: ' ',
 lore: 'Deep beneath Orgrimmar, the Burning Blade cult plots in secret. Coming soon.',
 tags: ['Coming Soon'],
 unlocked: false,
 comingSoon: true,
 },
];
const ENCOUNTERS = [
 // ── ACT 0: ENTRANCE ──────────────────────────────────────────────
 {
 id:'intro', type:'story', title:'Into the Deadmines', icon:'⛏️',
 text:`The entrance to Moonbrook's mine yawns before you. Torchlight flickers from within, and the distant ring of hammers echoes up the shaft.\n\nThe Defias Brotherhood have built something down here. Something big.\n\nYour mission: find out what, and put a stop to it.`,
 choices:[
 { text:'Sneak past the entrance guards', skill:'Stealth', dc:10, successHint:'+2 next combat rolls', failHint:'-3 HP' },
 { text:'Walk in like you own the place', skill:null, dc:0 },
 { text:'Search for a hidden side passage', skill:'Perception', dc:8, successHint:'Stealth for first combat', failHint:'-2 HP' },
 ],
 outcomes:{
 0:{ success:`You slip past the guards like smoke. They never see you coming. You know their positions — that will help.`, fail:`A guard's torch sweeps your direction — you dive behind a barrel and bang your knee hard.`,
 successEffect:{ nextCombatRollBonus:2 }, failEffect:{ hp:-3 } },
 1:{ result:`The guards barely glance up. Your confidence is your best disguise. You stroll right in.` },
 2:{ success:`Behind a collapsed wagon you find a narrow ventilation shaft. You emerge ahead of the guards — with the advantage of surprise.`, fail:`You kick a loose stone. Guards shout. You bolt into the mine bruised and breathless.`,
 successEffect:{ stealth:true }, failEffect:{ hp:-2 } },
 },
 },
 {
 id:'entry_fight', type:'encounter', title:'Tunnel Guards', icon:'🗡️',
 text:`Two Defias thugs step out of the shadows, blades drawn.\n\n"Nobody gets past us, mate."`,
 enemies:['stripMiner','stripMiner'], onWin:`The miners hit the dirt. You rifle through their pockets.`, xpBonus:10,
 },
 {
 id:'supply_room', type:'skill_check', title:'The Supply Room', icon:'📦',
 text:`You push past a creaking door into a low-ceilinged storage room. Crates of food, tools, and mining gear line the walls. A bored Defias guard snores in the corner.`,
 choices:[
 { text:'Loot the supply crates quietly', skill:'Sleight of Hand', dc:7, successHint:'+12 gold', failHint:'-2 HP (knocked a lantern)' },
 { text:'Wake the guard and bluff your way', skill:'Persuasion', dc:11, successHint:'Free passage + lucky charm', failHint:'-2 HP (rough escape)' },
 { text:'Search for useful equipment', skill:'Investigation', dc:8, successHint:'+5 HP · +1 next combat roll', failHint:'Nothing found' },
 ],
 outcomes:{
 0:{ success:`You pocket a fat pouch of gold without waking anyone.`, fail:`You knock over a lantern. The guard stirs — you bolt, scraping your arm on the doorframe.`,
 successEffect:{ gold:12 }, failEffect:{ hp:-2 } },
 1:{ success:`"Oh, right, the new recruit. Go on through." You even pocket a good-luck charm on the way out.`, fail:`"Oi! Who are you?!" You run hard down the tunnel, taking a hit along the way.`,
 successEffect:{ gold:5, luckCharges:1 }, failEffect:{ hp:-2 } },
 2:{ success:`Hidden behind a false wall: a vial of healing salve and a sharpening stone. You feel more prepared.`, fail:`Nothing useful. Just sacks of rotten grain.`,
 successEffect:{ hp:5, nextCombatRollBonus:1 }, failEffect:{} },
 },
 },
 {
 id:'mining_chamber', type:'encounter', title:'The Mining Chamber', icon:'⛏️',
 text:`A vast stone chamber opens before you. Their foreman, Miner John — a scarred man with a pickaxe the size of a tower shield — wheels on you.\n\n"Brotherhood! INTRUDER!"`,
 enemies:['minerJohn','stripMiner'], onWin:`The foreman crashes down. On the wall someone has scratched a rough map — something massive near the water.`, xpBonus:15,
 },
 // ── ACT 1: THE MINE ──────────────────────────────────────────────
 {
 id:'lumber_room', type:'skill_check', title:'The Lumber Room', icon:'🪵',
 text:`You push deeper and step into a cavernous room stacked with enormous timber beams. Quality shipbuilding material.\n\nSomeone has been building something vast.`,
 choices:[
 { text:'Study the construction blueprints', skill:'Investigation', dc:9, successHint:'+1 roll bonus (entire run)', failHint:'Nothing gained' },
 { text:'Pocket some supplies and move on', skill:'Sleight of Hand',dc:6, successHint:'+15 gold', failHint:'Nothing (it was coal)' },
 { text:'Find workers who might talk', skill:'Persuasion', dc:12, successHint:'+10 gold · +1 dmg bonus', failHint:'-2 HP (rough exit)' },
 ],
 outcomes:{
 0:{ success:`The blueprints reveal plans for a three-masted warship. You now understand the enemy's patrol patterns.`, fail:`The engineering notation is beyond you.`,
 successEffect:{ rollBonus:1 }, failEffect:{} },
 1:{ success:`You find a small pouch of gold tucked inside a crate.`, fail:`You pocket what you think is a coin purse. It's a lump of coal.`,
 successEffect:{ gold:15 }, failEffect:{} },
 2:{ success:`A frightened laborer slips you some gold and a sharpening stone: "Take it. Just stop them."`, fail:`The workers clam up and one shoves you hard into the doorframe.`,
 successEffect:{ gold:10, dmgBonus:1 }, failEffect:{ hp:-2 } },
 },
 },
 {
 id:'defias_patrol', type:'encounter', title:'Defias Patrol', icon:'🗡️',
 text:`Two Defias soldiers round the corner. One raises a crossbow; the other draws a blade.\n\n"End of the road, hero."`,
 enemies:['defiastRogue','defiastWizard'], onWin:`The patrol is down. You grab their signal horn.`, xpBonus:15,
 },
 {
 id:'rhahkzor', type:'encounter', title:"Rhahk'Zor's Post", icon:'👹',
 text:`A massive ogre blocks the passage to the lower mine.\n\n"RHAHK'ZOR SMASH! RHAHK'ZOR KILL!"`,
 enemies:['rhahkZor'], onWin:`The ogre lies still. You pry a heavy iron keyring from his belt.`, xpBonus:25,
 },
 // ── ACT 2: THE FOUNDRY ───────────────────────────────────────────
 {
 id:'foundry_approach', type:'story', title:'The Foundry Level', icon:'🔥',
 text:`The mine opens into an industrial level thick with heat and forge-fire. The Brotherhood has turned this mine into a weapons factory.\n\nThrough the steam: a goblin explosives lab to the left, a corridor guarded by a marine first mate to the right.`,
 choices:[
 { text:'Take the left path through the explosives lab', skill:null, dc:0 },
 { text:'Force the main corridor', skill:null, dc:0 },
 ],
 outcomes:{
 0:{ result:'You head left into the explosives lab. The smell of alchemical compounds is eye-watering.' },
 1:{ result:'You press forward into the central corridor. Heavy footsteps ahead.' },
 },
 },
 {
 id:'mechanoguard_patrol', type:'encounter', title:'Rogue Mechanoguards', icon:'🤖',
 text:`Two mechanical sentinels clank around the corner, red eyes glowing.`,
 enemies:['mechanoguard','mechanoguard'], onWin:`The machines spark and die. You salvage useful components.`, xpBonus:20,
 },
 {
 id:'gilnid_lab', type:'encounter', title:"Gilnid's Arsenal", icon:'💣',
 text:`The goblin engineer Gilnid spins around.\n\n"You just volunteered for a LIVE FIELD TEST!"`,
 enemies:['gilnid','mechanoguard'], onWin:`Gilnid's contraptions lie in smoking ruin.`, xpBonus:25,
 },
 {
 id:'sneed_workshop', type:'encounter', title:"Sneed's Workshop", icon:'🔧',
 text:`A wiry goblin barely three feet tall whips around from his workbench.\n\n"Ohhh, so they sent someone after Sneed? Sneed's not going down easy!" He vaults into a massive mechanical shredder.`,
 enemies:['sneedShredder'], onWin:`Sneed is finally defeated. You find a handful of spare parts and a small journal.`, xpBonus:20,
 },
 {
 id:'mr_smite', type:'encounter', title:"Mr. Smite's Challenge", icon:'⚓',
 text:`The massive first mate stands at the ship's gangplank, arms folded.\n\n"Ye'll not pass while Mr. Smite draws breath."`,
 enemies:['mrSmite'], onWin:`Smite crashes to the deck. The gangplank is clear.`, xpBonus:35,
 },
 // ── ACT 3: THE SHIP ──────────────────────────────────────────────
 {
 id:'ship_deck', type:'story', title:'The Hidden Harbour', icon:'⛵',
 text:`You step through an archway and stop dead.\n\nA full three-masted warship floats in an enormous underground cavern. On deck: the ship's cook argues with murloc pirates. Below him: the red hat of Captain Greenskin.`,
 choices:[
 { text:'Board over the gangplank — loud and direct', skill:null, dc:0 },
 { text:'Climb the anchor chain in silence', skill:'Athletics', dc:12, successHint:'Stealth for next combat', failHint:'-4 HP (fell in the water)' },
 { text:'Lure the deck crew with a noise from the dock', skill:'Deception', dc:10, successHint:'+1 roll bonus next combat', failHint:'+2 enemy attack bonus next fight' },
 ],
 outcomes:{
 0:{ result:'You stride up the gangplank. Whatever happens next, it happens loud.' },
 1:{ success:'You scale the anchor chain unseen. You have the advantage of surprise.', fail:"You slip halfway and hit the water — soaked, bruised, and now they know you're coming.",
 successEffect:{ stealth:true }, failEffect:{ hp:-4 } },
 2:{ success:'You toss a loose board into the water. The deck crew rush to the rail — leaving the path clear.', fail:'"Nice try, landlubber," says a voice behind you. Greenskin grins.',
 successEffect:{ nextCombatRollBonus:1 }, failEffect:{ nextCombatRollBonus:-2 } },
 },
 },
 {
 id:'murloc_mob', type:'encounter', title:'The Murloc Crew', icon:'🐟',
 text:`A mob of murloc pirates block the main deck.\n\n"MRGLGLGL!"`,
 enemies:['murloc','murloc'], onWin:`The murlocs scatter overboard. The path to the galley is clear.`, xpBonus:15,
 },
 {
 id:'cookie', type:'encounter', title:"Cookie's Galley", icon:'🍳',
 text:`The ship's cook waves his soup ladle in your direction.\n\n"MRGLLLL! Nobody interrupts Cookie during prep time!"`,
 enemies:['cookie'], onWin:`Cookie is defeated. You find a key to the captain's quarters.`, xpBonus:25,
 },
 {
 id:'greenskin', type:'encounter', title:'Battle for the Quarterdeck', icon:'🏴\u200d☠️',
 text:`Captain Greenskin draws a gleaming cutlass.\n\n"You want VanCleef? You'll have to go through every one of my crew."`,
 enemies:['captainGreenskin','defiastRogue'], onWin:`Greenskin slumps. The path to VanCleef's quarters is clear.`, xpBonus:35,
 },
 // ── ACT 4: FINAL ─────────────────────────────────────────────────
 {
 id:'van_cleef_approach', type:'story', title:"VanCleef's Quarters", icon:'🗡️',
 text:`Edwin VanCleef stands at the stern window. He doesn't turn when you enter.\n\n"I knew someone would come eventually."\n\nHis voice is quiet.\n\n"We built Stormwind. Stone by stone. And when we asked to be paid... they called us rabble."\n\nHe draws.\n\n"Are you going to talk me to death, or are we doing this?"`,
 choices:[
 { text:'"Put the blade down. There\'s still a way out."', skill:'Persuasion', dc:18, successHint:'+5 HP · -2 to VanCleef attack', failHint:'+1 enemy atk (angered him)' },
 { text:'"I understand why. But I can\'t let it go further."', skill:null, dc:0 },
 { text:'Draw your weapon without a word.', skill:null, dc:0 },
 ],
 outcomes:{
 0:{ success:'VanCleef pauses. Something in his stance softens. "...I appreciate that. But it\'s gone too far." He raises his blade — but he hesitates.', fail:'"Philosophy won\'t save you." His eyes harden. He attacks with renewed fury.',
 successEffect:{ hp:5, nextCombatRollBonus:2 }, failEffect:{ nextCombatRollBonus:-1 } },
 1:{ result:'"At least you\'re honest," he says quietly. "Most wouldn\'t bother."' },
 2:{ result:'"Good," he says. "I\'ve had enough talking."' },
 },
 },
 {
 id:'van_cleef_boss', type:'encounter', title:'Edwin VanCleef — Final Battle', icon:'💀',
 text:`"For the Brotherhood! For every stonemason they ever cheated! FOR WESTFALL!"\n\nVanCleef charges — and behind him, from hidden passages in the hull, come his last defenders.`,
 enemies:['edwinVanCleef','shadowGuard','shadowGuard'],
 onWin:`VanCleef falls to one knee.\n\n"Tell them..." he breathes. "...tell them we only wanted what was owed."\n\nEdwin VanCleef is dead. Westfall is safe — for now.`,
 xpBonus:60, isFinalBoss:true,
 },
];
const HEROES = {
 Rogue: [
 { id:'brixx', unlockCost:0, name:"Brixx, The Silent Blade", icon:'🗡️', hp:23,
 abilityName:"Shadow Surge", abilityDesc:"Once per combat: Roll. On 8+, gain 3 Combo Points.", abilityDC:8,
 lore:"A ghost in the dark. They say Brixx has never been seen leaving a room — only arriving.",
 ability:(char,roll,C)=>{ if(roll>=8){char.comboPoints=Math.min(5,(char.comboPoints||0)+3);return{success:true,msg:`Shadow Surge! Gained 3 Combo Points (${char.comboPoints}/5).`};}return{success:false,msg:`Shadow Surge fizzles. (rolled ${roll}, need 8+)`};}
 },
 { id:'silverwing', unlockCost:15, name:"Silverwing, The Deadeye", icon:'🏹', hp:24,
 abilityName:"Dead Eye Focus", abilityDesc:"Once per combat: Roll. On 8+, crit threshold becomes 15+ this turn.", abilityDC:8,
 lore:"Every shot is a gift. Every miss is a lesson she refuses to repeat.",
 ability:(char,roll,C)=>{ if(roll>=8){C._deadeyeCritThisTurn=true;return{success:true,msg:`Dead Eye Focus! Crits trigger on 15+ this turn!`};}return{success:false,msg:`Dead Eye Focus misses. (rolled ${roll}, need 8+)`};}
 },
 { id:'ilarian', unlockCost:25, name:"Ilarian, The Betrayer", icon:'🗡️', hp:21,
 abilityName:"Blood Pact", abilityDesc:"Once per combat: Roll. On 8+, melee abilities heal you for damage dealt this turn.", abilityDC:8,
 lore:"He sold his soul twice — and got a better price the second time.",
 ability:(char,roll,C)=>{ if(roll>=8){C._meleeHealMode=true;return{success:true,msg:`Blood Pact! Melee heals you this turn!`};}return{success:false,msg:`Blood Pact fails. (rolled ${roll}, need 8+)`};}
 },
 { id:'justinian', unlockCost:35, name:"Justinian, The Pillager", icon:'⚔️', hp:26,
 abilityName:"War Cry", abilityDesc:"Once per combat: Roll. On 8+, gain +3 to all rolls this turn.", abilityDC:8,
 lore:"He doesn't fight for gold or glory. He fights because he's very, very good at it.",
 ability:(char,roll,C)=>{ if(roll>=8){C.bonusRoll=(C.bonusRoll||0)+3;return{success:true,msg:`War Cry! +3 to all rolls this turn!`};}return{success:false,msg:`War Cry falls flat. (rolled ${roll}, need 8+)`};}
 },
 ],
 Mage: [
 { id:'medhiv', unlockCost:0, name:"Medhiv, Magus Extraordinaire", icon:'🧙', hp:18,
 abilityName:"Arcane Surge", abilityDesc:"Once per combat: Roll. On 8+, next magic ability deals +3 damage.", abilityDC:8,
 lore:"The most powerful mage in the room. He knows it. You know it. The room knows it.",
 ability:(char,roll,C)=>{ if(roll>=8){C.nextCardDmgBonus=(C.nextCardDmgBonus||0)+3;return{success:true,msg:`Arcane Surge! Next magic +3 damage!`};}return{success:false,msg:`Arcane Surge fizzles. (rolled ${roll}, need 8+)`};}
 },
 { id:'grimlock', unlockCost:15, name:"Grimlock, The Destroyer", icon:'🔥', hp:18,
 abilityName:"Inferno", abilityDesc:"Once per combat: Roll. On 8+, next fire magic resolves twice.", abilityDC:8,
 lore:"He doesn't cast spells. He unleashes catastrophes.",
 ability:(char,roll,C)=>{ if(roll>=8){C._nextFireDouble=true;return{success:true,msg:`Inferno! Next fire magic resolves twice!`};}return{success:false,msg:`Inferno sputters. (rolled ${roll}, need 8+)`};}
 },
 { id:'zeezrom', unlockCost:25, name:"Zeezrom, The Cold Hearted", icon:'❄️', hp:20,
 abilityName:"Flash Freeze", abilityDesc:"Once per combat: Roll. On 8+, all enemies deal half damage next turn.", abilityDC:8,
 lore:"She once froze an entire army mid-charge. She still charges them for the time.",
 ability:(char,roll,C)=>{ if(roll>=8){C.enemies.forEach(e=>{if(e.hp>0)e._halfAttackNextTurn=true;});return{success:true,msg:`Flash Freeze! All enemies deal half damage next turn!`};}return{success:false,msg:`Flash Freeze fizzles. (rolled ${roll}, need 8+)`};}
 },
 { id:'pyrelith', unlockCost:35, name:"Pyrelith, The Ashen", icon:'🔥', hp:16,
 abilityName:"Pyretic Mastery", abilityDesc:"Once per combat: Roll. On 8+, all fire abilities auto-hit this turn.", abilityDC:8,
 lore:"Born in a volcano. Raised by fire elementals. Disappointed by everyone else.",
 ability:(char,roll,C)=>{ if(roll>=8){C._allFireAutoHit=true;return{success:true,msg:`Pyretic Mastery! Fire abilities auto-hit this turn!`};}return{success:false,msg:`Pyretic Mastery fails. (rolled ${roll}, need 8+)`};}
 },
 ],
 Druid: [
 { id:'sylvara', unlockCost:0, name:"Sylvara, The Grove Keeper", icon:'🌲', hp:22,
 abilityName:"Nature's Bounty", abilityDesc:"Once per combat: Roll. On 8+, heal 4 HP and draw 1 card.", abilityDC:8,
 lore:"The forest does not forget. Neither does she.",
 ability:(char,roll,C)=>{ if(roll>=8){char.hp=Math.min(char.maxHP,char.hp+4);C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+1;return{success:true,msg:`Nature's Bounty! Healed 4 HP and draw +1 next turn!`};}return{success:false,msg:`Nature's Bounty withers. (rolled ${roll}, need 8+)`};}
 },
 { id:'elsworn', unlockCost:25, name:"Elsworn, Nature's Advocate", icon:'🌲', hp:28,
 abilityName:"Nature's Wrath", abilityDesc:"Once per combat: Roll. On 8+, take half damage and reflect it back this turn.", abilityDC:8,
 lore:"He speaks for the trees. The trees speak through his fists.",
 ability:(char,roll,C)=>{ if(roll>=8){C._elswornShield=true;return{success:true,msg:`Nature's Wrath! Half damage + reflect this turn!`};}return{success:false,msg:`Nature's Wrath fades. (rolled ${roll}, need 8+)`};}
 },
 { id:'axilea', unlockCost:15, name:"Axilea, Gaia's Chosen", icon:'🌿', hp:24,
 abilityName:"Gaia's Blessing", abilityDesc:"Once per combat: Roll. On 6+, the next Restoration or Balance ability you play this turn resolves twice.", abilityDC:6,
 lore:"She doesn't speak to nature. Nature speaks through her.",
 ability:(char,roll,C)=>{ if(roll>=6){C._doubleNextRestoBalance=true;return{success:true,msg:`Gaia's Blessing! Next Restoration or Balance ability resolves twice!`};}return{success:false,msg:`Gaia's Blessing fades. (rolled ${roll}, need 6+)`};}
 },
 { id:'boris', unlockCost:35, name:"Boris, The Unyielding", icon:'🐻', hp:35,
 abilityName:"Iron Hide", abilityDesc:"Once per combat: Roll. On 8+, take no damage this turn.", abilityDC:8,
 lore:"He has never taken a step backward. He has also never needed to.",
 ability:(char,roll,C)=>{ if(roll>=8){C.preventAttackDamageThisTurn=true;C._preventAbilityDmgThisTurn=true;return{success:true,msg:`Iron Hide! No damage taken this turn!`};}return{success:false,msg:`Iron Hide cracks. (rolled ${roll}, need 8+)`};}
 },
 ],
 Warrior: [
 { id:'galem', unlockCost:0, name:'Galem, War Born', icon:'⚔️', hp:35,
 abilityName:'Battle Cry', abilityDesc:'Once per combat: Roll 6+. Gain +3 damage and +2 roll bonus this turn.',
 abilityDC:6, lore:'Born on the battlefield. Will die on one too.',
 ability:(char,roll,C)=>{ if(roll>=6){char.dmgBonus=(char.dmgBonus||0)+3; C.bonusRoll=(C.bonusRoll||0)+2; return{success:true,msg:'Battle Cry! +3 damage, +2 roll this turn!'};}return{success:false,msg:`Battle Cry fades. (${roll}, need 6+)`};} },
 { id:'caldrus', unlockCost:15, name:'Caldrus the Furious', icon:'💢', hp:32,
 abilityName:'Bloodlust', abilityDesc:'Once per combat: Roll 7+. All abilities deal +2 damage this turn.',
 abilityDC:7, lore:'He fights until there is nothing left. Then he keeps fighting.',
 ability:(char,roll,C)=>{ if(roll>=7){C.nextCardDmgBonus=(C.nextCardDmgBonus||0)+2; char.dmgBonus=(char.dmgBonus||0)+2; return{success:true,msg:'Bloodlust! +2 damage to all abilities this turn!'};}return{success:false,msg:`Bloodlust fades. (${roll}, need 7+)`};} },
 { id:'ironhelm', unlockCost:25, name:'Ironhelm the Unyielding', icon:'🪖', hp:38,
 abilityName:'Second Wind', abilityDesc:'Once per combat: Roll 8+. Recover 6 HP and take no damage next round.',
 abilityDC:8, lore:"He has died three times. None of them stuck.",
 ability:(char,roll,C)=>{ if(roll>=8){const old=char.hp; char.hp=Math.min(char.maxHP,char.hp+6); C.preventAttackDamageThisTurn=true; return{success:true,msg:`Second Wind! +${char.hp-old} HP, no attack damage this round!`};}return{success:false,msg:`Second Wind falters. (${roll}, need 8+)`};} },
 { id:'varg', unlockCost:35, name:'Varg the Unbroken', icon:'🛡️', hp:40,
 abilityName:'Last Stand', abilityDesc:'Once per combat: Roll 8+. Block all attack damage this round.',
 abilityDC:8, lore:'He has never knelt. Not once.',
 ability:(char,roll,C)=>{ if(roll>=8){C.preventAttackDamageThisTurn=true; return{success:true,msg:'Last Stand! No attack damage this round!'};}return{success:false,msg:`Last Stand failed. (${roll}, need 8+)`};} },
 ],
 Hunter: [
 { id:'rekzah', unlockCost:0, name:'Rekzah, Storm Bringer', icon:'🏹', hp:28,
 abilityName:'Eagle Eye', abilityDesc:'Once per combat: Roll 7+. Next ability auto-hits and deals +4 damage.',
 abilityDC:7, lore:'The arrow leaves before the decision.',
 ability:(char,roll,C)=>{ if(roll>=7){C._nextCardAutoHit=true; char.dmgBonus=(char.dmgBonus||0)+4; return{success:true,msg:'Eagle Eye! Next ability auto-hits + 4 bonus damage!'};}return{success:false,msg:`Eagle Eye missed. (${roll}, need 7+)`};} },
 { id:'trix', unlockCost:15, name:'Trix, The Trapper', icon:'🪤', hp:27,
 abilityName:'Deadly Ambush', abilityDesc:'Once per combat: Roll 7+. Mark all enemies and gain +2 to all rolls this turn.',
 abilityDC:7, lore:'The trap was set before you entered the room.',
 ability:(char,roll,C)=>{ if(roll>=7){C.enemies.filter(e=>e.hp>0).forEach(e=>{e.debuffs=e.debuffs||[];if(!e.debuffs.find(d=>d.id==='marked'))e.debuffs.push({id:'marked',stacks:2});});C.bonusRoll=(C.bonusRoll||0)+2; return{success:true,msg:'Deadly Ambush! All enemies marked. +2 to all rolls!'};}return{success:false,msg:`Deadly Ambush fails. (${roll}, need 7+)`};} },
 { id:'vael', unlockCost:25, name:'Vael the Beastmaster', icon:'🐗', hp:32,
 abilityName:'Call the Pack', abilityDesc:'Once per combat: Roll 7+. Summon 2 companions and draw 1 extra card next turn.',
 abilityDC:7, lore:"His beasts listen better than his soldiers ever did.",
 ability:(char,roll,C)=>{ if(roll>=7){C._treants=(C._treants||0)+2; C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+1; return{success:true,msg:'Call the Pack! 2 companions summoned. Draw 1 extra next turn!'};}return{success:false,msg:`Call the Pack fails. (${roll}, need 7+)`};} },
 { id:'syla', unlockCost:35, name:"Syla the Wild", icon:'🐺', hp:30,
 abilityName:'Pack Instinct', abilityDesc:'Once per combat: Roll 6+. Summon a Treant companion and gain +2 to all rolls.',
 abilityDC:6, lore:"She doesn't hunt alone. She never has.",
 ability:(char,roll,C)=>{ if(roll>=6){C._treants=(C._treants||0)+1; char.rollBonus=(char.rollBonus||0)+2; return{success:true,msg:'Pack Instinct! Companion summoned, +2 to all rolls!'};}return{success:false,msg:`Pack Instinct faded. (${roll}, need 6+)`};} },
 ],
 Priest: [
 { id:'seraphina', unlockCost:0, name:"Seraphina, Light's Voice", icon:'✨', hp:22,
 abilityName:'Divine Grace', abilityDesc:'Once per combat: Roll 7+. Heal 8 HP and your next heal is doubled.',
 abilityDC:7, lore:'Her prayers are answered. Eventually.',
 ability:(char,roll,C)=>{ if(roll>=7){const old=char.hp; char.hp=Math.min(char.maxHP,char.hp+8); C._nextHealDoubled=true; return{success:true,msg:`Divine Grace! +${char.hp-old} HP. Next heal doubled!`};}return{success:false,msg:`Divine Grace faded. (${roll}, need 7+)`};} },
 { id:'theralion', unlockCost:15, name:"Theralion, Light's Shield", icon:'🛡️', hp:25,
 abilityName:'Barrier of Faith', abilityDesc:"Once per combat: Roll 7+. Block all attack damage this round and heal 3 HP.",
 abilityDC:7, lore:"The Light is not a weapon. It is a wall.",
 ability:(char,roll,C)=>{ if(roll>=7){C.preventAttackDamageThisTurn=true; const old=char.hp; char.hp=Math.min(char.maxHP,char.hp+3); return{success:true,msg:`Barrier of Faith! No attack damage this round. +${char.hp-old} HP.`};}return{success:false,msg:`Barrier of Faith wavers. (${roll}, need 7+)`};} },
 { id:'nyssa', unlockCost:25, name:'Nyssa the Radiant', icon:'🌟', hp:22,
 abilityName:'Holy Barrage', abilityDesc:'Once per combat: Roll 8+. Deal 2 holy damage to all enemies. Heal 1 HP per enemy hit.',
 abilityDC:8, lore:'She does not ask for mercy. She distributes it herself.',
 ability:(char,roll,C)=>{ if(roll>=8){let hits=0; C.enemies.filter(e=>e.hp>0).forEach(e=>{const d=Math.min(e.hp,2); e.hp-=d; hits++; if(e.hp<=0){G.char.runKills=(G.char.runKills||0)+1;log(`☠️ ${e.name} defeated!`,'log-crit');}}); char.hp=Math.min(char.maxHP,char.hp+hits); return{success:true,msg:`Holy Barrage! 2 holy damage to ${hits} enemies. Healed ${hits} HP!`};}return{success:false,msg:`Holy Barrage falters. (${roll}, need 8+)`};} },
 { id:'malachar', unlockCost:35, name:'Malachar the Penitent', icon:'🌑', hp:24,
 abilityName:'Shadow Covenant', abilityDesc:'Once per combat: Roll 8+. Deal 6 shadow damage to all enemies. Heal for total dealt.',
 abilityDC:8, lore:'The light casts long shadows.',
 ability:(char,roll,C)=>{ if(roll>=8){let tot=0; C.enemies.filter(e=>e.hp>0).forEach(e=>{const d=Math.min(e.hp,6); e.hp-=d; tot+=d; if(e.hp<=0){G.char.runKills=(G.char.runKills||0)+1;log(`☠️ ${e.name} defeated!`,'log-crit');}}); char.hp=Math.min(char.maxHP,char.hp+tot); return{success:true,msg:`Shadow Covenant! ${tot} shadow damage, healed ${tot} HP!`};}return{success:false,msg:`Shadow Covenant faltered. (${roll}, need 8+)`};} },
 ],
 Warlock: [
 { id:'xerath', unlockCost:0, name:'Xerath the Ruinous', icon:'💀', hp:24,
 abilityName:'Soul Drain', abilityDesc:'Once per combat: Roll 7+. Drain 5 HP from all enemies. Heal for total drained.',
 abilityDC:7, lore:'Power flows from suffering.',
 ability:(char,roll,C)=>{ if(roll>=7){let tot=0; C.enemies.filter(e=>e.hp>0).forEach(e=>{const d=Math.min(e.hp,5); e.hp-=d; tot+=d;}); char.hp=Math.min(char.maxHP,char.hp+tot); return{success:true,msg:`Soul Drain! Drained ${tot} HP, healed ${tot} HP!`};}return{success:false,msg:`Soul Drain failed. (${roll}, need 7+)`};} },
 { id:'rhaegar', unlockCost:15, name:'Rhaegar the Corruptor', icon:'☠️', hp:25,
 abilityName:'Mass Corruption', abilityDesc:'Once per combat: Roll 7+. Apply 3 Poison stacks to all enemies.',
 abilityDC:7, lore:'He does not kill with weapons. He kills with time.',
 ability:(char,roll,C)=>{ if(roll>=7){C.enemies.filter(e=>e.hp>0).forEach(e=>{e.debuffs=e.debuffs||[];const p=e.debuffs.find(d=>d.id==='poison');if(p)p.stacks+=3;else e.debuffs.push({id:'poison',stacks:3});});return{success:true,msg:'Mass Corruption! 3 Poison stacks on all enemies!'};}return{success:false,msg:`Mass Corruption fails. (${roll}, need 7+)`};} },
 { id:'lillith', unlockCost:25, name:'Lillith the Devourer', icon:'🩸', hp:23,
 abilityName:'Soul Siphon', abilityDesc:'Once per combat: Roll 8+. Drain 3 HP from each enemy. Gain +1 damage per enemy drained this turn.',
 abilityDC:8, lore:'Hunger is not a weakness. It is a power.',
 ability:(char,roll,C)=>{ if(roll>=8){let drained=0; C.enemies.filter(e=>e.hp>0).forEach(e=>{const d=Math.min(e.hp,3); e.hp-=d; char.hp=Math.min(char.maxHP,char.hp+d); drained++; if(e.hp<=0){G.char.runKills=(G.char.runKills||0)+1;log(`☠️ ${e.name} defeated!`,'log-crit');}}); char.dmgBonus=(char.dmgBonus||0)+drained; return{success:true,msg:`Soul Siphon! Drained ${drained} enemies. +${drained} damage this turn!`};}return{success:false,msg:`Soul Siphon fails. (${roll}, need 8+)`};} },
 { id:'moravia', unlockCost:35, name:'Moravia the Cursed', icon:'🕯️', hp:26,
 abilityName:'Dark Pact', abilityDesc:'Once per combat: Roll 9+. Deal 10 shadow damage to target. Lose 3 HP.',
 abilityDC:9, lore:'Every deal leaves a scar.',
 ability:(char,roll,C)=>{ if(roll>=9){const t=C.enemies[C.targetIdx]; if(t&&t.hp>0){t.hp=Math.max(0,t.hp-10); if(t.hp<=0){G.char.runKills=(G.char.runKills||0)+1;log(`☠️ ${t.name} defeated!`,'log-crit');}} char.hp=Math.max(1,char.hp-3); return{success:true,msg:'Dark Pact! 10 shadow damage. Lost 3 HP.'};}return{success:false,msg:`Dark Pact faltered. (${roll}, need 9+)`};} },
 ],
 Shaman: [
 { id:'torryn', unlockCost:0, name:'Torryn the Stormcaller', icon:'⚡', hp:30,
 abilityName:'Chain Lightning', abilityDesc:'Once per combat: Roll 7+. Deal 3 lightning damage to all enemies and draw 1 card.',
 abilityDC:7, lore:'The storm answers when he calls.',
 ability:(char,roll,C)=>{ if(roll>=7){C.enemies.filter(e=>e.hp>0).forEach(e=>{const d=Math.min(e.hp,3); e.hp-=d; if(e.hp<=0){G.char.runKills=(G.char.runKills||0)+1;log(`☠️ ${e.name} defeated!`,'log-crit');}}); C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+1; return{success:true,msg:'Chain Lightning! 3 damage to all. Draw 1 next turn!'};}return{success:false,msg:`Chain Lightning dissipated. (${roll}, need 7+)`};} },
 { id:'keldrath', unlockCost:15, name:'Keldrath the Lava Lord', icon:'🌋', hp:28,
 abilityName:'Lava Surge', abilityDesc:'Once per combat: Roll 7+. Deal 4 fire damage to target and apply 2 Ignite stacks.',
 abilityDC:7, lore:'He was born during an eruption. It was not the last one.',
 ability:(char,roll,C)=>{ if(roll>=7){const t=C.enemies[C.targetIdx]; if(t&&t.hp>0){const d=Math.min(t.hp,4); t.hp-=d; if(t.hp<=0){G.char.runKills=(G.char.runKills||0)+1;log(`☠️ ${t.name} defeated!`,'log-crit');} t.debuffs=t.debuffs||[];const ig=t.debuffs.find(d=>d.id==='ignite');if(ig)ig.stacks+=2;else t.debuffs.push({id:'ignite',stacks:2}); return{success:true,msg:'Lava Surge! 4 fire damage + 2 Ignite stacks!'};}return{success:true,msg:'Lava Surge: no living target!'};}return{success:false,msg:`Lava Surge fizzles. (${roll}, need 7+)`};} },
 { id:'zephyra', unlockCost:25, name:'Zephyra, Wind Walker', icon:'🌪️', hp:27,
 abilityName:'Ancestral Wind', abilityDesc:'Once per combat: Roll 7+. Draw 2 extra cards next turn and +1 to all rolls this turn.',
 abilityDC:7, lore:'The ancestors guide every step. Even backward ones.',
 ability:(char,roll,C)=>{ if(roll>=7){C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+2; C.bonusRoll=(C.bonusRoll||0)+1; return{success:true,msg:'Ancestral Wind! Draw 2 extra next turn. +1 to all rolls!'};}return{success:false,msg:`Ancestral Wind fades. (${roll}, need 7+)`};} },
 { id:'ursa', unlockCost:35, name:'Ursa the Earthshaker', icon:'🌍', hp:33,
 abilityName:'Earthquake', abilityDesc:'Once per combat: Roll 8+. Stun all enemies for 1 turn. +3 damage reduction.',
 abilityDC:8, lore:'The ground obeys.',
 ability:(char,roll,C)=>{ if(roll>=8){C.enemies.filter(e=>e.hp>0).forEach(e=>{e._stunnedTurns=(e._stunnedTurns||0)+1;}); char.dmgReduction=(char.dmgReduction||0)+3; return{success:true,msg:'Earthquake! All enemies stunned. +3 damage reduction!'};}return{success:false,msg:`Earthquake failed. (${roll}, need 8+)`};} },
 ],
 'Time Walker': [
 { id:'chronara', unlockCost:0, name:'Chronara the Timeless', icon:'⏳', hp:22,
 abilityName:'Temporal Echo', abilityDesc:'Once per combat: Roll 8+. Gain an extra play and save your roll for next use.',
 abilityDC:8, lore:"She remembers futures others haven't lived yet.",
 ability:(char,roll,C)=>{ if(roll>=8){C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1; C._savedRoll=roll; return{success:true,msg:`Temporal Echo! Extra play + saved roll ${roll}.`};}return{success:false,msg:`Temporal Echo faded. (${roll}, need 8+)`};} },
 { id:'kairos', unlockCost:15, name:'Kairos the Precognitive', icon:'🔮', hp:23,
 abilityName:'Future Sight', abilityDesc:'Once per combat: Roll 7+. Your next ability automatically crits.',
 abilityDC:7, lore:'He has already read the end of this story. He is not impressed.',
 ability:(char,roll,C)=>{ if(roll>=7){C._nextCardAutoCrit=true; return{success:true,msg:'Future Sight! Next ability auto-crits!'};}return{success:false,msg:`Future Sight clouded. (${roll}, need 7+)`};} },
 { id:'veloryn', unlockCost:25, name:'Veloryn the Paradox', icon:'♾️', hp:22,
 abilityName:'Temporal Rupture', abilityDesc:'Once per combat: Roll 9+. Deal 5 arcane damage to all enemies and stun them for 1 turn.',
 abilityDC:9, lore:"He exists simultaneously at every moment. This is less relaxing than it sounds.",
 ability:(char,roll,C)=>{ if(roll>=9){C.enemies.filter(e=>e.hp>0).forEach(e=>{const d=Math.min(e.hp,5); e.hp-=d; e._stunnedTurns=(e._stunnedTurns||0)+1; if(e.hp<=0){G.char.runKills=(G.char.runKills||0)+1;log(`☠️ ${e.name} defeated!`,'log-crit');}}); return{success:true,msg:'Temporal Rupture! 5 arcane damage + stun to all enemies!'};}return{success:false,msg:`Temporal Rupture fails. (${roll}, need 9+)`};} },
 { id:'vex', unlockCost:35, name:'Vex, Unmoored', icon:'🌀', hp:24,
 abilityName:'Time Stop', abilityDesc:'Once per combat: Roll 10+. All enemies skip next attack. Draw 2 next turn.',
 abilityDC:10, lore:"Time doesn't stop for him. He stops it.",
 ability:(char,roll,C)=>{ if(roll>=10){C.enemies.filter(e=>e.hp>0).forEach(e=>{e._noAttackThisTurn=true;}); C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+2; return{success:true,msg:'Time Stop! All enemies skip attack. Draw 2 next turn!'};}return{success:false,msg:`Time Stop failed. (${roll}, need 10+)`};} },
 ]
};
HEROES['TimeWalker'] = HEROES['Time Walker'];
const LEGACY_UPGRADES = [
 // ── GENERAL UPGRADES (all classes) ─────────────────────────
 { id:'lg_start_cards', name:'Starting Expertise', icon:'✨', cost:12, maxLevel:4,
 desc:(lvl)=>`Start with ${6+lvl} cards in your opening deck instead of 6`,
 apply:(c,lvl)=>{ c._extraStartCards=(c._extraStartCards||0)+1; } },
 { id:'lg_draft_choices', name:'More Options', icon:'🔀', cost:10, maxLevel:4,
 desc:(lvl)=>`See ${3+lvl} cards per draft pick instead of 3`,
 apply:(c,lvl)=>{ c._draftChoices=(c._draftChoices||3)+1; } },
 { id:'lg_max_hp', name:'Resilience', icon:'❤️', cost:8, maxLevel:8,
 desc:(lvl)=>`+${lvl*5} max HP`,
 apply:(c,lvl)=>{ c.maxHP=(c.maxHP||20)+5; c.hp=Math.min(c.hp||20,c.maxHP); } },
 { id:'lg_combat_roll', name:'Battle Hardened', icon:'🎯', cost:8, maxLevel:6,
 desc:(lvl)=>`+${lvl} to all combat rolls`,
 apply:(c,lvl)=>{ c.rollBonus=(c.rollBonus||0)+1; } },
 { id:'lg_post_heal', name:'Battle Recovery', icon:'💚', cost:10, maxLevel:5,
 desc:(lvl)=>`Restore ${lvl*10}% HP after each combat`,
 apply:(c,lvl)=>{ c._postCombatHealPct=(c._postCombatHealPct||0)+10; } },
 { id:'lg_extra_draw', name:'Sharp Mind', icon:'🃏', cost:12, maxLevel:3,
 desc:(lvl)=>`Draw +${lvl} extra card${lvl!==1?'s':''} at the start of each turn`,
 apply:(c,lvl)=>{ c.extraDraw=(c.extraDraw||0)+1; } },
 { id:'lg_perm_dmg', name:'Veteran Striker', icon:'💪', cost:15, maxLevel:5,
 desc:(lvl)=>`All abilities permanently deal +${lvl} damage`,
 apply:(c,lvl)=>{ c._perkDmgBonus=(c._perkDmgBonus||0)+1; c.dmgBonus=(c.dmgBonus||0)+1; } },
 { id:'lg_inventory_1', name:'Expanded Saddlebag', icon:'🎒', cost:20, maxLevel:1,
 desc:(lvl)=>`Inventory expands to 12 slots`,
 apply:(c,lvl)=>{ } },
 { id:'lg_inventory_2', name:"Adventurer's Pack", icon:'🧳', cost:50, maxLevel:1,
 requires:'lg_inventory_1',
 desc:(lvl)=>`Inventory expands to 14 slots`,
 apply:(c,lvl)=>{ } },
 { id:'lg_inventory_3', name:'Bottomless Bag', icon:'🪣', cost:100, maxLevel:1,
 requires:'lg_inventory_2',
 desc:(lvl)=>`Inventory expands to 16 slots`,
 apply:(c,lvl)=>{ } },

 // ── ROGUE UPGRADES ─────────────────────────────────────────
 { id:'lg_rogue_combo', name:'Quick Hands', icon:'🗡️', cost:10, maxLevel:5, class:'Rogue',
 desc:(lvl)=>`Start each combat with ${lvl} Combo Point${lvl!==1?'s':''}`,
 apply:(c,lvl)=>{ c._startComboPoints=(c._startComboPoints||0)+1; } },
 { id:'lg_rogue_stealth', name:'Shadow Mastery', icon:'👤', cost:15, maxLevel:4, class:'Rogue',
 desc:(lvl)=>`Stealth abilities deal +${lvl*2} bonus damage`,
 apply:(c,lvl)=>{ c._stealthDmgBonus=(c._stealthDmgBonus||0)+2; } },
 { id:'lg_rogue_poison', name:'Toxic Blades', icon:'☠️', cost:12, maxLevel:4, class:'Rogue',
 desc:(lvl)=>`Deadly Poison applies ${lvl} extra stack${lvl!==1?'s':''}`,
 apply:(c,lvl)=>{ c._poisonExtraStacks=(c._poisonExtraStacks||0)+1; } },
 { id:'lg_rogue_crit', name:'Killing Edge', icon:'⚔️', cost:20, maxLevel:4, class:'Rogue',
 desc:(lvl)=>`Crit threshold reduced by ${lvl} (${20-lvl}+)`,
 apply:(c,lvl)=>{ c._perkCritBonus=(c._perkCritBonus||0)+1; c.critThreshold=Math.max(16,(c.critThreshold||20)-1); } },
 { id:'lg_rogue_evis', name:'Finishing Blow', icon:'🔪', cost:18, maxLevel:4, class:'Rogue',
 desc:(lvl)=>`Eviscerate and Coup de Grâce deal +${lvl*2} damage per combo point`,
 apply:(c,lvl)=>{ c._comboSpendBonus=(c._comboSpendBonus||0)+2; } },
 { id:'lg_rogue_energy', name:'Relentless', icon:'⚡', cost:14, maxLevel:3, class:'Rogue',
 desc:(lvl)=>`Start each turn with ${lvl} extra play${lvl!==1?'s':''}`,
 apply:(c,lvl)=>{ c._extraPlaysPerTurn=(c._extraPlaysPerTurn||0)+1; } },
 { id:'lg_rogue_loot', name:'Five Finger Discount', icon:'💰', cost:16, maxLevel:3, class:'Rogue',
 desc:(lvl)=>`Pick Pocket steals ${lvl} extra item${lvl!==1?'s':''}`,
 apply:(c,lvl)=>{ c._pickPocketBonus=(c._pickPocketBonus||0)+1; } },
 { id:'lg_rogue_evasion', name:'Evasion', icon:'🌀', cost:20, maxLevel:3, class:'Rogue',
 desc:(lvl)=>`${lvl*10}% chance to evade incoming attacks (${lvl*10}% evasion)`,
 apply:(c,lvl)=>{ c._evasionChance=(c._evasionChance||0)+10; } },

 // ── MAGE UPGRADES ──────────────────────────────────────────
 { id:'lg_mage_fire', name:'Pyromancer', icon:'🔥', cost:10, maxLevel:5, class:'Mage',
 desc:(lvl)=>`Fire abilities deal +${lvl} damage`,
 apply:(c,lvl)=>{ c._fireDmgBonus=(c._fireDmgBonus||0)+1; } },
 { id:'lg_mage_ignite', name:'Scorched Earth', icon:'💫', cost:12, maxLevel:4, class:'Mage',
 desc:(lvl)=>`Ignite counters deal +${lvl} damage per tick`,
 apply:(c,lvl)=>{ c._igniteBonus=(c._igniteBonus||0)+1; } },
 { id:'lg_mage_armor', name:'Arcane Fortitude', icon:'🛡️', cost:15, maxLevel:4, class:'Mage',
 desc:(lvl)=>`Ice Armor and Mage Armor start with +${lvl} extra charges`,
 apply:(c,lvl)=>{ c._armorExtraCharges=(c._armorExtraCharges||0)+1; } },
 { id:'lg_mage_crit', name:'Arcane Precision', icon:'⭐', cost:20, maxLevel:4, class:'Mage',
 desc:(lvl)=>`Magic abilities crit on ${20-lvl}+`,
 apply:(c,lvl)=>{ c._perkCritBonus=(c._perkCritBonus||0)+1; c.critThreshold=Math.max(16,(c.critThreshold||20)-1); } },
 { id:'lg_mage_chain', name:'Chain Reaction', icon:'🔗', cost:18, maxLevel:3, class:'Mage',
 desc:(lvl)=>`Arcane Missiles and Ice Lance fire +${lvl} extra time${lvl!==1?'s':''}`,
 apply:(c,lvl)=>{ c._chainBonus=(c._chainBonus||0)+1; } },
 { id:'lg_mage_frost', name:'Deep Freeze', icon:'❄️', cost:14, maxLevel:3, class:'Mage',
 desc:(lvl)=>`Frost abilities have a ${lvl*10}% chance to stun the target for 1 turn`,
 apply:(c,lvl)=>{ c._frostStunChance=(c._frostStunChance||0)+10; } },
 { id:'lg_mage_arcane', name:'Mana Surge', icon:'🌀', cost:16, maxLevel:3, class:'Mage',
 desc:(lvl)=>`Arcane Power grants +${1+lvl} damage bonus instead of +1`,
 apply:(c,lvl)=>{ c._arcanePowerBonus=(c._arcanePowerBonus||0)+1; } },
 { id:'lg_mage_spellpower', name:'Spellpower Mastery', icon:'✨', cost:14, maxLevel:5, class:'Mage',
 desc:(lvl)=>`All spells permanently deal +${lvl} damage`,
 apply:(c,lvl)=>{ c.dmgBonus=(c.dmgBonus||0)+1; } },

 // ── DRUID UPGRADES ─────────────────────────────────────────
 { id:'lg_druid_hot', name:'Verdant Growth', icon:'🌿', cost:10, maxLevel:5, class:'Druid',
 desc:(lvl)=>`HoTs heal +${lvl} additional HP per tick`,
 apply:(c,lvl)=>{ c._hotBonus=(c._hotBonus||0)+1; } },
 { id:'lg_druid_feral', name:'Predator', icon:'🐱', cost:12, maxLevel:5, class:'Druid',
 desc:(lvl)=>`Melee abilities deal +${lvl} damage in Cat Form`,
 apply:(c,lvl)=>{ c._catFormBonus=(c._catFormBonus||0)+1; } },
 { id:'lg_druid_lifebloom', name:'Ancient Bloom', icon:'🌸', cost:15, maxLevel:4, class:'Druid',
 desc:(lvl)=>`Lifebloom bloom heals for +${lvl*3} additional HP`,
 apply:(c,lvl)=>{ c._lifeboomBonus=(c._lifeboomBonus||0)+3; } },
 { id:'lg_druid_crit', name:"Nature's Precision", icon:'🎯', cost:20, maxLevel:4, class:'Druid',
 desc:(lvl)=>`Crit threshold reduced by ${lvl} (${20-lvl}+)`,
 apply:(c,lvl)=>{ c._perkCritBonus=(c._perkCritBonus||0)+1; c.critThreshold=Math.max(16,(c.critThreshold||20)-1); } },
 { id:'lg_druid_bear', name:'Iron Bark', icon:'🐻', cost:14, maxLevel:4, class:'Druid',
 desc:(lvl)=>`Bear Form reduces damage by an additional ${lvl} (min 1)`,
 apply:(c,lvl)=>{ c._bearDmgReduction=(c._bearDmgReduction||0)+1; } },
 { id:'lg_druid_balance', name:'Starweaver', icon:'⭐', cost:16, maxLevel:3, class:'Druid',
 desc:(lvl)=>`Balance abilities deal +${lvl} nature/arcane damage`,
 apply:(c,lvl)=>{ c._balanceDmgBonus=(c._balanceDmgBonus||0)+1; } },
 { id:'lg_druid_treant', name:'Ancient Grove', icon:'🌳', cost:18, maxLevel:3, class:'Druid',
 desc:(lvl)=>`Force of Nature Treants deal +${lvl} damage per attack`,
 apply:(c,lvl)=>{ c._treantDmgBonus=(c._treantDmgBonus||0)+1; } },
 { id:'lg_druid_fury', name:'Primal Fury', icon:'🐾', cost:14, maxLevel:5, class:'Druid',
 desc:(lvl)=>`+${lvl} damage to all abilities while in any shapeshift form`,
 apply:(c,lvl)=>{ c.dmgBonus=(c.dmgBonus||0)+1; } },

 // ── WARRIOR UPGRADES ───────────────────────────────────────
 { id:'lg_warrior_crit', name:'Killing Instinct', icon:'⚔️', cost:20, maxLevel:4, class:'Warrior',
 desc:(lvl)=>`Crit threshold reduced by ${lvl} (${20-lvl}+)`,
 apply:(c,lvl)=>{ c._perkCritBonus=(c._perkCritBonus||0)+1; c.critThreshold=Math.max(16,(c.critThreshold||20)-1); } },
 { id:'lg_warrior_dmg', name:'Battle Mastery', icon:'💪', cost:15, maxLevel:5, class:'Warrior',
 desc:(lvl)=>`All melee abilities deal +${lvl} damage`,
 apply:(c,lvl)=>{ c.dmgBonus=(c.dmgBonus||0)+1; } },
 { id:'lg_warrior_iron', name:'Iron Skin', icon:'🛡️', cost:12, maxLevel:4, class:'Warrior',
 desc:(lvl)=>`Take ${lvl} less damage from all attacks`,
 apply:(c,lvl)=>{ c.dmgReduction=(c.dmgReduction||0)+1; } },
 { id:'lg_warrior_roll', name:'Combat Veteran', icon:'🎯', cost:10, maxLevel:5, class:'Warrior',
 desc:(lvl)=>`+${lvl} to all combat rolls`,
 apply:(c,lvl)=>{ c.rollBonus=(c.rollBonus||0)+1; } },
 { id:'lg_warrior_draw', name:'Battle Awareness', icon:'🃏', cost:12, maxLevel:3, class:'Warrior',
 desc:(lvl)=>`Draw +${lvl} extra card${lvl!==1?'s':''} per turn`,
 apply:(c,lvl)=>{ c.extraDraw=(c.extraDraw||0)+1; } },
 { id:'lg_warrior_hp', name:'Endurance Training', icon:'❤️', cost:14, maxLevel:4, class:'Warrior',
 desc:(lvl)=>`+${lvl*8} maximum HP`,
 apply:(c,lvl)=>{ c.maxHP=(c.maxHP||35)+8; c.hp=Math.min(c.hp||35,c.maxHP); } },
 { id:'lg_warrior_wind', name:'Second Wind', icon:'💨', cost:16, maxLevel:5, class:'Warrior',
 desc:(lvl)=>`Restore ${lvl*10}% HP after each combat`,
 apply:(c,lvl)=>{ c._postCombatHealPct=(c._postCombatHealPct||0)+10; } },
 { id:'lg_warrior_shield', name:'Shield Expertise', icon:'🔰', cost:18, maxLevel:3, class:'Warrior',
 desc:(lvl)=>`${lvl*8}% chance to evade incoming attacks`,
 apply:(c,lvl)=>{ c._evasionChance=(c._evasionChance||0)+8; } },

 // ── HUNTER UPGRADES ────────────────────────────────────────
 { id:'lg_hunter_crit', name:'Eagle Eye', icon:'🦅', cost:20, maxLevel:4, class:'Hunter',
 desc:(lvl)=>`Crit threshold reduced by ${lvl} (${20-lvl}+)`,
 apply:(c,lvl)=>{ c._perkCritBonus=(c._perkCritBonus||0)+1; c.critThreshold=Math.max(16,(c.critThreshold||20)-1); } },
 { id:'lg_hunter_dmg', name:'Marksman', icon:'🏹', cost:15, maxLevel:5, class:'Hunter',
 desc:(lvl)=>`All ranged abilities deal +${lvl} damage`,
 apply:(c,lvl)=>{ c.dmgBonus=(c.dmgBonus||0)+1; } },
 { id:'lg_hunter_roll', name:'Ranger\'s Eye', icon:'🎯', cost:10, maxLevel:5, class:'Hunter',
 desc:(lvl)=>`+${lvl} to all combat rolls`,
 apply:(c,lvl)=>{ c.rollBonus=(c.rollBonus||0)+1; } },
 { id:'lg_hunter_draw', name:'Swift Quiver', icon:'🃏', cost:12, maxLevel:3, class:'Hunter',
 desc:(lvl)=>`Draw +${lvl} extra card${lvl!==1?'s':''} per turn`,
 apply:(c,lvl)=>{ c.extraDraw=(c.extraDraw||0)+1; } },
 { id:'lg_hunter_evasion', name:'Nature\'s Agility', icon:'🌀', cost:18, maxLevel:3, class:'Hunter',
 desc:(lvl)=>`${lvl*10}% chance to evade incoming attacks`,
 apply:(c,lvl)=>{ c._evasionChance=(c._evasionChance||0)+10; } },
 { id:'lg_hunter_poison', name:'Serpent Mastery', icon:'🐍', cost:12, maxLevel:4, class:'Hunter',
 desc:(lvl)=>`Serpent Sting and poison effects apply ${lvl} extra stack${lvl!==1?'s':''}`,
 apply:(c,lvl)=>{ c._poisonExtraStacks=(c._poisonExtraStacks||0)+1; } },
 { id:'lg_hunter_reduction', name:'Battle Hardened', icon:'🛡️', cost:12, maxLevel:4, class:'Hunter',
 desc:(lvl)=>`Take ${lvl} less damage from all attacks`,
 apply:(c,lvl)=>{ c.dmgReduction=(c.dmgReduction||0)+1; } },
 { id:'lg_hunter_recovery', name:'Hunter\'s Pace', icon:'💚', cost:16, maxLevel:5, class:'Hunter',
 desc:(lvl)=>`Restore ${lvl*10}% HP after each combat`,
 apply:(c,lvl)=>{ c._postCombatHealPct=(c._postCombatHealPct||0)+10; } },

 // ── PRIEST UPGRADES ────────────────────────────────────────
 { id:'lg_priest_crit', name:'Holy Power', icon:'✨', cost:20, maxLevel:4, class:'Priest',
 desc:(lvl)=>`Crit threshold reduced by ${lvl} (${20-lvl}+)`,
 apply:(c,lvl)=>{ c._perkCritBonus=(c._perkCritBonus||0)+1; c.critThreshold=Math.max(16,(c.critThreshold||20)-1); } },
 { id:'lg_priest_shadow', name:'Shadow Weaving', icon:'🌑', cost:14, maxLevel:5, class:'Priest',
 desc:(lvl)=>`Shadow abilities deal +${lvl} damage`,
 apply:(c,lvl)=>{ c.dmgBonus=(c.dmgBonus||0)+1; } },
 { id:'lg_priest_roll', name:'Divine Insight', icon:'🎯', cost:10, maxLevel:5, class:'Priest',
 desc:(lvl)=>`+${lvl} to all combat rolls`,
 apply:(c,lvl)=>{ c.rollBonus=(c.rollBonus||0)+1; } },
 { id:'lg_priest_hot', name:'Renew Mastery', icon:'💚', cost:12, maxLevel:4, class:'Priest',
 desc:(lvl)=>`HoTs heal +${lvl} additional HP per tick`,
 apply:(c,lvl)=>{ c._hotBonus=(c._hotBonus||0)+1; } },
 { id:'lg_priest_draw', name:'Prayer Cards', icon:'🃏', cost:12, maxLevel:3, class:'Priest',
 desc:(lvl)=>`Draw +${lvl} extra card${lvl!==1?'s':''} per turn`,
 apply:(c,lvl)=>{ c.extraDraw=(c.extraDraw||0)+1; } },
 { id:'lg_priest_ward', name:'Divine Aegis', icon:'🛡️', cost:14, maxLevel:4, class:'Priest',
 desc:(lvl)=>`Take ${lvl} less damage from all attacks`,
 apply:(c,lvl)=>{ c.dmgReduction=(c.dmgReduction||0)+1; } },
 { id:'lg_priest_recovery', name:'Prayer of Mending', icon:'🙏', cost:16, maxLevel:5, class:'Priest',
 desc:(lvl)=>`Restore ${lvl*10}% HP after each combat`,
 apply:(c,lvl)=>{ c._postCombatHealPct=(c._postCombatHealPct||0)+10; } },
 { id:'lg_priest_hp', name:'Fortitude', icon:'❤️', cost:14, maxLevel:4, class:'Priest',
 desc:(lvl)=>`+${lvl*6} maximum HP`,
 apply:(c,lvl)=>{ c.maxHP=(c.maxHP||22)+6; c.hp=Math.min(c.hp||22,c.maxHP); } },

 // ── WARLOCK UPGRADES ───────────────────────────────────────
 { id:'lg_warlock_crit', name:'Dark Mastery', icon:'💀', cost:20, maxLevel:4, class:'Warlock',
 desc:(lvl)=>`Crit threshold reduced by ${lvl} (${20-lvl}+)`,
 apply:(c,lvl)=>{ c._perkCritBonus=(c._perkCritBonus||0)+1; c.critThreshold=Math.max(16,(c.critThreshold||20)-1); } },
 { id:'lg_warlock_dmg', name:'Corruption Mastery', icon:'☠️', cost:14, maxLevel:5, class:'Warlock',
 desc:(lvl)=>`All shadow abilities deal +${lvl} damage`,
 apply:(c,lvl)=>{ c.dmgBonus=(c.dmgBonus||0)+1; } },
 { id:'lg_warlock_roll', name:'Demonic Pact', icon:'🎯', cost:10, maxLevel:5, class:'Warlock',
 desc:(lvl)=>`+${lvl} to all combat rolls`,
 apply:(c,lvl)=>{ c.rollBonus=(c.rollBonus||0)+1; } },
 { id:'lg_warlock_dots', name:'Affliction', icon:'🩸', cost:12, maxLevel:4, class:'Warlock',
 desc:(lvl)=>`DoT and poison effects deal +${lvl} damage per stack`,
 apply:(c,lvl)=>{ c._poisonExtraStacks=(c._poisonExtraStacks||0)+1; } },
 { id:'lg_warlock_draw', name:'Dark Ritual', icon:'🃏', cost:12, maxLevel:3, class:'Warlock',
 desc:(lvl)=>`Draw +${lvl} extra card${lvl!==1?'s':''} per turn`,
 apply:(c,lvl)=>{ c.extraDraw=(c.extraDraw||0)+1; } },
 { id:'lg_warlock_evasion', name:'Shadow Step', icon:'🌀', cost:18, maxLevel:3, class:'Warlock',
 desc:(lvl)=>`${lvl*10}% chance to evade incoming attacks`,
 apply:(c,lvl)=>{ c._evasionChance=(c._evasionChance||0)+10; } },
 { id:'lg_warlock_drain', name:'Drain Life Mastery', icon:'💉', cost:16, maxLevel:5, class:'Warlock',
 desc:(lvl)=>`Restore ${lvl*10}% HP after each combat`,
 apply:(c,lvl)=>{ c._postCombatHealPct=(c._postCombatHealPct||0)+10; } },
 { id:'lg_warlock_ward', name:'Shadow Ward', icon:'🛡️', cost:14, maxLevel:4, class:'Warlock',
 desc:(lvl)=>`Take ${lvl} less damage from all attacks`,
 apply:(c,lvl)=>{ c.dmgReduction=(c.dmgReduction||0)+1; } },

 // ── SHAMAN UPGRADES ────────────────────────────────────────
 { id:'lg_shaman_crit', name:'Storm Strike', icon:'⚡', cost:20, maxLevel:4, class:'Shaman',
 desc:(lvl)=>`Crit threshold reduced by ${lvl} (${20-lvl}+)`,
 apply:(c,lvl)=>{ c._perkCritBonus=(c._perkCritBonus||0)+1; c.critThreshold=Math.max(16,(c.critThreshold||20)-1); } },
 { id:'lg_shaman_dmg', name:'Elemental Mastery', icon:'🌊', cost:14, maxLevel:5, class:'Shaman',
 desc:(lvl)=>`All elemental abilities deal +${lvl} damage`,
 apply:(c,lvl)=>{ c.dmgBonus=(c.dmgBonus||0)+1; } },
 { id:'lg_shaman_roll', name:'Ancestral Wisdom', icon:'🎯', cost:10, maxLevel:5, class:'Shaman',
 desc:(lvl)=>`+${lvl} to all combat rolls`,
 apply:(c,lvl)=>{ c.rollBonus=(c.rollBonus||0)+1; } },
 { id:'lg_shaman_hot', name:'Chain Heal Mastery', icon:'💚', cost:12, maxLevel:4, class:'Shaman',
 desc:(lvl)=>`Healing effects restore +${lvl} additional HP per tick`,
 apply:(c,lvl)=>{ c._hotBonus=(c._hotBonus||0)+1; } },
 { id:'lg_shaman_draw', name:'Totemic Focus', icon:'🃏', cost:12, maxLevel:3, class:'Shaman',
 desc:(lvl)=>`Draw +${lvl} extra card${lvl!==1?'s':''} per turn`,
 apply:(c,lvl)=>{ c.extraDraw=(c.extraDraw||0)+1; } },
 { id:'lg_shaman_stone', name:'Stone Skin', icon:'🛡️', cost:14, maxLevel:4, class:'Shaman',
 desc:(lvl)=>`Take ${lvl} less damage from all attacks`,
 apply:(c,lvl)=>{ c.dmgReduction=(c.dmgReduction||0)+1; } },
 { id:'lg_shaman_walk', name:'Spirit Walk', icon:'🌀', cost:16, maxLevel:5, class:'Shaman',
 desc:(lvl)=>`Restore ${lvl*10}% HP after each combat`,
 apply:(c,lvl)=>{ c._postCombatHealPct=(c._postCombatHealPct||0)+10; } },
 { id:'lg_shaman_hp', name:'Ancestral Fortitude', icon:'❤️', cost:14, maxLevel:4, class:'Shaman',
 desc:(lvl)=>`+${lvl*6} maximum HP`,
 apply:(c,lvl)=>{ c.maxHP=(c.maxHP||30)+6; c.hp=Math.min(c.hp||30,c.maxHP); } },

 // ── TIME WALKER UPGRADES ───────────────────────────────────
 { id:'lg_tw_crit', name:'Temporal Precision', icon:'⏳', cost:20, maxLevel:4, class:'TimeWalker',
 desc:(lvl)=>`Crit threshold reduced by ${lvl} (${20-lvl}+)`,
 apply:(c,lvl)=>{ c._perkCritBonus=(c._perkCritBonus||0)+1; c.critThreshold=Math.max(16,(c.critThreshold||20)-1); } },
 { id:'lg_tw_dmg', name:'Temporal Surge', icon:'💥', cost:14, maxLevel:5, class:'TimeWalker',
 desc:(lvl)=>`Time abilities deal +${lvl} damage`,
 apply:(c,lvl)=>{ c.dmgBonus=(c.dmgBonus||0)+1; } },
 { id:'lg_tw_roll', name:'Time Vision', icon:'🎯', cost:10, maxLevel:5, class:'TimeWalker',
 desc:(lvl)=>`+${lvl} to all combat rolls`,
 apply:(c,lvl)=>{ c.rollBonus=(c.rollBonus||0)+1; } },
 { id:'lg_tw_draw', name:'Echo of the Past', icon:'🃏', cost:12, maxLevel:3, class:'TimeWalker',
 desc:(lvl)=>`Draw +${lvl} extra card${lvl!==1?'s':''} per turn`,
 apply:(c,lvl)=>{ c.extraDraw=(c.extraDraw||0)+1; } },
 { id:'lg_tw_shield', name:'Time Shield', icon:'🛡️', cost:14, maxLevel:4, class:'TimeWalker',
 desc:(lvl)=>`Take ${lvl} less damage from all attacks`,
 apply:(c,lvl)=>{ c.dmgReduction=(c.dmgReduction||0)+1; } },
 { id:'lg_tw_blink', name:'Blink Mastery', icon:'🌀', cost:18, maxLevel:3, class:'TimeWalker',
 desc:(lvl)=>`${lvl*10}% chance to evade incoming attacks`,
 apply:(c,lvl)=>{ c._evasionChance=(c._evasionChance||0)+10; } },
 { id:'lg_tw_mend', name:'Temporal Mending', icon:'💚', cost:16, maxLevel:5, class:'TimeWalker',
 desc:(lvl)=>`Restore ${lvl*10}% HP after each combat`,
 apply:(c,lvl)=>{ c._postCombatHealPct=(c._postCombatHealPct||0)+10; } },
 { id:'lg_tw_hp', name:'Chrono Resilience', icon:'❤️', cost:14, maxLevel:4, class:'TimeWalker',
 desc:(lvl)=>`+${lvl*5} maximum HP`,
 apply:(c,lvl)=>{ c.maxHP=(c.maxHP||22)+5; c.hp=Math.min(c.hp||22,c.maxHP); } },
];
const CLASSES = {
 Rogue: {
 name:'Rogue', icon:'🗡️', color:'var(--rogue-col)', borderRGB:'200,80,80',
 desc:'A deadly opportunist who builds Combo Points with every strike and unleashes them in devastating finishers. Uses Stealth to set up ambushes, poison enemies over time, and control the battlefield with crowd control. High risk, extreme reward — play fast, hit hard.',
 baseHP:25, mechanic:'Combo Points',
 mechanicDesc:'Most Rogue abilities generate 1–2 Combo Points. Spend up to 5 on finishers like Eviscerate, Rupture, and Coup de Grâce — the more points spent, the greater the damage. Abilities like Stealth and Ambush deal bonus damage and unlock unique crit effects.',
 playstyle:'Aggressive / Combo',
 strengths:'High burst damage, crowd control, stealth openers, Evasion (dodge chance)',
 weaknesses:'Lower HP — positioning and timing matter',
 },
 Mage: {
 name:'Mage', icon:'🔮', color:'var(--mage-col)',
 desc:'A powerful spellcaster commanding Fire, Frost, and Arcane magic. Stacks Ignite counters on enemies to deal ongoing burn damage, freezes enemies to reduce their attacks, and launches devastating multi-hit chains. Fragile but capable of massive burst damage.',
 baseHP:20, mechanic:'Ignite & Elements',
 mechanicDesc:'Fire abilities apply Ignite stacks — enemies burn at the start of each turn. Frost abilities slow and freeze enemies (half attack damage). Arcane abilities chain multiple hits in a single play. Hot Streak builds stacks of fire fury for empowered casts.',
 playstyle:'Elemental / Burst',
 strengths:'Ignite DoT, multi-hit chain spells, Ice control, AoE damage',
 weaknesses:'Lowest HP — must eliminate threats quickly',
 },
 Druid: {
 name:'Druid', icon:'🌿', color:'var(--druid-col)',
 desc:'A versatile shape-shifter who can deal melee damage, heal, or control enemies depending on their active form. Cat Form boosts melee attacks. Bear Form halves incoming damage. Astral Form empowers nature magic. Tree of Life enhances all healing. Switch forms mid-combat to adapt.',
 baseHP:28, mechanic:'Shapeshifting',
 mechanicDesc:'Play a Shapeshift card to enter a form that persists until combat ends. Cat Form: +2 melee damage. Bear Form: take half damage. Astral Form: +1 Balance damage, crit on 18+. Tree of Life: +1 to all heals and HoTs. Each form removes the active form card from your draw pool.',
 playstyle:'Adaptive / Sustain',
 strengths:'Highest HP, HoT healing, damage reduction, versatile forms, Treants',
 weaknesses:'Slower ramp — forms must be played before their bonuses apply',
 },
 Warrior: {
 name:'Warrior', icon:'⚔️', color:'var(--warrior-col, )', borderRGB:'200,118,42',
 desc:'A powerful melee fighter who channels Rage to fuel devastating attacks. Switches between Battle, Fury, and Defensive Stances to control, deal damage, or protect. High HP and relentless offensive pressure.',
 baseHP:35, mechanic:'Rage',
 mechanicDesc:'Many Warrior abilities generate Rage. Rage abilities gain +2 damage and extra play when you have enough stacks. Stances shift your combat role between offense, fury, and defense.',
 playstyle:'Aggressive / Tanky', strengths:'High HP, relentless melee, stances for versatility', weaknesses:'Limited ranged or healing options',
 },
 Hunter: {
 name:'Hunter', icon:'🏹', color:'var(--hunter-col, )', borderRGB:'106,155,58',
 desc:'A ranged marksman with a pet companion. Fires arcane and physical shots from range, lays traps, and uses Aspects to adapt their playstyle. Pet abilities deal bonus damage and unlock unique combo effects.',
 baseHP:28, mechanic:'Aspects & Pets',
 mechanicDesc:'Aspect cards grant passive bonuses while active. Pet cards summon a companion that boosts Kill Command and other abilities. Traps set up powerful conditional triggers on enemies.',
 playstyle:'Ranged / Tactical', strengths:'Ranged damage, traps, pet synergy, Aspects', weaknesses:'Less effective in melee range',
 },
 Priest: {
 name:'Priest', icon:'✨', color:'var(--priest-col, )', borderRGB:'220,200,248',
 desc:'A divine healer and shadow caster. Holy abilities heal and shield allies while Shadow abilities deal ongoing damage and corrupt enemies. Dual-path class that can output heavy healing or surprising damage.',
 baseHP:22, mechanic:'Holy & Shadow',
 mechanicDesc:'Holy cards heal, shield, and buff. Shadow cards apply Devouring Plague and Shadow Word: Pain for DoT damage. Switching between paths mid-combat gives powerful situational answers.',
 playstyle:'Support / DoT', strengths:'Healing, shielding, Shadow DoTs, Resurrect', weaknesses:'Lowest HP among support classes',
 },
 Warlock: {
 name:'Warlock', icon:'💀', color:'var(--warlock-col, )', borderRGB:'106,58,139',
 desc:'A dark spellcaster commanding demonic power and soul magic. Applies Corruption and Curses for ongoing damage, drains life to sustain themselves, and summons demons to fight alongside them.',
 baseHP:24, mechanic:'Demons & DoTs',
 mechanicDesc:'Affliction cards apply Corruption, Curses, and Devouring debuffs. Demonology cards summon pets (Imp, Fel Guard, Infernal). Life Tap converts HP to extra plays. Drain Life returns stolen HP.',
 playstyle:'DoT / Drain', strengths:'Stacking DoTs, demon summons, lifedrain sustain', weaknesses:'Damages self to fuel abilities (Life Tap)',
 },
 Shaman: {
 name:'Shaman', icon:'⚡', color:'var(--shaman-col, )', borderRGB:'58,106,203',
 desc:'An elemental commander who harnesses Earth, Fire, Frost, and Enhancement magic. Places Totems for ongoing effects, chains Heal abilities for burst recovery, and switches between elemental forms for different damage types.',
 baseHP:30, mechanic:'Elements & Totems',
 mechanicDesc:'Totem cards apply persistent battlefield effects (healing, damage, buffs). Elemental cards cycle between Earth (control), Fire (damage), and Frost (slow). Enhancement cards boost melee and self-buff.',
 playstyle:'Elemental / Hybrid', strengths:'Totem versatility, chain heals, elemental variety', weaknesses:'Must plan Totem placement carefully',
 },
 TimeWalker: {
 name:'Time Walker', icon:'⏳', color:'var(--timewalker-col, )', borderRGB:'139,58,203',
 desc:'A mysterious chronoarcane manipulator who bends time itself. Saves rolls for later, rewinds turns, slows enemies, and detonates time bombs. Highly technical class with the most complex decision points in the game.',
 baseHP:22, mechanic:'Time Manipulation',
 mechanicDesc:'Many Time Walker cards let you save effects, rolls, or plays for future turns. Time bombs build up and detonate for massive damage. Rewind and Chronoshift can replay or undo effects. Blink ignores miss results.',
 playstyle:'Control / Tempo', strengths:'Roll manipulation, time bombs, rewind effects, Blink', weaknesses:'Lowest HP, highly situational cards',
 },
 Warrior: {
 name:'Warrior', icon:'⚔️', color:'var(--warrior-col, )', borderRGB:'200,118,42',
 desc:'A powerful melee fighter who channels Rage to fuel devastating attacks. Switches between Battle, Fury, and Defensive Stances to control, deal damage, or protect. High HP and relentless offensive pressure.',
 baseHP:35, mechanic:'Rage & Stances',
 mechanicDesc:'Many Warrior abilities generate Rage. Stances shift your combat role: Battle Stance for damage, Berserker for fury, Defensive for protection. High HP makes you the toughest fighter in the field.',
 playstyle:'Aggressive / Tanky', strengths:'Highest HP, relentless melee, stance versatility', weaknesses:'Limited ranged or healing options',
 },
 Hunter: {
 name:'Hunter', icon:'🏹', color:'var(--hunter-col, )', borderRGB:'106,155,58',
 desc:'A ranged marksman with a pet companion. Fires arcane and physical shots from range, lays traps, and uses Aspects to adapt playstyle. Pet abilities deal bonus damage and unlock unique combo effects.',
 baseHP:28, mechanic:'Aspects & Pets',
 mechanicDesc:'Aspect cards grant passive bonuses while active. Pet cards summon a companion that boosts Kill Command. Traps set up powerful conditional triggers. Serpent Sting and other shots apply damage-over-time.',
 playstyle:'Ranged / Tactical', strengths:'Ranged damage, traps, pet synergy, Aspects', weaknesses:'Less effective in melee range',
 },
 Priest: {
 name:'Priest', icon:'✨', color:'var(--priest-col, )', borderRGB:'220,200,248',
 desc:'A divine healer and shadow caster. Holy abilities heal and shield while Shadow abilities deal ongoing damage. Dual-path class that can output heavy healing or surprising shadow damage.',
 baseHP:22, mechanic:'Holy & Shadow',
 mechanicDesc:'Holy cards heal, shield, and buff. Shadow cards apply Devouring Plague and Shadow Word: Pain for DoT damage. Penance and Mind Flay deal sustained damage. Resurrect can revive after a death.',
 playstyle:'Support / DoT', strengths:'Healing, shielding, Shadow DoTs, Resurrect', weaknesses:'Low HP — avoid taking direct hits',
 },
 Warlock: {
 name:'Warlock', icon:'💀', color:'var(--warlock-col, )', borderRGB:'106,58,139',
 desc:'A dark spellcaster commanding demonic power and soul magic. Applies Corruption and Curses for ongoing damage, drains life to sustain, and summons demons as allies.',
 baseHP:24, mechanic:'Demons & DoTs',
 mechanicDesc:'Affliction cards apply Corruption, Curses, and debuffs. Demonology summons pets (Imp, Fel Guard, Infernal). Life Tap spends HP for extra plays. Drain Life returns stolen HP to you.',
 playstyle:'DoT / Drain', strengths:'Stacking DoTs, demon summons, lifedrain sustain', weaknesses:'Life Tap drains your own HP to fuel abilities',
 },
 Shaman: {
 name:'Shaman', icon:'⚡', color:'var(--shaman-col, )', borderRGB:'58,106,203',
 desc:'An elemental commander who harnesses Earth, Fire, Frost, and Enhancement magic. Places Totems for ongoing effects, chains heals for burst recovery, and cycles through elemental forms.',
 baseHP:30, mechanic:'Elements & Totems',
 mechanicDesc:'Totem cards apply persistent battlefield effects (healing, damage, buffs). Elemental cards switch between Earth (control), Fire (damage), and Frost (slow). Enhancement cards boost melee and self-buff.',
 playstyle:'Elemental / Hybrid', strengths:'Totem versatility, chain heals, elemental variety', weaknesses:'Must plan Totem placement carefully',
 },
 TimeWalker: {
 name:'Time Walker', icon:'⏳', color:'var(--timewalker-col, )', borderRGB:'139,58,203',
 desc:'A mysterious chronoarcane manipulator who bends time itself. Saves rolls for later, rewinds turns, slows enemies, and detonates time bombs. The most technical class in the game.',
 baseHP:22, mechanic:'Time Manipulation',
 mechanicDesc:'Time Walker cards let you save effects, rolls, or plays for future turns. Time bombs build up and detonate for massive damage. Rewind and Chronoshift can replay or undo effects. Blink ignores miss results.',
 playstyle:'Control / Tempo', strengths:'Roll manipulation, time bombs, rewind effects, Blink', weaknesses:'Lowest HP, highly situational cards',
 },
};
// ── CLASS-SPECIFIC ARSENAL UPGRADES (generated per class) ────────
Object.keys(CLASSES).forEach(cls=>{
 const k=cls.toLowerCase().replace(/\s/g,'');
 LEGACY_UPGRADES.push(
  { id:`lg_arsenal2_${k}`, name:"Veteran's Arsenal", icon:'📦', cost:50, maxLevel:1, class:cls,
    desc:()=>'Opening draft includes Tier II cards',
    apply:(c,lvl)=>{ c._draftMaxTier=Math.max(c._draftMaxTier||1,2); } },
  { id:`lg_arsenal3_${k}`, name:"Master's Arsenal", icon:'💎', cost:100, maxLevel:1, class:cls, requires:`lg_arsenal2_${k}`,
    desc:()=>'Opening draft includes Tier III cards',
    apply:(c,lvl)=>{ c._draftMaxTier=Math.max(c._draftMaxTier||1,3); } },
  { id:`lg_arsenal4_${k}`, name:"Legend's Arsenal", icon:'👑', cost:200, maxLevel:1, class:cls, requires:`lg_arsenal3_${k}`,
    desc:()=>'Opening draft includes Tier IV cards',
    apply:(c,lvl)=>{ c._draftMaxTier=Math.max(c._draftMaxTier||1,4); } }
 );
});

const ALL_PERKS = [
 { id:'tough', icon:'❤️', name:'Hardened', desc:'+8 Maximum HP',
 apply:(c)=>{ c.maxHP+=8; c.hp=Math.min(c.hp+8,c.maxHP); } },
 { id:'quickdraw', icon:'🃏', name:'Quick Draw', desc:'Draw 1 extra card per turn in combat',
 apply:(c)=>{ c.extraDraw=(c.extraDraw||0)+1; } },
 { id:'lucky', icon:'🍀', name:'Lucky', desc:'+2 bonus to all dice rolls',
 apply:(c)=>{ c.rollBonus=(c.rollBonus||0)+2; } },
 { id:'crusher', icon:'💪', name:'Crusher', desc:'+1 damage on all abilities',
 apply:(c)=>{ c.dmgBonus=(c.dmgBonus||0)+1; c._perkDmgBonus=(c._perkDmgBonus||0)+1; } },
 { id:'survivor', icon:'🏕️', name:'Survivor', desc:'Start each combat with +5 HP heal',
 apply:(c)=>{ c.healOnCombatStart=(c.healOnCombatStart||0)+5; } },
 { id:'scavenger', icon:'💰', name:'Scavenger', desc:'+15 gold after each battle',
 apply:(c)=>{ c.goldBonus=(c.goldBonus||0)+15; } },
 { id:'critvision', icon:'🎯', name:'Critical Eye', desc:'Critical hits on rolls of 18 or higher',
 apply:(c)=>{ c.critThreshold=18; } },
 { id:'resilient', icon:'🛡️', name:'Resilient', desc:'Reduce all incoming damage by 1 (min 1)',
 apply:(c)=>{ c.dmgReduction=(c.dmgReduction||0)+1; } },
 { id:'swift', icon:'⚡', name:'Swiftness', desc:'-1 required on all rolls to succeed',
 apply:(c)=>{ c.rollBonus=(c.rollBonus||0)+1; } },
];
// ── EQUIPMENT SHOP ────────────────────────────────────────────────
const EQUIPMENT_SHOP = [
 // ── WEAPONS ──────────────────────────────────────────────────
 { id:'eq_dagger', slot:'weapon', name:'Sharpened Dagger', icon:'🗡️', cost:40,
 desc:'+2 melee damage.',
 stats:{ dmgMelee:2 },
 apply:(c)=>{ c._eqDmgMelee=(c._eqDmgMelee||0)+2; } },
 { id:'eq_sword', slot:'weapon', name:'Runed Shortsword', icon:'⚔️', cost:70,
 desc:'+3 melee damage. +1 to all rolls.',
 stats:{ dmgMelee:3, roll:1 },
 apply:(c)=>{ c._eqDmgMelee=(c._eqDmgMelee||0)+3; c._eqRoll=(c._eqRoll||0)+1; } },
 { id:'eq_staff', slot:'weapon', name:"Conjurer's Staff", icon:'🪄', cost:60,
 desc:'+2 arcane damage. Next magic ability auto-succeeds once per combat.',
 stats:{ dmgArcane:2 },
 apply:(c)=>{ c._eqDmgArcane=(c._eqDmgArcane||0)+2; c._eqMagicAutoHit=true; } },
 { id:'eq_axe', slot:'weapon', name:'Brutish Hand Axe', icon:'🪓', cost:55,
 desc:'+4 melee damage. -1 to all rolls (heavy but powerful).',
 stats:{ dmgMelee:4, roll:-1 },
 apply:(c)=>{ c._eqDmgMelee=(c._eqDmgMelee||0)+4; c._eqRoll=(c._eqRoll||0)-1; } },

 // ── OFF-HAND ──────────────────────────────────────────────────
 { id:'eq_shield', slot:'offhand', name:'Battered Buckler', icon:'🛡️', cost:45,
 desc:'Reduce all incoming damage by 1.',
 stats:{ armor:1 },
 apply:(c)=>{ c._eqArmor=(c._eqArmor||0)+1; } },
 { id:'eq_tome', slot:'offhand', name:'Weathered Tome', icon:'📖', cost:50,
 desc:'Draw 1 extra card per turn.',
 stats:{ draw:1 },
 apply:(c)=>{ c._eqDraw=(c._eqDraw||0)+1; } },
 { id:'eq_orb', slot:'offhand', name:'Arcane Orb', icon:'🔮', cost:65,
 desc:'+1 to all rolls. +5 max HP. Hums with latent power.',
 stats:{ roll:1, hp:5 },
 apply:(c)=>{ c._eqRoll=(c._eqRoll||0)+1; c.maxHP=(c.maxHP||20)+5; c.hp=Math.min(c.hp+5,c.maxHP); } },
 { id:'eq_knife', slot:'offhand', name:'Poisoned Kris', icon:'🗡️', cost:55,
 desc:'+1 melee damage. Melee attacks apply 1 Poison stack.',
 stats:{ dmgMelee:1 },
 apply:(c)=>{ c._eqDmgMelee=(c._eqDmgMelee||0)+1; c._eqPoisonOnMelee=true; } },

 // ── ARMOR ─────────────────────────────────────────────────────
 { id:'eq_leather', slot:'armor', name:'Studded Leather', icon:'🧥', cost:50,
 desc:'+8 max HP.',
 stats:{ hp:8 },
 apply:(c)=>{ c.maxHP=(c.maxHP||20)+8; c.hp=Math.min(c.hp+8,c.maxHP); } },
 { id:'eq_chain', slot:'armor', name:'Chainmail Vest', icon:'⛓️', cost:75,
 desc:'+12 max HP. Reduce damage by 1.',
 stats:{ hp:12, armor:1 },
 apply:(c)=>{ c.maxHP=(c.maxHP||20)+12; c.hp=Math.min(c.hp+12,c.maxHP); c._eqArmor=(c._eqArmor||0)+1; } },
 { id:'eq_cloak', slot:'armor', name:'Shadow Cloak', icon:'🧣', cost:60,
 desc:'+5 max HP. Start each combat in Stealth.',
 stats:{ hp:5 },
 apply:(c)=>{ c.maxHP=(c.maxHP||20)+5; c.hp=Math.min(c.hp+5,c.maxHP); c._eqStartStealth=true; } },

 // ── TRINKETS ──────────────────────────────────────────────────
 { id:'eq_lucky', slot:'trinket', name:'Lucky Coin', icon:'🪙', cost:40,
 desc:'Crit threshold reduced by 1 (crits on 19+).',
 stats:{ crit:'-1' },
 apply:(c)=>{ c.critThreshold=Math.max(15,(c.critThreshold||20)-1); } },
 { id:'eq_focus', slot:'trinket', name:'Focus Crystal', icon:'💎', cost:65,
 desc:'+1 to all rolls. Crit threshold reduced by 1.',
 stats:{ roll:1, crit:'-1' },
 apply:(c)=>{ c._eqRoll=(c._eqRoll||0)+1; c.critThreshold=Math.max(15,(c.critThreshold||20)-1); } },
 { id:'eq_flask', slot:'trinket', name:'Flask of Vigor', icon:'🧪', cost:55,
 desc:'Heal 3 HP at the start of each combat.',
 stats:{},
 apply:(c)=>{ c.healOnCombatStart=(c.healOnCombatStart||0)+3; } },
 { id:'eq_emblem', slot:'trinket', name:'Defias Emblem', icon:'🏅', cost:50,
 desc:'+10 gold earned from all sources.',
 stats:{},
 apply:(c)=>{ c.goldBonus=(c.goldBonus||0)+10; } },

 // ── TYPED DAMAGE WEAPONS ──────────────────────────────────────
 { id:'eq_emberrod', slot:'weapon', name:'Ember Rod', icon:'🔥', cost:65,
 desc:'+3 fire damage.',
 stats:{ dmgFire:3 },
 apply:(c)=>{ c._eqDmgFire=(c._eqDmgFire||0)+3; } },
 { id:'eq_frost_blade', slot:'weapon', name:'Frostforged Blade', icon:'❄️', cost:65,
 desc:'+3 frost damage.',
 stats:{ dmgFrost:3 },
 apply:(c)=>{ c._eqDmgFrost=(c._eqDmgFrost||0)+3; } },
 { id:'eq_hunters_bow', slot:'weapon', name:"Marksman's Longbow", icon:'🏹', cost:70,
 desc:'+4 ranged damage. -1 to all rolls (heavy draw weight).',
 stats:{ dmgRanged:4, roll:-1 },
 apply:(c)=>{ c._eqDmgRanged=(c._eqDmgRanged||0)+4; c._eqRoll=(c._eqRoll||0)-1; } },

 // ── TYPED DAMAGE OFF-HANDS ────────────────────────────────────
 { id:'eq_shadow_sigil', slot:'offhand', name:'Shadow Sigil', icon:'🌑', cost:60,
 desc:'+2 shadow damage. +5 max HP.',
 stats:{ dmgShadow:2, hp:5 },
 apply:(c)=>{ c._eqDmgShadow=(c._eqDmgShadow||0)+2; c.maxHP=(c.maxHP||20)+5; c.hp=Math.min(c.hp+5,c.maxHP); } },
 { id:'eq_nature_focus', slot:'offhand', name:'Nature Focus', icon:'🌿', cost:60,
 desc:'+2 nature damage. +1 to all rolls.',
 stats:{ dmgNature:2, roll:1 },
 apply:(c)=>{ c._eqDmgNature=(c._eqDmgNature||0)+2; c._eqRoll=(c._eqRoll||0)+1; } },
 { id:'eq_magic_weave', slot:'offhand', name:'Magic-Weave Talisman', icon:'🌀', cost:70,
 desc:'+1 to all magic damage (fire, frost, nature, arcane, shadow, holy).',
 stats:{ dmgMagic:1 },
 apply:(c)=>{ c._eqDmgMagic=(c._eqDmgMagic||0)+1; } },

 // ── TYPED DAMAGE ARMOR ────────────────────────────────────────
 { id:'eq_mage_robes', slot:'armor', name:'Archmage Robes', icon:'🧙', cost:85,
 desc:'+2 to all magic damage. +5 max HP.',
 stats:{ dmgMagic:2, hp:5 },
 apply:(c)=>{ c._eqDmgMagic=(c._eqDmgMagic||0)+2; c.maxHP=(c.maxHP||20)+5; c.hp=Math.min(c.hp+5,c.maxHP); } },
 { id:'eq_holy_vestment', slot:'armor', name:'Holy Vestment', icon:'✨', cost:65,
 desc:'+8 max HP. +2 holy damage.',
 stats:{ hp:8, dmgHoly:2 },
 apply:(c)=>{ c.maxHP=(c.maxHP||20)+8; c.hp=Math.min(c.hp+8,c.maxHP); c._eqDmgHoly=(c._eqDmgHoly||0)+2; } },

 // ── TYPED DAMAGE TRINKETS ─────────────────────────────────────
 { id:'eq_arcane_focus', slot:'trinket', name:'Arcane Focus Stone', icon:'🔮', cost:70,
 desc:'+2 arcane damage. Crit threshold -1.',
 stats:{ dmgArcane:2, crit:'-1' },
 apply:(c)=>{ c._eqDmgArcane=(c._eqDmgArcane||0)+2; c.critThreshold=Math.max(15,(c.critThreshold||20)-1); } },
 { id:'eq_void_shard', slot:'trinket', name:'Void Shard', icon:'🕳️', cost:65,
 desc:'+2 shadow damage. +5 max HP.',
 stats:{ dmgShadow:2, hp:5 },
 apply:(c)=>{ c._eqDmgShadow=(c._eqDmgShadow||0)+2; c.maxHP=(c.maxHP||20)+5; c.hp=Math.min(c.hp+5,c.maxHP); } },
];

// ── RARITY ────────────────────────────────────────────────────────
const RARITY = {
 uncommon: { label:'Uncommon', color:'#4ec94e', border:'rgba(78,201,78,0.6)',  glow:'rgba(78,201,78,0.2)'  },
 rare:     { label:'Rare',     color:'#4da6ff', border:'rgba(77,166,255,0.6)', glow:'rgba(77,166,255,0.2)' },
 epic:     { label:'Epic',     color:'#c060f0', border:'rgba(192,96,240,0.6)', glow:'rgba(192,96,240,0.2)' },
 legendary:{ label:'Legendary',color:'#ffaa22', border:'rgba(255,170,34,0.8)', glow:'rgba(255,170,34,0.3)' },
};

// ── BOSS LOOT ─────────────────────────────────────────────────────
// Each boss drops one item of each slot type. bossLoot:true keeps them out of gold/LP shops.
const BOSS_LOOT = {
 minerJohn: [
  { id:'bl_miners_pick', slot:'weapon', name:"Miner's Pick", icon:'⛏️', bossLoot:true, rarity:'uncommon', cost:0,
   desc:'+3 melee damage. 5% chance to stun target on crit.',
   stats:{dmgMelee:3,critStunChance:5}, apply:(c)=>{ c._eqDmgMelee=(c._eqDmgMelee||0)+3; c._critStunChance=(c._critStunChance||0)+5; } },
  { id:'bl_miners_lantern', slot:'offhand', name:"Miner's Lantern", icon:'🪔', bossLoot:true, rarity:'uncommon', cost:0,
   desc:'+1 to all rolls. The flickering light steadies your aim.',
   stats:{roll:1}, apply:(c)=>{ c._eqRoll=(c._eqRoll||0)+1; } },
  { id:'bl_miners_harness', slot:'armor', name:"Miner's Harness", icon:'🧥', bossLoot:true, rarity:'uncommon', cost:0,
   desc:'+7 max HP. Reduce incoming damage by 1.',
   stats:{hp:7,armor:1}, apply:(c)=>{ c.maxHP=(c.maxHP||20)+7; c.hp=Math.min(c.hp+7,c.maxHP); c._eqArmor=(c._eqArmor||0)+1; } },
  { id:'bl_iron_ore', slot:'trinket', name:'Iron Ore Chunk', icon:'🪨', bossLoot:true, rarity:'uncommon', cost:0,
   desc:'+2 melee damage. Earn +5 bonus gold after each combat.',
   stats:{dmgMelee:2}, apply:(c)=>{ c._eqDmgMelee=(c._eqDmgMelee||0)+2; c.goldBonus=(c.goldBonus||0)+5; } },
 ],
 sneed: [
  { id:'bl_taskmasters_whip', slot:'weapon', name:"Taskmaster's Whip", icon:'🪢', bossLoot:true, rarity:'uncommon', cost:0,
   desc:'+2 melee damage. Draw 1 extra card at the start of each turn.',
   stats:{dmgMelee:2,draw:1}, apply:(c)=>{ c._eqDmgMelee=(c._eqDmgMelee||0)+2; c._eqDraw=(c._eqDraw||0)+1; } },
  { id:'bl_defias_ledger', slot:'offhand', name:"Defias Ledger", icon:'📋', bossLoot:true, rarity:'uncommon', cost:0,
   desc:'+1 card draw per turn. +1 to all rolls.',
   stats:{draw:1,roll:1}, apply:(c)=>{ c._eqDraw=(c._eqDraw||0)+1; c._eqRoll=(c._eqRoll||0)+1; } },
  { id:'bl_defias_gambeson', slot:'armor', name:"Defias Gambeson", icon:'🧥', bossLoot:true, rarity:'uncommon', cost:0,
   desc:'+8 max HP. Standard Defias issue, but it works.',
   stats:{hp:8}, apply:(c)=>{ c.maxHP=(c.maxHP||20)+8; c.hp=Math.min(c.hp+8,c.maxHP); } },
  { id:'bl_overseers_coin', slot:'trinket', name:"Overseer's Coin", icon:'🪙', bossLoot:true, rarity:'uncommon', cost:0,
   desc:'+10 bonus gold earned from all sources.',
   stats:{}, apply:(c)=>{ c.goldBonus=(c.goldBonus||0)+10; } },
 ],
 rhahkZor: [
  { id:'bl_gnomish_tool', slot:'weapon', name:"Gnomish Multi-Tool", icon:'🔧', bossLoot:true, rarity:'rare', cost:0,
   desc:'+2 melee damage. +1 to all rolls. A surprisingly versatile weapon.',
   stats:{dmgMelee:2,roll:1}, apply:(c)=>{ c._eqDmgMelee=(c._eqDmgMelee||0)+2; c._eqRoll=(c._eqRoll||0)+1; } },
  { id:'bl_goblin_guard', slot:'offhand', name:"Goblin's Guard", icon:'🛡️', bossLoot:true, rarity:'rare', cost:0,
   desc:'Reduce all incoming damage by 2.',
   stats:{armor:2}, apply:(c)=>{ c._eqArmor=(c._eqArmor||0)+2; } },
  { id:'bl_shredder_plate', slot:'armor', name:"Shredder Plate", icon:'⚙️', bossLoot:true, rarity:'rare', cost:0,
   desc:'+10 max HP. Reduce incoming damage by 1.',
   stats:{hp:10,armor:1}, apply:(c)=>{ c.maxHP=(c.maxHP||20)+10; c.hp=Math.min(c.hp+10,c.maxHP); c._eqArmor=(c._eqArmor||0)+1; } },
  { id:'bl_bruiser_knuckle', slot:'trinket', name:"Rhahk'Zor's Knuckle", icon:'👊', bossLoot:true, rarity:'rare', cost:0,
   desc:'+2 melee damage. Critical hits deal an extra 3 bonus damage.',
   stats:{dmgMelee:2}, apply:(c)=>{ c._eqDmgMelee=(c._eqDmgMelee||0)+2; c._critBonusDmg=(c._critBonusDmg||0)+3; } },
 ],
 sneedShredder: [
  { id:'bl_shredder_claw', slot:'weapon', name:'Shredder Claw', icon:'⚙️', bossLoot:true, rarity:'rare', cost:0,
   desc:'+4 melee damage. Crits deal +4 additional bonus damage.',
   stats:{dmgMelee:4}, apply:(c)=>{ c._eqDmgMelee=(c._eqDmgMelee||0)+4; c._critBonusDmg=(c._critBonusDmg||0)+4; } },
  { id:'bl_shredder_shield', slot:'offhand', name:"Shredder Shield", icon:'🛡️', bossLoot:true, rarity:'rare', cost:0,
   desc:'Reduce all incoming damage by 2. +4 max HP.',
   stats:{armor:2,hp:4}, apply:(c)=>{ c._eqArmor=(c._eqArmor||0)+2; c.maxHP=(c.maxHP||20)+4; c.hp=Math.min(c.hp+4,c.maxHP); } },
  { id:'bl_shredder_exo', slot:'armor', name:"Shredder Exoskeleton", icon:'🤖', bossLoot:true, rarity:'rare', cost:0,
   desc:'+14 max HP. Forged from salvaged gnomish parts.',
   stats:{hp:14}, apply:(c)=>{ c.maxHP=(c.maxHP||20)+14; c.hp=Math.min(c.hp+14,c.maxHP); } },
  { id:'bl_grinding_gear', slot:'trinket', name:"Grinding Gear", icon:'⚙️', bossLoot:true, rarity:'rare', cost:0,
   desc:'+2 melee damage. AoE abilities deal +1 extra damage per target.',
   stats:{dmgMelee:2}, apply:(c)=>{ c._eqDmgMelee=(c._eqDmgMelee||0)+2; c._aoeDmgBonus=(c._aoeDmgBonus||0)+1; } },
 ],
 gilnid: [
  { id:'bl_smelters_hammer', slot:'weapon', name:"Smelter's Hammer", icon:'🔨', bossLoot:true, rarity:'rare', cost:0,
   desc:'+3 fire damage. Forged in Gilnid\'s furnace.',
   stats:{dmgFire:3}, apply:(c)=>{ c._eqDmgFire=(c._eqDmgFire||0)+3; } },
  { id:'bl_gilnid_crucible', slot:'offhand', name:"Gilnid's Crucible", icon:'🔥', bossLoot:true, rarity:'rare', cost:0,
   desc:'+1 to all rolls. AoE abilities deal +1 extra damage per target.',
   stats:{roll:1}, apply:(c)=>{ c._eqRoll=(c._eqRoll||0)+1; c._aoeDmgBonus=(c._aoeDmgBonus||0)+1; } },
  { id:'bl_smelters_apron', slot:'armor', name:"Smelter's Apron", icon:'🧥', bossLoot:true, rarity:'rare', cost:0,
   desc:'+10 max HP. Reduce all incoming damage by 1.',
   stats:{hp:10,armor:1}, apply:(c)=>{ c.maxHP=(c.maxHP||20)+10; c.hp=Math.min(c.hp+10,c.maxHP); c._eqArmor=(c._eqArmor||0)+1; } },
  { id:'bl_blast_charge', slot:'trinket', name:'Blast Charge', icon:'💣', bossLoot:true, rarity:'rare', cost:0,
   desc:'+2 fire damage. AoE abilities deal +1 extra damage to each target.',
   stats:{dmgFire:2}, apply:(c)=>{ c._eqDmgFire=(c._eqDmgFire||0)+2; c._aoeDmgBonus=(c._aoeDmgBonus||0)+1; } },
 ],
 cookie: [
  { id:'bl_cookie_cleaver', slot:'weapon', name:"Cookie's Cleaver", icon:'🔪', bossLoot:true, rarity:'rare', cost:0,
   desc:'+3 melee damage. A well-seasoned blade.',
   stats:{dmgMelee:3}, apply:(c)=>{ c._eqDmgMelee=(c._eqDmgMelee||0)+3; } },
  { id:'bl_serving_platter', slot:'offhand', name:"Serving Platter", icon:'🍽️', bossLoot:true, rarity:'rare', cost:0,
   desc:'+5 max HP. Heal 2 HP at the start of each combat.',
   stats:{hp:5}, apply:(c)=>{ c.maxHP=(c.maxHP||20)+5; c.hp=Math.min(c.hp+5,c.maxHP); c.healOnCombatStart=(c.healOnCombatStart||0)+2; } },
  { id:'bl_chef_garb', slot:'armor', name:"Chef's Garb", icon:'🧥', bossLoot:true, rarity:'rare', cost:0,
   desc:'+8 max HP. +1 to all rolls.',
   stats:{hp:8,roll:1}, apply:(c)=>{ c.maxHP=(c.maxHP||20)+8; c.hp=Math.min(c.hp+8,c.maxHP); c._eqRoll=(c._eqRoll||0)+1; } },
  { id:'bl_secret_recipe', slot:'trinket', name:"Cookie's Secret Recipe", icon:'🍳', bossLoot:true, rarity:'rare', cost:0,
   desc:'+10 max HP. Restore 3 HP at the start of each combat.',
   stats:{hp:10}, apply:(c)=>{ c.maxHP=(c.maxHP||20)+10; c.hp=Math.min(c.hp+10,c.maxHP); c.healOnCombatStart=(c.healOnCombatStart||0)+3; } },
 ],
 captainGreenskin: [
  { id:'bl_pirate_cutlass', slot:'weapon', name:"Pirate Cutlass", icon:'⚓', bossLoot:true, rarity:'rare', cost:0,
   desc:'+3 melee damage. +1 to all combat rolls.',
   stats:{dmgMelee:3,roll:1}, apply:(c)=>{ c._eqDmgMelee=(c._eqDmgMelee||0)+3; c._eqRoll=(c._eqRoll||0)+1; } },
  { id:'bl_buccaneer_shield', slot:'offhand', name:"Buccaneer's Shield", icon:'🛡️', bossLoot:true, rarity:'rare', cost:0,
   desc:'Reduce all incoming damage by 2.',
   stats:{armor:2}, apply:(c)=>{ c._eqArmor=(c._eqArmor||0)+2; } },
  { id:'bl_pirates_coat', slot:'armor', name:"Pirate's Coat", icon:'🧥', bossLoot:true, rarity:'rare', cost:0,
   desc:'+8 max HP. Poison effects deal 1 less damage to you.',
   stats:{hp:8}, apply:(c)=>{ c.maxHP=(c.maxHP||20)+8; c.hp=Math.min(c.hp+8,c.maxHP); c._poisonResist=(c._poisonResist||0)+1; } },
  { id:'bl_captains_compass', slot:'trinket', name:"Captain's Compass", icon:'🧭', bossLoot:true, rarity:'rare', cost:0,
   desc:'+1 to all combat rolls. Poison effects deal 1 less damage to you.',
   stats:{roll:1}, apply:(c)=>{ c._eqRoll=(c._eqRoll||0)+1; c._poisonResist=(c._poisonResist||0)+1; } },
 ],
 mrSmite: [
  { id:'bl_smites_cutlass', slot:'weapon', name:"Smite's Cutlass", icon:'⚓', bossLoot:true, rarity:'epic', cost:0,
   desc:'+3 melee damage. +1 to all combat rolls. Forged from the iron of a thousand battles.',
   stats:{dmgMelee:3,roll:1}, apply:(c)=>{ c._eqDmgMelee=(c._eqDmgMelee||0)+3; c._eqRoll=(c._eqRoll||0)+1; } },
  { id:'bl_bulwark_smite', slot:'offhand', name:"Bulwark of Smite", icon:'🛡️', bossLoot:true, rarity:'epic', cost:0,
   desc:'Reduce all incoming damage by 3.',
   stats:{armor:3}, apply:(c)=>{ c._eqArmor=(c._eqArmor||0)+3; } },
  { id:'bl_smites_chestguard', slot:'armor', name:"Smite's Chestguard", icon:'⚔️', bossLoot:true, rarity:'epic', cost:0,
   desc:'+14 max HP. Reduce incoming damage by 1.',
   stats:{hp:14,armor:1}, apply:(c)=>{ c.maxHP=(c.maxHP||20)+14; c.hp=Math.min(c.hp+14,c.maxHP); c._eqArmor=(c._eqArmor||0)+1; } },
  { id:'bl_smites_charm', slot:'trinket', name:"Smite's Lucky Charm", icon:'🍀', bossLoot:true, rarity:'epic', cost:0,
   desc:'Crit threshold reduced by 2 (crits on 18+).',
   stats:{}, apply:(c)=>{ c.critThreshold=Math.max(15,(c.critThreshold||20)-2); c._eqCritThresh=(c._eqCritThresh||0)-2; } },
 ],
 edwinVanCleef: [
  { id:'bl_vanCleef_blade', slot:'weapon', name:"VanCleef's Blade", icon:'🗡️', bossLoot:true, rarity:'legendary', cost:0,
   desc:'+4 melee damage. Crit threshold reduced by 2. The blade of the Defias Brotherhood.',
   stats:{dmgMelee:4}, apply:(c)=>{ c._eqDmgMelee=(c._eqDmgMelee||0)+4; c.critThreshold=Math.max(15,(c.critThreshold||20)-2); c._eqCritThresh=(c._eqCritThresh||0)-2; } },
  { id:'bl_defias_buckler', slot:'offhand', name:"Defias Buckler", icon:'🛡️', bossLoot:true, rarity:'legendary', cost:0,
   desc:'Reduce all incoming damage by 2. Draw 1 extra card per turn.',
   stats:{armor:2,draw:1}, apply:(c)=>{ c._eqArmor=(c._eqArmor||0)+2; c._eqDraw=(c._eqDraw||0)+1; } },
  { id:'bl_vanCleef_armor', slot:'armor', name:"VanCleef's Armor", icon:'🧥', bossLoot:true, rarity:'legendary', cost:0,
   desc:"+16 max HP. Reduce incoming damage by 1. +1 to all rolls. A legend's protection.",
   stats:{hp:16,armor:1,roll:1}, apply:(c)=>{ c.maxHP=(c.maxHP||20)+16; c.hp=Math.min(c.hp+16,c.maxHP); c._eqArmor=(c._eqArmor||0)+1; c._eqRoll=(c._eqRoll||0)+1; } },
  { id:'bl_brotherhood_signet', slot:'trinket', name:"Brotherhood Signet", icon:'💍', bossLoot:true, rarity:'legendary', cost:0,
   desc:'+3 to all damage types. Crit threshold -1. +1 to all rolls. The mark of the Brotherhood.',
   stats:{dmgAll:3,roll:1}, apply:(c)=>{ c._eqDmgAll=(c._eqDmgAll||0)+3; c.critThreshold=Math.max(15,(c.critThreshold||20)-1); c._eqCritThresh=(c._eqCritThresh||0)-1; c._eqRoll=(c._eqRoll||0)+1; } },
 ],
};

const SHOP = [
 { id:'healpotion', name:'Healing Potion', cost:20, icon:'🧪', desc:'Restore 12 HP. Use from inventory during combat.',
 use:(c)=>{ c.hp=Math.min(c.maxHP,c.hp+12); return 'Restored 12 HP!'; } },
 { id:'mana_agate_item', name:'Mana Agate', cost:0, conjured:true, icon:'💎', desc:'Roll d20 and save the result for any roll this combat.',
 use:(c)=>{ const r=Math.ceil(Math.random()*20); C._savedRoll=r; return `Rolled ${r} — saved for your next roll!`; } },
 { id:'conjure_food_item', name:'Conjure Food', cost:0, conjured:true, icon:'🍖', desc:'Roll d20 — heal HP equal to roll ÷ 3 (rounded up).',
 use:(c)=>{ const r=Math.ceil(Math.random()*20); const heal=Math.ceil(r/3); const old=c.hp; c.hp=Math.min(c.maxHP,c.hp+heal); return `Rolled ${r} — healed ${c.hp-old} HP!`; } },
 { id:'conjure_water_item', name:'Conjure Water', cost:0, conjured:true, icon:'🫙', desc:'Roll d20 — draw extra cards next turn (roll ÷ 5, rounded up).',
 use:(c)=>{ const r=Math.ceil(Math.random()*20); const draws=Math.ceil(r/5); C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+draws; return `Rolled ${r} — draw ${draws} extra card${draws!==1?'s':''} next turn!`; } },
 { id:'greaterpotion',name:'Greater Potion', cost:40, icon:'🍶', desc:'Restore 25 HP. Use from inventory during combat.',
 use:(c)=>{ c.hp=Math.min(c.maxHP,c.hp+25); return 'Restored 25 HP!'; } },
 { id:'antidote', name:'Antidote', cost:15, icon:'💊', desc:'Remove all Poison. Use from inventory during combat.',
 use:(c)=>{ c.statusEffects=(c.statusEffects||[]).filter(s=>s.id!=='poison'); return 'All Poison cured!'; } },
 { id:'scrollpower', name:'Scroll of Power', cost:50, icon:'📜', desc:'Your next ability deals double damage. Use during combat.',
 use:(c)=>{ c._nextDoubleDmg=true; return 'Next ability: double damage!'; } },
 { id:'luckycharm', name:'Lucky Charm', cost:35, icon:'🍀', desc:'+3 to your next 3 dice rolls. Use during combat.',
 use:(c)=>{ c._luckCharges=(c._luckCharges||0)+3; return '+3 to next 3 rolls!'; } },
 { id:'sharpeningstone', name:'Sharpening Stone', cost:25, icon:'🗡️', desc:'+2 damage to your next attack. Use during combat.',
 use:(c)=>{ c._nextMeleeDmgBonus=(c._nextMeleeDmgBonus||0)+2; return '+2 damage on next attack!'; } },
 { id:'smokebomb', name:'Smoke Bomb', cost:30, icon:'💨', desc:'Gain Stealth immediately. Use during combat.',
 use:(c)=>{ c.statusEffects=c.statusEffects||[]; c.statusEffects.push({id:'stealth',stacks:1}); return 'Gained Stealth!'; } },
];
const CARD_TALENTS = {
  'Backstab':'Assassination',
  'Sinister Strike':'Combat',
  'Cheap Shot':'Combat',
  'Deadly Poison':'Assassination',
  'Marked for Death':'Assassination',
  'Sprint':'Combat',
  'Pick Pocket':'Subtlety',
  'Gouge':'Combat',
  "Slice 'n Dice":"Combat",
  'Obfuscate':'Subtlety',
  'Shiv':'Subtlety',
  'Roll the Bones':'Assassination',
  'Rupture':'Assassination',
  'Coup de Grâce':'Assassination',
  'Stealth':'Subtlety',
  'Ambush':'Subtlety',
  'Way Lay':'Combat',
  'Mutilate':'Assassination',
  'Fan of Knives':'Combat',
  'Premeditation':'Subtlety',
  'Killing Spree':'Combat',
  'Cloak of Shadows':'Subtlety',
  'Cloak Of Shadows':'Subtlety',
  'Preparation':'Subtlety',
  'Vanish':'Subtlety',
  'Blade Flurry':'Combat',
  'Seal Fate':'Assassination',
  'Cold Blood':'Assassination',
  'Vigor':'Combat',
  'Shadow Strike':'Assassination',
  'Master of Shadows':'Subtlety',
  'Adrenaline Rush':'Combat',
  'Adrenaline rush':'Combat',
  'Shadow Step':'Subtlety',
  'Rejuvenation':'Restoration',
  'Rejuvination':'Restoration',
  'Starfire':'Balance',
  'Ferocious Bite':'Feral',
  'Wrath':'Balance',
  'Solar Flare':'Balance',
  'Claw':'Feral',
  'Healing Touch':'Restoration',
  'Lifebloom':'Restoration',
  'Swipe':'Feral',
  'Thorns':'Balance',
  "Nature's Might":"Restoration",
  'Shred':'Feral',
  'Hibernate':'Feral',
  'Maim':'Feral',
  'Savage Roar':'Feral',
  'Shapeshift: Tree of Life':'Restoration',
  'Shapeshift: Cat':'Feral',
  'Shapeshift: Bear':'Feral',
  'Shapeshift: Astral':'Balance',
  'Moonfire':'Balance',
  'Sunfire':'Balance',
  'Ravage':'Feral',
  'Maul':'Feral',
  'Regrowth':'Restoration',
  'Nourish':'Restoration',
  'Overrun':'Restoration',
  'Omen Of Clarity':'Restoration',
  'Bash':'Feral',
  'Rebirth':'Restoration',
  'Pounce':'Feral',
  'Prowl':'Feral',
  "Tiger's Fury":"Feral",
  'Iron Hide':'Feral',
  'Feral Charge':'Feral',
  'Starfall':'Balance',
  'Strangling Roots':'Balance',
  "Nature's Swiftness":"Restoration",
  'Tranquility':'Restoration',
  'Innervate':'Balance',
  'Bearzerk':'Feral',
  'Wild Growth':'Restoration',
  'Force of Nature':'Balance',
  "Gaia's Bounty":"Restoration",
  'Astral Alignment':'Balance',
  'Mangle':'Feral',
  'King of the Jungle':'Feral',
  'Fireball':'Fire',
  'Fire ball':'Fire',
  'Frostbolt':'Ice',
  'Frost bolt':'Ice',
  'Arcane Missiles':'Arcane',
  'Arcane missles':'Arcane',
  'Arcane Explosion':'Arcane',
  'Arcane explosion':'Arcane',
  'Polymorph':'Arcane',
  'Conjure Water':'Arcane',
  'Mana Agate':'Arcane',
  'Conjure Food':'Arcane',
  'Frost Nova':'Ice',
  'Cone of Cold':'Ice',
  'Blast Wave':'Fire',
  'Ice Armor':'Ice',
  'Ice armor':'Ice',
  'Mage Armor':'Arcane',
  'Mage armor':'Arcane',
  'Ice Lance':'Ice',
  'Hot Streak':'Fire',
  'Hot Steak':'Fire',
  'Pyroblast':'Fire',
  'Molten Armor':'Fire',
  'Water Elemental':'Ice',
  'Combustion':'Fire',
  'Blizzard':'Ice',
  'Flamestrike':'Fire',
  'Flame strike':'Fire',
  'Presence of Mind':'Arcane',
  'Presesnce of Mind':'Arcane',
  'Evocation':'Arcane',
  'Dragon’s Breath':'Fire',
  'Arcane Power':'Arcane',
  'Arcane power':'Arcane',
  'Cold Snap':'Ice',
  'Pyroclasm':'Fire',
  'Icy Veins':'Ice',
  'Phoenix Flames':'Fire',
  'Meteor':'Fire',
  'Frozen Orb':'Ice',
  'Arcane Blast':'Arcane',
  'Shatter':'Ice',
  'Slam':'Protection',
  'Heroic Strike':'Arms',
  'Rend':'Fury',
  'Battle Shout':'Arms',
  'Battle Stance':'Arms',
  'Intercept':'Fury',
  'Parry':'Protection',
  'Berserker Stance':'Fury',
  'Defensive Stance':'Protection',
  'Shield Bash':'Protection',
  'Hamstring':'Arms',
  'Pummel':'Fury',
  'Anger Management':'Protection',
  'Counter':'Protection',
  'Shield Wall':'Protection',
  'Shield wall':'Protection',
  'Taunt':'Protection',
  'Cleave':'Arms',
  'Charge':'Arms',
  'Bloodthirst':'Fury',
  'Blood Thirst':'Fury',
  'Devastate':'Protection',
  'Devestate':'Protection',
  'Whirlwind':'Arms',
  'Revenge':'Protection',
  'Onslaught':'Fury',
  'Sweeping Strikes':'Fury',
  'Enrage':'Fury',
  'Mortal Strike':'Arms',
  'Execute':'Fury',
  'Thunder Clap':'Arms',
  'Blade Storm':'Arms',
  'Colossus Smash':'Arms',
  'Maddening Rage':'Fury',
  'Ignore Pain':'Protection',
  'Indomitable':'Protection',
  'Recklessness':'Fury',
  'Die By the Sword':'Arms',
  'Heal':'Holy',
  'Smite':'Holy',
  'Divine Word: Shield':'Discipline',
  'Divine Word: Fortitude':'Discipline',
  'Resurrect':'Holy',
  'Ressurect':'Holy',
  'Shadow Word: Pain':'Shadow',
  'Shadow word: Pain':'Shadow',
  'Mind Control':'Shadow',
  'Divine Word: Empower':'Discipline',
  'Holy Fire':'Holy',
  'Holy Nova':'Holy',
  'Shadow Word: Misery':'Shadow',
  'Shadow Word: Death':'Shadow',
  'Shadow word: Death':'Shadow',
  'Dispersion':'Shadow',
  'Shadow Infusion':'Shadow',
  'Mind Blast':'Shadow',
  'Greater Heal':'Holy',
  'Flash Heal':'Holy',
  'Devouring Plague':'Shadow',
  'Divine Spirit':'Discipline',
  'Desperate Plea':'Holy',
  'Divine Word: Enlighten':'Discipline',
  'Consecration':'Holy',
  'Sins of the Many':'Discipline',
  'Damnation':'Shadow',
  'Summon Shadow Fiend':'Shadow',
  'Evangelism':'Discipline',
  'Penance':'Discipline',
  'Pennance':'Discipline',
  'Black Out':'Shadow',
  'Black out':'Shadow',
  'Inner Fire':'Discipline',
  'Crusader Strike':'Holy',
  'Inner Focus':'Discipline',
  'Lightwell':'Holy',
  'Mind Flay':'Shadow',
  'Noble Sacrifice':'Discipline',
  'Lay on Hands':'Holy',
  'Wrath of God':'Holy',
  'Hells Advocate':'Shadow',
  'Corruption':'Affliction',
  'Curse of Weakness':'Affliction',
  'Shadow Bolt':'Destruction',
  'Immolate':'Destruction',
  'Summon: Imp':'Demonology',
  'Summon: Imp':'Demonology',
  'Create: Health Stone':'Demonology',
  'Create: Mana Stone':'Demonology',
  'Fear':'Affliction',
  'Siphon Life':'Affliction',
  'Searing Pain':'Destruction',
  'Summon: Fel Guard':'Demonology',
  'Summon: Fel Guard':'Demonology',
  'Summon: Fel Hunter':'Demonology',
  'Summon: Fel Hunter':'Demonology',
  'Curse of Agony':'Affliction',
  'Drain Life':'Affliction',
  'Life Tap':'Affliction',
  'Life tap':'Affliction',
  'Create: Soul Stone':'Demonology',
  'Soul Siphon':'Affliction',
  'Fel Armor':'Demonology',
  'Hell Fire':'Destruction',
  'Soul Fire':'Destruction',
  'Implosion':'Destruction',
  'Conflagrate':'Destruction',
  'Death Coil':'Destruction',
  'Summon Void Walker':'Demonology',
  'Summon Void Walker':'Demonology',
  'Summon: Infernal':'Demonology',
  'Summon: Infernal':'Demonology',
  'Reign Of Fire':'Destruction',
  'Chaos Bolt':'Destruction',
  'Death Bolt':'Affliction',
  'Havoc':'Demonology',
  'Unstable Power':'Destruction',
  'Unstable Affliction':'Affliction',
  'Soul Harvest':'Affliction',
  'Soul Harveset':'Affliction',
  'Ritual of Doom':'Destruction',
  'Armies Of Hell':'Demonology',
  'Earth Shock':'Elemental',
  'Flame Shock':'Elemental',
  'Frost Shock':'Elemental',
  'Rock Blast':'Elemental',
  'Healing Wave':'Restoration',
  'Fire Shield':'Enhancement',
  'Earth Shield':'Restoration',
  'Ancestral Knowledge':'Enhancement',
  'Healing Spring Totem':'Restoration',
  'Searing Totem':'Elemental',
  'Fire Nova Totem':'Elemental',
  'Stoneskin Totem':'Enhancement',
  'Healing Surge':'Restoration',
  'Cloud Burst Totem':'Restoration',
  'Cloud Burst totem':'Restoration',
  'Fissure':'Elemental',
  'Reincarnation':'Restoration',
  'Lava Burst':'Elemental',
  'Lava burst':'Elemental',
  'Rock Biter':'Enhancement',
  'Lava Lash':'Enhancement',
  'Chain Heal':'Restoration',
  'Ice Fury':'Enhancement',
  'Ice Blast':'Elemental',
  'Mana Spring Totem':'Restoration',
  'Grace of Air Totem':'Enhancement',
  'Frost Bite':'Enhancement',
  'Riptide':'Restoration',
  'Crash Lightning':'Enhancement',
  "Nature's Gaurdian":"Restoration",
  'Whirlwind Strike':'Enhancement',
  'Earthquake':'Elemental',
  'Eruption':'Elemental',
  'Call of The Elements':'Enhancement',
  'Aspect of Nature':'Elemental',
  'Aspect of Fire':'Elemental',
  'Aspect of Ice':'Elemental',
  'Aspect of the Ascended':'Restoration',
  'Ancestral Spirit':'Restoration',
  'Maelstrom Weapon':'Enhancement',
  'Elemental Mastery':'Elemental',
  'Arcane Shot':'Marksmanship',
  'Arcane shot':'Marksmanship',
  'Kill Command':'Beast Mastery',
  'Aspect of the Monkey':'Survival',
  'Aspect of the Hawk':'Survival',
  'Aspect of the Cheetah':'Survival',
  'Serpent Sting':'Survival',
  'Concussive Shot':'Marksmanship',
  'Concusive Shot':'Marksmanship',
  'Steel Trap':'Survival',
  "Hunter's Mark":"Beast Mastery",
  'Hunters Mark':'Beast Mastery',
  'Careful Aim':'Marksmanship',
  'Summon Animal Companion':'Beast Mastery',
  'Snipe':'Marksmanship',
  'Multi Shot':'Marksmanship',
  'Frost Trap':'Survival',
  'Frost trap':'Survival',
  "Predator's Mark":"Beast Mastery",
  'Rapid Fire':'Marksmanship',
  'Aimed Shot':'Marksmanship',
  'Eagle Eye':'Survival',
  'Ricochet Shot':'Marksmanship',
  'Feign Death':'Survival',
  'Explosive Trap':'Survival',
  'Explosive trap':'Survival',
  'Beastial Wrath':'Beast Mastery',
  'Disengage':'Survival',
  'Explosive Shot':'Marksmanship',
  'Apex Predator':'Beast Mastery',
  'Spirit Bond':'Beast Mastery',
  'Double Tap':'Marksmanship',
  'Lock and Load':'Marksmanship',
  'Guerrilla Tactics':'Survival',
  'Guerrilla tactics':'Survival',
  'Scent of Blood':'Beast Mastery',
  'Camouflage':'Beast Mastery',
  'Camoflage':'Beast Mastery',
  'Killer Instinct':'Marksmanship',
  'One With the Pack':'Beast Mastery',
  'Thrill of the Hunt':'Survival'
};
const CARD_DAMAGE_TYPES = {
 // Rogue melee cards
 'Sinister Strike':'melee','Backstab':'melee','Eviscerate':'melee','Hemorrhage':'melee',
 'Mutilate':'melee','Fan of Knives':'melee','Shiv':'melee','Gouge':'melee',
 'Ambush':'melee','Killing Spree':'melee',"Slice 'n Dice":'melee','Rupture':'melee',
 'Skull Crack':'melee',"Coup de Grâce":'melee','Kick':'melee',
 // Druid melee cards
 'Claw':'melee','Maul':'melee','Swipe':'melee','Ferocious Bite':'melee',
 'Pounce':'melee','Ravage':'melee','Feral Charge':'melee','Rake':'melee',
 'Shred':'melee','Maim':'melee','Starfire':'melee',
};
const DMG_TYPE_PROP={melee:'_eqDmgMelee',ranged:'_eqDmgRanged',fire:'_eqDmgFire',frost:'_eqDmgFrost',nature:'_eqDmgNature',arcane:'_eqDmgArcane',shadow:'_eqDmgShadow',holy:'_eqDmgHoly'};
function getCardDmgType(card){
 if(!card)return null;
 const ct=CARD_DAMAGE_TYPES[card.name];if(ct)return ct;
 const tal=CARD_TALENTS[card.name];
 const t2d={Assassination:'melee',Combat:'melee',Subtlety:'melee',Feral:'melee',Balance:'nature',Fire:'fire',Frost:'frost',Ice:'frost',Arcane:'arcane',Holy:'holy',Shadow:'shadow',Discipline:'holy',Arms:'melee',Fury:'melee',Protection:'melee',Marksmanship:'ranged',Survival:'ranged','Beast Mastery':'ranged',Retribution:'melee',Elemental:'nature',Enhancement:'melee',Affliction:'shadow',Destruction:'fire',Demonology:'shadow',Chrono:'arcane'};
 return tal?t2d[tal]||null:null;
}
const TALENT_COLORS = {
  'Feral':         '#c8a040',
  'Balance':       '#9060e0',
  'Restoration':   '#40c890',
  'Assassination': '#cc4444',
  'Combat':        '#e07030',
  'Subtlety':      '#7080cc',
  'Fire':          '#ff6030',
  'Ice':           '#60c0ff',
  'Arcane':        '#cc80ff',
  // Warrior
  'Arms':          '#c87830',
  'Fury':          '#cc3030',
  'Protection':    '#5080c8',
  // Hunter
  'Marksmanship':  '#70b840',
  'Beast Mastery': '#a06030',
  'Survival':      '#408850',
  // Priest
  'Holy':          '#f0e060',
  'Shadow':        '#9040c0',
  'Discipline':    '#80d0ff',
  // Warlock
  'Affliction':    '#704090',
  'Destruction':   '#e04020',
  'Demonology':    '#30a060',
  // Shaman
  'Elemental':     '#4090e0',
  'Enhancement':   '#c07830',
  'Restoration':   '#40c890',
  // Time Walker
  'Chrono':        '#8060f0',
};
const TYPE_ICONS = {
 damage: '⚔️',
 health: '💚',
 target: '🎯',
 cards: '🃏',
 buff: '✨',
 Self: '💚',
 self: '💚',
};
const TIER_ROMAN = { 1:'I', 2:'II', 3:'III', 4:'IV' };
const COMBO_SPEND_CARDS = {
 'Rupture': { dmgPerPoint: 1, label: 'Hemorrhage counters' }, // special: applies debuff stacks
 'Coup de Grâce': { dmgPerPoint: 3, label: 'dmg per point' },
 'Eviscerate': { dmgPerPoint: 4, label: 'dmg per point' },
 'Blade Flurry': { dmgPerPoint: 1, label: 'repeats of a chosen card' },
 'Way Lay': { dmgPerPoint: 2, label: 'dmg per point' },
 'Killing Spree': { dmgPerPoint: 2, label: 'dmg ×2 per point' },
};
// Warrior Rage spenders — rage consumed before rolling; default gives +2 roll per counter,
// cards in this map use their specific rage effect instead
const RAGE_SPEND_CARDS = {
 'Heroic Strike':    { type:'damage', dmgPerRage:2, label:'+2 dmg per rage' },
 'Cleave':           { type:'damage', dmgPerRage:2, label:'+2 dmg per rage' },
 'Charge':           { type:'damage', dmgPerRage:1, label:'+1 dmg per rage' },
 'Bloodthirst':      { type:'damage', dmgPerRage:1, label:'+1 dmg per rage' },
 'Whirlwind':        { type:'damage', dmgPerRage:1, label:'+1 dmg per rage (all enemies)' },
 'Mortal Strike':    { type:'damage', dmgPerRage:2, label:'+2 dmg per rage' },
 'Execute':          { type:'damage', dmgPerRage:1, label:'+1 dmg (+3 below half HP) per rage' },
 'Colossus Smash':   { type:'damage', dmgPerRage:2, label:'+2 dmg per rage' },
 'Anger Management': { type:'utility', label:'+1 armor per rage (3💢 = +1 damage reduction)' },
};
const XP_TABLE = [0, 80, 180, 320, 500, 750, 1100, 99999];
const TIER_UNLOCK = { 1:1, 2:2, 3:2, 4:3, 5:3, 6:4, 7:4 };
const CLASS_UNLOCK_COSTS = { Rogue:0, Mage:30, Druid:30, Warrior:40, Hunter:40, Priest:40, Warlock:50, Shaman:50, TimeWalker:75 };


// ================================================================
// DEADMINES — DECK BUILDING RPG
// Clean rebuild. Data blocks preserved from previous version.
// ================================================================

// ── GLOBALS ───────────────────────────────────────────────────────
let G = { char:null, encounterIdx:0, phase:'title', currentAdventure:null, _pendingHeroId:null, _pendingClassName:null };
let C = {}; // live combat state

let draftCallback = null;
let draftIsInitial = false;
let draftInitialCount = 0;

// ── UTIL ──────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

function show(screenId) {
 document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
 const el = $(screenId);
 if (el) { el.classList.add('active'); G.phase = screenId; }
 else console.error('show(): screen not found:', screenId);
 // Title screen music
 const _music = document.getElementById('title-music');
 if(_music){
 // Music plays on all pre-run screens; stops when run starts
 const alwaysMusic = ['screen-title', 'screen-adventure-select', 'screen-class-select', 'screen-hero-select', 'screen-legacy', 'screen-equip-loadout'];
 const preRunOnly = ['screen-draft']; // only during initial deck building
 const shouldPlay = alwaysMusic.includes(screenId) || 
 (preRunOnly.includes(screenId) && !window._runStarted);
 if(shouldPlay){
 if(window._titleMusicUnlocked && _music.paused && !_music.muted) {
 try{ const sv=localStorage.getItem('musicVolume'); _music.volume=sv!==null?parseInt(sv)/100:0.45; }catch(e){ _music.volume=0.45; }
 _music.play().catch(()=>{});
 }
 } else {
 // Stop TITLE music when entering game screens (battle music handled separately)
 if(!_music.paused) {
 _music.pause();
 _music.currentTime = 0;
 }
 }
 }
}

function sfx(name) { /* stub */ }

// ── MUSIC MANAGEMENT ──────────────────────────────────────
const _BATTLE_TRACKS = ['battle-music-1','battle-music-2','battle-music-3'];
let _currentBattleTrack = null;

function stopAllMusic() {
 ['title-music','battle-music-1','battle-music-2','battle-music-3','boss-music-1','boss-music-2','gameover-music'].forEach(id=>{
  const el=document.getElementById(id);
  if(el){ el.onended=null; if(!el.paused){ el.pause(); el.currentTime=0; } }
 });
}

function playGameoverMusic() {
 stopAllMusic();
 const m = document.getElementById('gameover-music');
 if(m){ try{ const sv=localStorage.getItem('musicVolume'); m.volume=sv!==null?parseInt(sv)/100:0.45; }catch(e){m.volume=0.45;} m.play().catch(()=>{}); }
}

function _setVol(m){ try{ const sv=localStorage.getItem('musicVolume'); m.volume=sv!==null?parseInt(sv)/100:0.45; }catch(e){ m.volume=0.45; } }

function playBattleMusic(isBoss=false) {
 stopAllMusic();
 if(isBoss){
  // Boss tracks: alternate between boss-music-1 and boss-music-2 until combat ends
  const bossTrackId = (G.char.runKills||0)%2===0 ? 'boss-music-1' : 'boss-music-2';
  const altBossId = bossTrackId==='boss-music-1' ? 'boss-music-2' : 'boss-music-1';
  const playBoss = (id, nextId) => {
   const m = document.getElementById(id);
   if(!m) return;
   _setVol(m);
   m.onended = ()=>playBoss(nextId, id);
   m.play().catch(()=>{});
  };
  playBoss(bossTrackId, altBossId);
 } else {
  // Pick a random battle track (different from last), advance to another on end
  const advance = () => {
   let choices = _BATTLE_TRACKS.filter(t=>t!==_currentBattleTrack);
   if(!choices.length) choices = _BATTLE_TRACKS;
   _currentBattleTrack = choices[Math.floor(Math.random()*choices.length)];
   const m = document.getElementById(_currentBattleTrack);
   if(!m) return;
   _setVol(m);
   m.onended = advance;
   m.play().catch(()=>{});
  };
  advance();
 }
}

function toggleTitleMusic() {
 const m = document.getElementById('title-music');
 const btn = document.getElementById('btn-mute');
 if(!m) return;
 m.muted = !m.muted;
 if(m.paused && !m.muted) m.play().catch(()=>{});
 if(btn) btn.textContent = m.muted ? '🔇 Muted' : '🔊 Music';
}

function toast(msg, type='') {
 const el = document.createElement('div');
 el.className = `toast${type?' t-'+type:''}`;
 el.textContent = msg;
 document.body.appendChild(el);
 setTimeout(() => el.remove(), 2700);
}

function log(msg, cls='') {
 const box = $('combat-log');
 if (!box) return;
 const line = document.createElement('div');
 line.className = 'log-line ' + cls;
 line.textContent = ' ' + msg;
 box.appendChild(line);
 box.scrollTop = box.scrollHeight;
}

function modal(title, body, btnLabel='Continue', cb=null) {
 $('m-title').textContent = title;
 $('m-body').innerHTML = body.replace(/\n/g, '<br>');
 $('m-btn').textContent = btnLabel;
 $('modal-overlay').classList.add('open');
 $('m-btn').onclick = () => {
 $('modal-overlay').classList.remove('open');
 if (cb) cb();
 };
}

function barHTML(cur, max, cls='bar-hp') {
 const pct = Math.max(0, Math.min(100, cur/max*100));
 const col = cls.includes('hp')
 ? (pct>60?'var(--hp-full)':pct>30?'var(--hp-mid)':'var(--hp-low)')
 : 'var(--chrome-gold)';
 return `<div class="bar-outer"><div class="bar-fill ${cls}" style="width:${pct}%;background:${col}"></div></div>`;
}

function d20() { return Math.floor(Math.random()*20)+1; }

function rollOutcome(rawRoll, risk, bonus=0, critThresh=20) {
 if (rawRoll===1) return 'critmiss';
 if (rawRoll>=critThresh) return 'critical';
 if ((rawRoll+bonus)>=risk) return 'hit';
 return 'miss';
}

function shuffle(arr) {
 const a=[...arr];
 for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
 return a;
}

function drawFromDeck(deck, discard, count) {
 let d=[...deck],dis=[...discard],drawn=[];
 for(let i=0;i<count;i++){
 if(d.length===0){if(dis.length===0)break;d=shuffle(dis);dis=[];}
 drawn.push(d.shift());
 }
 return {deck:d,discard:dis,drawn};
}

function extractDamage(text='') {
 const m = text.match(/[Dd]eal (\d+)(?:\s+\w+)* (?:magic |melee |ranged |fire |ice |nature |arcane |shadow )?damage/);
 return m ? parseInt(m[1]) : 0;
}

function getCardById(id) {
 for(const pool of Object.values(CARDS)){const c=pool.find(x=>x.id===id);if(c)return c;}
 return null;
}

function getAvailablePool(className, maxTier) {
 return (CARDS[className.replace(' ','')]||[]).filter(c=>c.tier<=maxTier);
}

function getDraftOptions(className, maxTier, excludeNames=[], count=3) {
 // excludeNames = card names already in deck (prevent offering exact same named card twice in one draft)
 // But allow drafting a card you already have (duplicates are useful in deckbuilding)
 const avail = getAvailablePool(className, maxTier);
 // Shuffle first, then pick 'count' cards ensuring no duplicate names in same offer
 const shuffled = shuffle([...avail]);
 const picked = [];
 const pickedNames = new Set();
 for(const card of shuffled){
 if(!pickedNames.has(card.name)){
 pickedNames.add(card.name);
 picked.push(card);
 if(picked.length >= count) break;
 }
 }
 return picked;
}

function getHero(heroId) {
 for(const arr of Object.values(HEROES)){const h=arr.find(h=>h.id===heroId);if(h)return h;}
 return null;
}

function isHeroUnlocked(heroId, co) {
 const hero = getHero(heroId);
 if(!hero) return false;
 if(hero.unlockCost===0) return true;
 const clsName = Object.entries(HEROES).find(([,arr])=>arr.some(h=>h.id===heroId))?.[0];
 if(!clsName) return false;
 const cd = getClassData(co, clsName);
 return (cd.unlockedHeroes||[]).includes(heroId);
}

function getLevelTier(lvl) { return TIER_UNLOCK[Math.min(lvl,7)]||4; }
function xpToNextLevel(lvl) { return XP_TABLE[lvl]??null; }
function isReadyToLevel(c) { const n=xpToNextLevel(c.level); return n!==null&&c.xp>=n; }
function getRandomPerks(n=3) { return shuffle([...ALL_PERKS]).slice(0,n); }

// ── STORAGE ───────────────────────────────────────────────────────
function loadCarryover() { try{return JSON.parse(localStorage.getItem('dm_co')||'{}');}catch{return{};} }
function saveCarryover(co) { localStorage.setItem('dm_co',JSON.stringify(co)); }
function loadRun() { try{return JSON.parse(localStorage.getItem('dm_run')||'null');}catch{return null;} }
function saveRun(c) { localStorage.setItem('dm_run',JSON.stringify(c)); }
function clearRun() { localStorage.removeItem('dm_run'); }

function getLegacyPoints(co) { if(!co)co=loadCarryover(); return co.legacyPoints||0; }

function getClassData(co, clsName) {
 if(!co)co=loadCarryover();
 if(!co.classes)co.classes={};
 if(!co.classes[clsName])co.classes[clsName]={unlockedHeroes:[]};
 return co.classes[clsName];
}

function applyCarryoverBonuses(char) {
 const co=loadCarryover();
 const generalLevels=co.legacyLevels||{};
 const classLevels=(co.classLegacyLevels||{})[char.className]||{};
 LEGACY_UPGRADES.forEach(upg=>{
 // General upgrades use shared levels; class upgrades use per-class levels
 const levels=upg.class?classLevels:generalLevels;
 const lvl=levels[upg.id]||0;
 for(let l=0;l<lvl;l++) upg.apply(char, l+1);
 });
}

function recordRunResult(char, won) {
 const co=loadCarryover();
 co.totalRuns=(co.totalRuns||0)+1;
 co.bestLevel=Math.max(co.bestLevel||0,char.level);
 if(won)co.totalWins=(co.totalWins||0)+1;
 saveCarryover(co);
}

// ── CHARACTER ─────────────────────────────────────────────────────
function createCharacter(name, className) {
 const cls=CLASSES[className];
 return {
 name, className, heroId:null,
 level:1, xp:0,
 hp:cls.baseHP, maxHP:cls.baseHP,
 gold:15,
 deck:[], discard:[],
 inventory:[], equipment:{weapon:null,offhand:null,armor:null,trinket:null},
 statusEffects:[],
 perks:[],
 rollBonus:0, dmgBonus:0, dmgReduction:0, extraDraw:0, critThreshold:20,
 comboPoints:0, currentForm:null, igniteCounters:0,
 checkpoint:0,
 runGold:0, runKills:0, runLP:0, runTurns:0, runDmgDealt:0, runDmgTaken:0, runHealingDone:0, runHighestHit:0, runCardsPlayed:0, runCrits:0, runCritFails:0,
 };
}

// ── SETTINGS ──────────────────────────────────────────────────────
function setMusicVolume(val) {
 const volume = parseInt(val) / 100;
 const lbl = document.getElementById('volume-label');
 if(lbl) lbl.textContent = val + '%';
 const tracks = ['title-music','battle-music-1','battle-music-2','battle-music-3','boss-music-1','boss-music-2','gameover-music'];
 tracks.forEach(id => {
 const el = document.getElementById(id);
 if(el) el.volume = volume;
 });
 // Persist across sessions
 try { localStorage.setItem('musicVolume', val); } catch(e) {}
}

function openSettings() {
 const ov=$('settings-overlay');
 if(!ov)return;
 // Restore saved volume
 try {
 const saved = localStorage.getItem('musicVolume');
 if(saved !== null) {
 const slider = document.getElementById('volume-slider');
 const lbl = document.getElementById('volume-label');
 if(slider) { slider.value = saved; }
 if(lbl) lbl.textContent = saved + '%';
 }
 } catch(e) {}
 const inRun=!!(G&&G.char);
 ['settings-action-save','settings-action-abandon'].forEach(id=>{
 const el=$(id); if(el)el.style.display=inRun?'':'none';
 });
 ov.classList.add('open');
}
function closeSettings() { const ov=$('settings-overlay'); if(ov)ov.classList.remove('open'); }

function toggleFullscreen() {
 const btn=$('global-fullscreen-btn');
 if(!document.fullscreenElement){
 document.documentElement.requestFullscreen().catch(()=>{});
 if(btn) btn.textContent='⛶';
 } else {
 document.exitFullscreen().catch(()=>{});
 }
}
document.addEventListener('fullscreenchange',()=>{
 const btn=$('global-fullscreen-btn');
 if(btn) btn.textContent=document.fullscreenElement?'✕⛶':'⛶';
});

function settingsAction(action) {
 closeSettings();
 if(action==='title') {
 if(G.char)saveRun(G.char);
 G={char:null,encounterIdx:0,phase:'title',currentAdventure:null,_pendingHeroId:null,_pendingClassName:null};
 C={};
 setTimeout(initTitle,300);
 } else if(action==='save') {
 if(G.char){saveRun(G.char);toast('Run saved!','success');}
 } else if(action==='abandon') {
 const ov=$('settings-overlay');
 const inner=ov?ov.querySelector('.settings-box'):null;
 if(!inner)return;
 window._settingsOrig=inner.innerHTML;
 inner.innerHTML=
 '<div class="settings-title" style="color: ">⚠️ ABANDON RUN?</div>'+
 '<div style="font-family:var(--font-body);font-size:12px;color:var(--parch-text-dim);margin-bottom:16px;line-height:1.6">All progress this run will be lost.</div>'+
 '<div style="display:flex;gap:8px">'+
 '<button class="btn btn-ghost" style="flex:1" id="ab-cancel">Cancel</button>'+
 '<button class="btn" style="flex:1;background:rgba(160,20,20,0.5);border-color:#f44;color:#faa" id="ab-confirm">Abandon</button>'+
 '</div>';
 ov.classList.add('open');
 $('ab-cancel').onclick=()=>{inner.innerHTML=window._settingsOrig;};
 $('ab-confirm').onclick=()=>{
 clearRun();
 G={char:null,encounterIdx:0,phase:'title',currentAdventure:null};C={};
 ov.classList.remove('open');
 setTimeout(initTitle,300);
 };
 } else if(action==='wipe') {
 const ov=$('settings-overlay');
 const inner=ov?ov.querySelector('.settings-box'):null;
 if(!inner)return;
 window._settingsOrig=inner.innerHTML;
 inner.innerHTML=
 '<div class="settings-title" style="color: ">⚠️ WIPE ALL PROGRESS?</div>'+
 '<div style="font-family:var(--font-body);font-size:12px;color:var(--parch-text-dim);margin-bottom:16px;line-height:1.6">Permanently deletes all Legacy Points, unlocks, and run history.</div>'+
 '<div style="display:flex;gap:8px">'+
 '<button class="btn btn-ghost" style="flex:1" id="wp-cancel">Cancel</button>'+
 '<button class="btn" style="flex:1;background:rgba(160,20,20,0.5);border-color:#f44;color:#faa" id="wp-confirm">Yes, Wipe Everything</button>'+
 '</div>';
 ov.classList.add('open');
 $('wp-cancel').onclick=()=>{inner.innerHTML=window._settingsOrig;};
 $('wp-confirm').onclick=()=>{
 try{localStorage.clear();}catch(e){}
 clearRun();
 G={char:null,encounterIdx:0,phase:'title',currentAdventure:null};C={};
 ov.classList.remove('open');
 toast('All progress wiped.','success');
 setTimeout(initTitle,400);
 };
 }
}

// ── TITLE ─────────────────────────────────────────────────────────
function initTitle() {
 stopAllMusic();
 window._runStarted = false;
 // Restore saved music volume
 try {
 const saved = localStorage.getItem('musicVolume');
 if(saved !== null) setMusicVolume(saved);
 } catch(e) {} // reset for new run
 show('screen-title');
 // Start music — unlocked by any user interaction
 window._titleMusicUnlocked = false;
 const _unlockMusic = () => {
 if(window._titleMusicUnlocked) return;
 window._titleMusicUnlocked = true;
 const m = document.getElementById('title-music');
 if(m && G.phase === 'screen-title' && m.paused) {
 m.play().catch(()=>{});
 }
 document.removeEventListener('click', _unlockMusic);
 document.removeEventListener('keydown', _unlockMusic);
 const btn = document.getElementById('btn-mute');
 if(btn) btn.textContent = m && m.muted ? '🔇 Muted' : '🔊 Music';
 };
 document.addEventListener('click', _unlockMusic);
 document.addEventListener('keydown', _unlockMusic);
 // Set mute button to current state
 const _muteBtn = document.getElementById('btn-mute');
 if(_muteBtn) {
 const _m = document.getElementById('title-music');
 _muteBtn.textContent = _m && _m.muted ? '🔇 Muted' : '🔊 Music';
 }
 const co=loadCarryover();
 const hasSave=!!loadRun();
 $('btn-continue').style.display=hasSave?'':'none';
 if(hasSave) $('btn-continue').onclick=()=>{G.char=loadRun();G.encounterIdx=G.char.checkpoint||0;window._runStarted=true;runEncounter(G.encounterIdx);};
 if($('btn-newgame')) $('btn-newgame').onclick=()=>showAdventureSelect();
 // Rotating flavor text
 const _flavors=[
 '“Every hero has a first step. Yours begins here.”',
 '“The dungeon does not yield to the timid.”',
 '“Build your deck. Face your fate.”',
 '“Great deeds are written in the cards you choose.”',
 '“The fallen left their stories behind. Will you add yours?”',
 '“Fortune does not smile on the unprepared.”',
 '“Steel your resolve. The darkness is waiting.”',
 ];
 const _flEl=$('title-flavor');
 if(_flEl) _flEl.textContent=_flavors[Math.floor(Math.random()*_flavors.length)];
 if($('btn-legacy')) $('btn-legacy').onclick=()=>showLegacyShop();
 const lp=getLegacyPoints(co);
 const banner=$('title-stat-banner');
 if(banner){
 banner.innerHTML=co.totalRuns||lp>0
 ?`<div class="unlock-banner">⚔️ ${co.totalRuns||0} run${(co.totalRuns||0)!==1?'s':''} · Best Lv${co.bestLevel||1} · ${co.totalWins||0} win${(co.totalWins||0)!==1?'s':''} · <span style="color:var(--chrome-gold-rim)">⚡${lp} LP</span></div>`
 :'';
 }
}

// ── ADVENTURE SELECT ──────────────────────────────────────────────
function showAdventureSelect() {
 show('screen-adventure-select');
 const grid=$('adventure-grid');
 if(!grid)return;
 grid.innerHTML='';
 ADVENTURES.forEach(adv=>{
 const card=document.createElement('div');
 card.className='adv-card'+(adv.locked?' locked':'');
 const tags=adv.tags.map(t=>`<span style="font-family:var(--font-pixel);font-size:9px;color:var(--parch-text-dim);background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:2px;padding:4px 8px">${t}</span>`).join('');
 card.innerHTML=`
 <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:14px">
 <div style="font-size:44px">${adv.icon}</div>
 <div>
 <div style="font-family:var(--font-pixel);font-size:14px;color:var(--chrome-gold-hi);margin-bottom:6px">${adv.title}</div>
 <div style="font-family:var(--font-pixel);font-size:9px;color:var(--parch-text-dim)">📍 ${adv.subtitle}</div>
 </div>
 ${adv.comingSoon?'<div style="margin-left:auto;font-family:var(--font-pixel);font-size:9px;color:var(--parch-text-dim);border:1px solid rgba(255,255,255,0.1);padding:5px 8px;border-radius:2px">COMING SOON</div>':''}
 </div>
 <div style="font-size:16px;color:var(--parch-text-dim);line-height:1.6;margin-bottom:14px">${adv.lore}</div>
 <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:${adv.unlocked?'14px':'0'}">${tags}</div>
 ${adv.unlocked?`<button class="btn btn-primary" style="width:100%;font-size:12px;padding:12px 16px" onclick="selectAdventure('${adv.id}')">⚔️ Enter ${adv.title}</button>`:''}
 `;
 grid.appendChild(card);
 });
}

function selectAdventure(advId) {
 G.currentAdventure=advId;
 initClassSelect();
 show('screen-class-select');
}

// ── CLASS SELECT ──────────────────────────────────────────────────
function initClassSelect() {
 const grid=$('class-grid');
 grid.innerHTML='';
 const co=loadCarryover();
 const isFirstRun=!(co.unlockedClasses&&co.unlockedClasses.length>0);
 const unlocked=isFirstRun?Object.keys(CLASSES):(co.unlockedClasses||['Rogue']);

 const existingBanner=document.getElementById('first-run-banner');
 if(existingBanner)existingBanner.remove();
 if(isFirstRun){
 const banner=document.createElement('div');
 banner.id='first-run-banner';
 banner.style.cssText='font-family:var(--font-pixel);font-size:7px;color:var(--chrome-gold);background:rgba(200,160,40,0.08);border:1px solid rgba(200,160,40,0.2);border-radius:3px;padding:8px 14px;text-align:center;margin-bottom:16px;max-width:680px;width:100%';
 banner.textContent='✨ FIRST ADVENTURE — All classes are free to try. Additional classes unlock with Legacy Points.';
 grid.parentElement.insertBefore(banner,grid);
 }

 // Hide the old confirm button — confirmation now happens inside the modal
 if($('btn-begin')) $('btn-begin').style.display='none';

 Object.values(CLASSES).forEach(cls=>{
 const isUnlocked=unlocked.includes(cls.name);
 const div=document.createElement('div');
 div.className='class-tile'+(isUnlocked?'':' class-tile-locked');
 div.innerHTML=`
 <div class="ct-icon">${cls.icon}</div>
 <div class="ct-name">${cls.name.toUpperCase()}</div>
 <div class="ct-hp">❤️ ${cls.baseHP} HP</div>
 ${!isUnlocked?`<div class="ct-lock">🔒 ${CLASS_UNLOCK_COSTS[cls.name]||30} LP</div>`:''}
 `;
 div.onclick=()=>showClassDetailModal(cls,isUnlocked);
 grid.appendChild(div);
 });
}

function showClassDetailModal(cls, isUnlocked) {
 const existing=document.getElementById('class-detail-modal');
 if(existing)existing.remove();
 const overlay=document.createElement('div');
 overlay.id='class-detail-modal';
 overlay.className='class-detail-overlay';
 overlay.innerHTML=`
 <div class="class-detail-box">
 <button class="class-detail-close" title="Close">✕</button>
 <div class="class-detail-header">
 <span class="class-detail-icon">${cls.icon}</span>
 <div>
 <div class="class-detail-name">${cls.name.toUpperCase()}</div>
 <div class="class-detail-meta">❤️ ${cls.baseHP} HP${cls.playstyle?' · '+cls.playstyle:''}</div>
 </div>
 </div>
 <div class="class-detail-desc">${cls.desc}</div>
 <div class="class-mechanic-box">
 <div class="class-mechanic-label">${cls.mechanic}</div>
 ${cls.mechanicDesc}
 </div>
 ${cls.strengths?`<div class="class-detail-sw"><span class="class-detail-sw-label cdl-green">✦ STRENGTHS</span>${cls.strengths}</div>`:''}
 ${cls.weaknesses?`<div class="class-detail-sw"><span class="class-detail-sw-label cdl-red">✦ WEAKNESSES</span>${cls.weaknesses}</div>`:''}
 ${isUnlocked
 ?`<button class="btn btn-primary class-detail-confirm">⚔️ PLAY AS ${cls.name.toUpperCase()} →</button>`
 :`<div class="class-detail-locked">🔒 Requires ${CLASS_UNLOCK_COSTS[cls.name]||30} Legacy Points to unlock</div>`
 }
 </div>
 `;
 overlay.querySelector('.class-detail-close').onclick=()=>overlay.remove();
 overlay.onclick=e=>{if(e.target===overlay)overlay.remove();};
 if(isUnlocked){
 overlay.querySelector('.class-detail-confirm').onclick=()=>{
 overlay.remove();
 showHeroSelect(cls.name);
 };
 }
 document.body.appendChild(overlay);
}

// ── HERO SELECT ───────────────────────────────────────────────────
function showHeroSelect(className) {
 G._pendingClassName=className;
 const co=loadCarryover();
 const heroes=HEROES[className]||[];
 const screenId='screen-hero-select';
 let screen=$(screenId);
 if(!screen){
 screen=document.createElement('div');
 screen.id=screenId;
 screen.className='screen scrollable';
 document.body.appendChild(screen);
 }
 screen.innerHTML=`
 <div style="display:flex;flex-direction:column;align-items:center;padding:32px 16px 40px;min-height:100%">
 <div class="section-header">CHOOSE YOUR HERO</div>
 <div class="section-subheader">${className} — select your champion</div>
 <div class="hero-grid" id="hero-grid"></div>
 <button class="btn btn-ghost btn-sm" onclick="initClassSelect();show('screen-class-select')">← BACK</button>
 </div>
 `;
 show(screenId);
 const grid=$('hero-grid');
 heroes.forEach(hero=>{
 const unlocked=isHeroUnlocked(hero.id,co);
 const card=document.createElement('div');
 card.className='hero-card'+(unlocked?'':' locked');
 card.innerHTML=`
 <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
 <span style="font-size:32px">${hero.icon}</span>
 <div>
 <div style="font-family:var(--font-pixel);font-size:11px;color:${unlocked?'var(--chrome-gold-hi)':'var(--parch-text-hi)'}">${hero.name}</div>
 <div style="font-family:var(--font-pixel);font-size:9px;color:var(--parch-text-dim)">❤ ${hero.hp} HP</div>
 </div>
 ${!unlocked&&hero.unlockCost?`<span style="margin-left:auto;font-family:var(--font-pixel);font-size:9px;color:var(--chrome-gold)">⚡${hero.unlockCost}</span>`:''}
 </div>
 <div style="font-family:var(--font-pixel);font-size:9px;color:var(--chrome-gold-hi);margin-bottom:6px">${hero.abilityName}</div>
 <div style="font-size:13px;color:var(--parch-text-dim);margin-bottom:8px;line-height:1.6">${hero.abilityDesc}</div>
 <div style="font-size:12px;color:var(--parch-text-dim);font-style:italic;margin-bottom:12px">"${hero.lore}"</div>
 ${unlocked
 ?`<button class="btn btn-primary" style="width:100%;font-size:11px" onclick="selectHero('${hero.id}')">Choose ${hero.name.split(',')[0]}</button>`
 :`<button class="btn btn-ghost btn-sm" style="width:100%;font-size:9px" disabled>🔒 ${hero.unlockCost?hero.unlockCost+' LP to unlock':'Locked'}</button>`
 }
 `;
 grid.appendChild(card);
 });
}

function selectHero(heroId) {
 G._pendingHeroId=heroId;
 const clsName=G._pendingClassName||Object.entries(HEROES).find(([,arr])=>arr.some(h=>h.id===heroId))?.[0];
 const hero=Object.values(HEROES).flat().find(h=>h.id===heroId);
 const name=hero?hero.name.split(',')[0].trim():'Adventurer';
 showEquipmentLoadout(name, clsName, heroId);
}

function showEquipmentLoadout(name, className, heroId) {
  const co=loadCarryover();
  const unlockedEquip=co.unlockedEquipment||[];
  const startingEquip=co.startingEquipment||{};

  // Skip if nothing unlocked
  if(unlockedEquip.length===0){ startNewRun(name, className); return; }

  // Init session loadout from saved defaults
  if(!G._sessionEquip) G._sessionEquip={...startingEquip};

  // Create or reuse the screen element
  let screen=document.getElementById('screen-equip-loadout');
  if(!screen){
    screen=document.createElement('div');
    screen.id='screen-equip-loadout';
    screen.className='screen scrollable';
    document.body.appendChild(screen);
  }

  // Render the screen content
  screen.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;padding:32px 16px 40px;min-height:100%;max-width:700px;margin:0 auto">
      <div class="section-header">STARTING LOADOUT</div>
      <div class="section-subheader">Choose your equipment before the adventure begins</div>
      <div id="equip-slots" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;margin:16px 0"></div>
      <div style="display:flex;gap:10px;margin-top:16px">
        <button class="btn btn-ghost btn-sm" onclick="G._sessionEquip=null;showHeroSelect('${className}')">← Back</button>
        <button class="btn btn-primary" onclick="applySessionEquipAndStart('${name}','${className}')">⚔️ Begin Adventure →</button>
      </div>
    </div>`;

  const slotsEl=document.getElementById('equip-slots');
  const slotLabels={weapon:'⚔️ WEAPON',offhand:'🛡️ OFF-HAND',armor:'🧥 ARMOR',trinket:'💎 TRINKET'};

  ['weapon','offhand','armor','trinket'].forEach(slot=>{
    const slotDiv=document.createElement('div');
    slotDiv.style.cssText='background:rgba(0,0,0,0.4);border:1px solid var(--chrome-mid);border-radius:4px;padding:12px';

    const equippedId=G._sessionEquip[slot]||null;
    const equippedItem=equippedId?EQUIPMENT_SHOP.find(e=>e.id===equippedId):null;
    const available=EQUIPMENT_SHOP.filter(e=>e.slot===slot&&unlockedEquip.includes(e.id));

    let html=`<div style="font-family:var(--font-pixel);font-size:6px;color:var(--chrome-gold);margin-bottom:8px">${slotLabels[slot]}</div>`;

    if(equippedItem){
      html+=`<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;padding:6px;background:rgba(200,160,40,0.1);border:1px solid var(--chrome-gold);border-radius:3px">
        <span style="font-size:18px">${equippedItem.icon}</span>
        <div style="flex:1;min-width:0">
          <div style="font-family:var(--font-pixel);font-size:6px;color:var(--chrome-gold-hi)">${equippedItem.name}</div>
          <div style="font-size:9px;color:var(--parch-text-dim)">${equippedItem.desc}</div>
        </div>
        <button class="btn btn-ghost btn-sm" style="font-size:6px;flex-shrink:0" onclick="_equipLoadoutToggle('${slot}',null,'${name}','${className}','${heroId}')">✕</button>
      </div>`;
    } else {
      html+=`<div style="font-family:var(--font-pixel);font-size:5px;color:var(--parch-text-dim);margin-bottom:8px">— Empty —</div>`;
    }

    if(available.length>0){
      available.forEach(item=>{
        const isSel=equippedId===item.id;
        const rar=item.rarity&&RARITY[item.rarity]?RARITY[item.rarity]:null;
        const nameColor=rar?rar.color:'inherit';
        const borderStyle=rar?`border-color:${rar.border}`:'';
        html+=`<button class="btn btn-sm${isSel?'':' btn-ghost'}" style="width:100%;margin-bottom:4px;font-size:6px;justify-content:flex-start;gap:6px;text-align:left;${borderStyle}"
          onclick="_equipLoadoutToggle('${slot}','${item.id}','${name}','${className}','${heroId}')">
          ${item.icon} <span style="color:${nameColor}">${item.name}</span>${rar?` <span style="color:${rar.color};opacity:0.7;font-size:5px">[${rar.label}]</span>`:''}
        </button>`;
      });
    } else {
      html+=`<div style="font-family:var(--font-pixel);font-size:5px;color:rgba(255,255,255,0.2)">No ${slot} unlocked</div>`;
    }

    slotDiv.innerHTML=html;
    slotsEl.appendChild(slotDiv);
  });

  show('screen-equip-loadout');
}

function _equipLoadoutToggle(slot, itemId, name, className, heroId) {
  if(itemId===null || itemId==='null'){
    delete G._sessionEquip[slot];
  } else {
    // Toggle: if already selected, deselect; otherwise select
    G._sessionEquip[slot] = G._sessionEquip[slot]===itemId ? null : itemId;
    if(G._sessionEquip[slot]===null) delete G._sessionEquip[slot];
  }
  showEquipmentLoadout(name, className, heroId);
}

function applySessionEquipAndStart(name, className) {
 // Override co.startingEquipment with session choices for this run only
 const sessionEq=G._sessionEquip||{};
 const co=loadCarryover();
 const orig=co.startingEquipment;
 co.startingEquipment=sessionEq;
 // Temporarily save so startNewRun picks it up
 const saved=JSON.stringify(co.startingEquipment);
 saveCarryover(co);
 G._sessionEquip=null;
 startNewRun(name,className);
 // Restore original persistent loadout (session was one-time)
 const co2=loadCarryover();
 co2.startingEquipment=orig;
 saveCarryover(co2);
}

// ── START RUN ─────────────────────────────────────────────────────
function startNewRun(name, className) {
 // Save starting class if first run
 const co=loadCarryover();
 if(!(co.unlockedClasses&&co.unlockedClasses.length>0)){
 co.unlockedClasses=[className];
 saveCarryover(co);
 toast(`${CLASSES[className]?.icon} ${className} chosen as your starting class!`,'success');
 }
 G.char=createCharacter(name, className);
 if(G._pendingHeroId){
 const hero=getHero(G._pendingHeroId);
 if(hero){ G.char.heroId=hero.id; G.char.hp=hero.hp; G.char.maxHP=hero.hp; }
 G._pendingHeroId=null;
 }
 applyCarryoverBonuses(G.char);
 // Apply starting equipment from legacy loadout
 const _startEq=(loadCarryover().startingEquipment||{});
 Object.values(_startEq).forEach(itemId=>{
 const eq=EQUIPMENT_SHOP.find(e=>e.id===itemId);
 if(eq){
 eq.apply(G.char);
 G.char.equipment=G.char.equipment||{weapon:null,offhand:null,armor:null,trinket:null};
 G.char.equipment[eq.slot]={id:eq.id,name:eq.name,icon:eq.icon,desc:eq.desc,stats:eq.stats};
 }
 });
 G.encounterIdx=0; G.char.checkpoint=0;
 draftIsInitial=true; draftInitialCount=0; draftCallback=null;
 showDraftScreen();
}

// ── DRAFT ─────────────────────────────────────────────────────────
function showDraftScreen() {
 show('screen-draft');
 const cls=G.char.className;
 const maxTier=getLevelTier(G.char.level);
 $('draft-title-txt').textContent=draftIsInitial?`STARTING DECK — CARD ${draftInitialCount+1} OF 6`:'DRAFT A NEW CARD';
 $('draft-sub-txt').textContent=draftIsInitial?'Build your starting deck one card at a time.':'Choose one card to add to your deck.';
 const options=getDraftOptions(cls, maxTier, draftIsInitial?[]:G.char.deck.map(id=>{const c=getCardById(id);return c?c.name:'';}).filter(Boolean));
 const container=$('draft-cards-row');
 container.innerHTML='';
 if(!options.length){container.innerHTML='<p style="color:var(--parch-text-dim);font-family:var(--font-pixel);font-size:8px;text-align:center;padding:20px">No cards available.</p>';}
 options.forEach(card=>{
 const el=document.createElement('div');
 el.className='draft-card-big';
 const talent=CARD_TALENTS[card.name];
 const tc=talent?(TALENT_COLORS[talent]||' '):null;
 // Card art: class-colored background with large type icon + talent indicator
 const cardArtBg = {Rogue:'rgba(180,50,50,0.15)',Mage:'rgba(120,60,200,0.15)',Druid:'rgba(40,160,60,0.15)'}[G.char.className]||'rgba(180,140,40,0.1)';
 const cardArtBorder = {Rogue:'rgba(200,80,80,0.3)',Mage:'rgba(140,80,220,0.3)',Druid:'rgba(60,180,80,0.3)'}[G.char.className]||'rgba(180,140,40,0.2)';
 const talentIcon = {
 Fire:'🔥',Ice:'❄️',Arcane:'🔮',
 Feral:'🐾',Balance:'🌙',Restoration:'🌿',
 Assassination:'🗡️',Combat:'⚔️',Subtlety:'👤'
 }[CARD_TALENTS[card.name]]||TYPE_ICONS[card.type]||'✦';
 el.innerHTML=`
 <div style="background:${cardArtBg};border-bottom:1px solid ${cardArtBorder};padding:16px 8px;text-align:center;min-height:70px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;position:relative">
 <div style="font-size:32px;line-height:1;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.5))">${talentIcon}</div>
 <div style="font-family:var(--font-pixel);font-size:4px;color:rgba(255,255,255,0.3);letter-spacing:0.1em">${(CARD_TALENTS[card.name]||card.type).toUpperCase()}</div>
 <div style="position:absolute;top:4px;right:6px;font-family:var(--font-pixel);font-size:5px;color:rgba(255,255,255,0.35)">${TIER_ROMAN[card.tier]}</div>
 </div>
 <div class="draft-card-head" style="border-top:none;padding-top:8px">
 <div class="draft-card-name" style="flex:1">${card.name}</div>
 </div>
 ${talent?`<div class="card-talent-bar" style="background:${tc}22;border-bottom:1px solid ${tc}44"><span class="card-talent-label" style="color:${tc}">${talent}</span></div>`:''}
 <div class="draft-card-body">
 <div class="draft-card-roll">Need: ${card.risk>0?card.risk+'+':'Special'}</div>
 <div class="draft-card-effect">${card.hit||''}</div>
 ${card.crit?`<div class="draft-crit">★ CRIT: ${card.crit}</div>`:''}
 ${card.critmiss?`<div class="draft-fail">☠ FAIL: ${card.critmiss}</div>`:''}
 </div>`;
 el.onclick=()=>pickDraftCard(card);
 container.appendChild(el);
 });
 $('btn-skip-draft').style.display=draftIsInitial?'none':'';
 $('btn-skip-draft').onclick=()=>finishDraft(null);
}

function pickDraftCard(card) {
 G.char.deck.push(card.id);
 toast(`Added: ${card.name}`,'success');
 if(draftIsInitial){
 draftInitialCount++;
 if(draftInitialCount<6){showDraftScreen();return;}
 G.char.deck=shuffle(G.char.deck);
 saveRun(G.char);
 // Stop title music — adventure begins
 window._runStarted = true;
 const _m=document.getElementById('title-music');
 if(_m && !_m.paused){ _m.pause(); _m.currentTime=0; }
 runEncounter(0);
 } else {
 finishDraft(card);
 }
}

function finishDraft(card) {
 G.char.deck=shuffle(G.char.deck);
 saveRun(G.char);
 if(draftCallback){const cb=draftCallback;draftCallback=null;cb(card);}
 else runEncounter(G.encounterIdx);
}

// ── ENCOUNTERS ────────────────────────────────────────────────────
function runEncounter(idx) {
 if(idx>=ENCOUNTERS.length){endVictory();return;}
 G.encounterIdx=idx; G.char.checkpoint=idx; saveRun(G.char);
 const enc=ENCOUNTERS[idx];
 if(enc.type==='encounter') showCombatScreen(enc);
 else showAdventureScreen(enc);
}

function showAdventureScreen(enc) {
 show('screen-adventure');
 // Play battle music for story/encounter beats too
 if(window._titleMusicUnlocked && window._runStarted) {
 playBattleMusic(false);
 }
 renderSidebar();
 const typeMap={story:'badge-story',skill_check:'badge-skill'};
 const typeLabel={story:'STORY',skill_check:'SKILL CHECK'};
 const badge=$('enc-badge');
 if(badge){badge.className='quest-type-badge '+(typeMap[enc.type]||'badge-story');badge.textContent=typeLabel[enc.type]||enc.type;}
 if($('enc-title-icon'))$('enc-title-icon').textContent=enc.icon||'⚔️';
 if($('enc-title-text'))$('enc-title-text').textContent=enc.title||'';
 const textEl=$('enc-text');
 if(textEl)textEl.textContent=enc.text||'';
 const choicesEl=$('enc-choices');
 if(!choicesEl)return;
 choicesEl.innerHTML='';
 if(!enc.choices||!enc.choices.length){
 const btn=document.createElement('div');
 btn.className='choice-option';
 btn.innerHTML='<div class="choice-bullet">▶</div><div><span class="choice-text">Continue deeper...</span></div>';
 btn.onclick=()=>runEncounter(G.encounterIdx+1);
 choicesEl.appendChild(btn);
 return;
 }
 enc.choices.forEach((ch,i)=>{
 const div=document.createElement('div');
 div.className='choice-option';
 // Build reward/consequence preview
 let stakeHtml='';
 if(ch.skill){
 const out=enc.outcomes[i];
 const sfx=out?.successEffect, ffx=out?.failEffect;
 const sfxStr=sfx?Object.entries(sfx).map(([k,v])=>{
 if(k==='hp') return v>0?`+${v} HP`:`${v} HP`;
 if(k==='gold') return v>0?`+${v}g`:`${v}g`;
 if(k==='rollBonus') return v>0?`+${v} rolls`:`${v} rolls`;
 if(k==='dmgBonus') return v>0?`+${v} dmg`:`${v} dmg`;
 if(k==='stealth') return 'Stealth';
 if(k==='nextCombatRollBonus') return `+${v} next combat`;
 if(k==='luckCharges') return `+${v} lucky`;
 return '';
 }).filter(Boolean).join(', '):'';
 const ffxStr=ffx?Object.entries(ffx).map(([k,v])=>{
 if(k==='hp') return v>0?`+${v} HP`:`${v} HP`;
 if(k==='gold') return v>0?`+${v}g`:`${v}g`;
 if(k==='rollBonus') return v>0?`+${v} rolls`:`${v} rolls`;
 if(k==='dmgBonus') return v>0?`+${v} dmg`:`${v} dmg`;
 return '';
 }).filter(Boolean).join(', '):'';
 if(sfxStr||ffxStr) stakeHtml=`<div style="display:flex;gap:8px;margin-top:4px;flex-wrap:wrap">
 ${sfxStr?`<span style="font-family:var(--font-pixel);font-size:5px;color:var(--hp-full);background:rgba(40,200,80,0.1);border:1px solid rgba(40,200,80,0.3);padding:1px 5px;border-radius:2px">✓ ${sfxStr}</span>`:''}
 ${ffxStr?`<span style="font-family:var(--font-pixel);font-size:5px;color:var(--dmg-col);background:rgba(200,60,60,0.1);border:1px solid rgba(200,60,60,0.3);padding:1px 5px;border-radius:2px">✗ ${ffxStr}</span>`:''}
 </div>`;
 }
 div.innerHTML=`
 <div class="choice-bullet">▶</div>
 <div style="flex:1">
 <span class="choice-text">${ch.text}</span>
 ${ch.skill?`<span class="choice-skill-tag">${ch.skill} Check — DC ${ch.dc}</span>`:''}
 ${stakeHtml}
 </div>`;
 div.onclick=()=>resolveChoice(enc,ch,i);
 choicesEl.appendChild(div);
 });
}

function applyChoiceEffect(effect) {
 if(!effect) return [];
 const msgs = [];
 if(effect.hp) { G.char.hp=Math.max(1,Math.min(G.char.maxHP,G.char.hp+effect.hp)); msgs.push(effect.hp>0?`+${effect.hp} HP`:`${effect.hp} HP`); }
 if(effect.gold) { G.char.gold=Math.max(0,(G.char.gold||0)+effect.gold); G.char.runGold=(G.char.runGold||0)+Math.max(0,effect.gold); msgs.push(effect.gold>0?`+${effect.gold}g`:`${effect.gold}g`); }
 if(effect.rollBonus){ G.char.rollBonus=(G.char.rollBonus||0)+effect.rollBonus; msgs.push(effect.rollBonus>0?`+${effect.rollBonus} to all rolls`:`${effect.rollBonus} to all rolls`); }
 if(effect.dmgBonus) { G.char.dmgBonus=(G.char.dmgBonus||0)+effect.dmgBonus; msgs.push(effect.dmgBonus>0?`+${effect.dmgBonus} damage`:`${effect.dmgBonus} damage`); }
 if(effect.extraDraw){ G.char.extraDraw=(G.char.extraDraw||0)+effect.extraDraw; msgs.push(`+${effect.extraDraw} card draw`); }
 if(effect.stealth) { G.char.statusEffects=G.char.statusEffects||[]; G.char.statusEffects.push({id:'stealth',stacks:1}); msgs.push('Gain Stealth'); }
 if(effect.luckCharges){ G.char._luckCharges=(G.char._luckCharges||0)+effect.luckCharges; msgs.push(`+${effect.luckCharges} lucky roll${effect.luckCharges!==1?'s':''}`); }
 if(effect.nextCombatRollBonus){ G.char._nextCombatRollBonus=(G.char._nextCombatRollBonus||0)+effect.nextCombatRollBonus; msgs.push(`+${effect.nextCombatRollBonus} to all rolls in next combat`); }
 return msgs;
}

function resolveChoice(enc, choice, idx) {
 if(!G.char) return;
 let title, body, effectMsgs=[];
 if(!choice.skill){
 const out=enc.outcomes[idx];
 title='You press on...'; body=out?.result||'';
 effectMsgs=applyChoiceEffect(out?.effect);
 } else {
 const roll=d20(), bonus=(G.char.rollBonus||0)+(G.char._luckCharges>0?1:0), total=roll+bonus;
 if(G.char._luckCharges>0) G.char._luckCharges--;
 const success=total>=choice.dc;
 const out=enc.outcomes[idx];
 title=success
 ?`✅ Success! (Rolled ${roll}${bonus?'+'+bonus+' = '+total:''} vs DC ${choice.dc})`
 :`❌ Failed (Rolled ${roll}${bonus?'+'+bonus+' = '+total:''} vs DC ${choice.dc})`;
 body=success?(out?.success||''):(out?.fail||'');
 effectMsgs=applyChoiceEffect(success?out?.successEffect:out?.failEffect);
 }
 if(effectMsgs.length) body+=`\n\n[ ${effectMsgs.join(' · ')} ]`;
 saveRun(G.char);
 modal(title, body, 'Continue', ()=>runEncounter(G.encounterIdx+1));
}

function renderSidebar() {
 const c=G.char, cls=CLASSES[c.className];
 const xpN=xpToNextLevel(c.level)||9999;
 const se=(id,v)=>{const el=$(id);if(el)el.textContent=v;};
 const sh=(id,v)=>{const el=$(id);if(el)el.innerHTML=v;};
 se('sb-icon',cls.icon); se('sb-name',c.name); se('sb-class',`${c.className} · Lv${c.level}`);
 se('sb-hp-label-r',`${c.hp}/${c.maxHP}`);
 sh('sb-hp-bar',barHTML(c.hp,c.maxHP,'bar-hp'));
 se('sb-xp-label-r',`${c.xp}/${xpN}`);
 sh('sb-xp-bar',barHTML(c.xp,xpN,'bar-xp'));
 se('sb-gold',c.gold+'g');

 // Deck pills — name + tier + type + brief effect
 const pills=$('sb-deck-pills');
 if(pills){
 pills.innerHTML='';
 // Count duplicates
 const counts={};
 c.deck.forEach(id=>{const card=getCardById(id);if(card)counts[card.name]=(counts[card.name]||0)+1;});
 const seen={};
 c.deck.forEach(id=>{
 const card=getCardById(id);
 if(!card||seen[card.name])return;
 seen[card.name]=true;
 const count=counts[card.name];
 const tierLabel=TIER_ROMAN[card.tier]||'';
 const typeIcon=TYPE_ICONS[card.type]||'';
 const effect=card.hit?card.hit.slice(0,55)+(card.hit.length>55?'…':''):'';
 const p=document.createElement('div');
 p.className='sb-card-row';
 p.innerHTML=`
 <div class="sb-card-header">
 <span class="sb-card-name">${count>1?`×${count} `:''}${card.name}</span>
 <span class="sb-card-badges">${typeIcon} <span class="sb-card-tier">T${tierLabel}</span></span>
 </div>
 <div class="sb-card-effect">${effect}</div>
 <div class="sb-card-inspect-hint">tap to inspect</div>`;
 p.style.cursor='pointer';
 p.onclick=()=>showCardInspect(card.id);
 pills.appendChild(p);
 });
 }

 // Equipment
 const eqEl=$('sb-equipment');
 if(eqEl){
 const eq=c.equipment||{};
 const slots=[{key:'weapon',icon:'⚔️',label:'Weapon'},{key:'offhand',icon:'🛡️',label:'Off-hand'},{key:'armor',icon:'🧥',label:'Armor'},{key:'trinket',icon:'💎',label:'Trinket'}];
 eqEl.innerHTML=slots.map(s=>{
 const item=eq[s.key];
 const statsStr=item?.stats?Object.entries(item.stats).map(([k,v])=>'+'+v+' '+k).join(' '):'';
 return `<div class="sb-equip-row${item?'':' sb-equip-empty'}">
 <span class="sb-equip-icon">${item?.icon||s.icon}</span>
 <div class="sb-equip-info">
 <span class="sb-equip-name">${item?.name||s.label+' — empty'}</span>
 ${item?.desc?`<span class="sb-equip-desc">${item.desc}</span>`:''}
 ${statsStr?`<span class="sb-equip-stats">${statsStr}</span>`:''}
 </div></div>`;
 }).join('');
 }

 // Inventory
 const inv=c.inventory||[];
 const invLabel=$('sb-inv-label');
 const invEl=$('sb-inventory');
 if(invLabel) invLabel.style.display=inv.length?'':'none';
 if(invEl){
 invEl.innerHTML=inv.map(item=>`
 <div class="sb-inv-row">
 <span class="sb-inv-icon">${item.icon}</span>
 <div class="sb-inv-info">
 <span class="sb-inv-name">${item.name}</span>
 <span class="sb-inv-desc">${item.desc||''}</span>
 </div></div>`).join('');
 }
}


// ── CARD INSPECT OVERLAY ──────────────────────────────────────────
function showCardInspect(cardId) {
 const card=getCardById(cardId);
 if(!card)return;
 const existing=document.getElementById('card-inspect-overlay');
 if(existing)existing.remove();

 const talent=CARD_TALENTS[card.name];
 const tc=talent?(TALENT_COLORS[talent]||null):null;
 const artIcon={
  Fire:'🔥',Ice:'❄️',Arcane:'🔮',
  Feral:'🐾',Balance:'🌙',Restoration:'🌿',
  Assassination:'🗡️',Combat:'⚔️',Subtlety:'👤'
 }[talent]||TYPE_ICONS[card.type]||'✦';
 const artBg=tc?`${tc}18`:'rgba(180,140,40,0.1)';
 const artBrd=tc?`${tc}33`:'rgba(180,140,40,0.15)';
 const tierLabel=TIER_ROMAN[card.tier]||'';

 const overlay=document.createElement('div');
 overlay.id='card-inspect-overlay';
 overlay.style.cssText='position:fixed;inset:0;z-index:700;background:rgba(0,0,0,0.82);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;cursor:pointer';

 const cardEl=document.createElement('div');
 cardEl.className='ability-card card-inspect-large';
 cardEl.innerHTML=`
 <div style="background:${artBg};border-bottom:1px solid ${artBrd};padding:16px 8px 10px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:4px;position:relative">
  <div style="font-size:36px;line-height:1;filter:drop-shadow(0 1px 6px rgba(0,0,0,0.5))">${artIcon}</div>
  <div style="font-family:var(--font-pixel);font-size:7px;color:rgba(255,255,255,0.35)">${(talent||card.type).toUpperCase()}</div>
  <div style="position:absolute;top:5px;right:8px;font-family:var(--font-pixel);font-size:7px;color:rgba(255,255,255,0.35)">${tierLabel}</div>
 </div>
 <div class="card-header">
  <div class="card-name" style="flex:1">${card.name}</div>
 </div>
 ${talent?`<div class="card-talent-bar" style="background:${tc}22;border-bottom:1px solid ${tc}44"><span class="card-talent-label" style="color:${tc}">${talent}</span></div>`:''}
 <div class="card-body">
  <div class="card-roll-req">Need ${card.risk>0?card.risk+'+':'Special'}</div>
  <div class="card-effect-text">${card.hit||''}</div>
  ${card.crit?`<div class="card-crit-line">★ CRIT: ${card.crit}</div>`:''}
  ${card.miss?`<div class="card-fail-line" style="color:var(--parch-text-dim)">MISS: ${card.miss}</div>`:''}
  ${card.critmiss?`<div class="card-fail-line">☠ CRIT MISS: ${card.critmiss}</div>`:''}
 </div>
 `;

 const hint=document.createElement('div');
 hint.textContent='Click anywhere to close';
 hint.style.cssText='font-family:var(--font-pixel);font-size:8px;color:rgba(255,255,255,0.35);margin-top:4px';

 overlay.appendChild(cardEl);
 overlay.appendChild(hint);
 overlay.onclick=()=>overlay.remove();
 cardEl.onclick=e=>{e.stopPropagation();overlay.remove();};
 document.body.appendChild(overlay);
}

// ── COMBAT SCREEN ─────────────────────────────────────────────────
function showCombatScreen(enc) {
 show('screen-combat');
 // Start battle music (boss music for VanCleef encounter)
 if(window._titleMusicUnlocked) {
 const isVanCleef = enc && enc.enemies && enc.enemies.includes('edwinVanCleef');
 playBattleMusic(isVanCleef);
 }
 // Reset card-granted bonuses each combat — only permanent bonuses persist
 G.char.dmgBonus = G.char._perkDmgBonus || 0;
 G.char.dmgReduction = G.char._perkDmgReduction || 0;
 G.char._astralBonusDmg = 0;
 G.char._catFormBonus = 0;
 G.char.currentForm = null; // forms reset each combat
 G.char.critThreshold = (G.char._eqCritThresh ? 20 + G.char._eqCritThresh : 20) - (G.char._perkCritBonus || 0); // reset crit threshold (equipment persists)
 G.char._treeOfLifeActive = false;
 G.char._hotBonus = 0; // tree form HoT bonus resets
 // Apply equipment start-of-combat effects
 if(G.char._eqStartStealth){
 G.char.statusEffects=G.char.statusEffects||[];
 G.char.statusEffects.push({id:'stealth',stacks:1});
 log('🧣 Shadow Cloak: entered combat in Stealth!','log-info');
 }
 // Apply any pending next-combat bonuses from story choices
 if(G.char._nextCombatRollBonus){
 G.char.rollBonus=(G.char.rollBonus||0)+G.char._nextCombatRollBonus;
 if(G.char._nextCombatRollBonus>0) log(`📜 Story bonus: +${G.char._nextCombatRollBonus} to all rolls this combat!`,'log-info');
 else log(`📜 Story penalty: ${G.char._nextCombatRollBonus} to all rolls this combat.`,'log-system');
 G.char._nextCombatRollBonus=0;
 }
 const enemyDefs=enc.enemies.map(id=>{
 const e=ENEMIES[id];
 if(!e)return null;
 return {...e,hp:e.maxHP,turnCount:0,debuffs:[],statusEffects:[],currentWeapon:null,_vcPhasesFired:[]};
 }).filter(Boolean);
 // Rage resets at the start of each battle
 if(G.char.className==='Warrior') G.char._rageCounters=0;

 C={
 enc, enemies:enemyDefs,
 deck:shuffle([...G.char.deck]), discard:[], hand:[],
 selectedCardId:null, targetIdx:0,
 turn:1, phase:'draw', kills:0,
 // combat flags
 playerTargeted:false,
 thornsActive:null, activeHoTs:[],
 extraAllowedThisTurn:0, cardsPlayedThisTurn:0,
 bonusRoll:0, doubleDmgNext:false,
 drawPenalty:0, bonusDrawNextTurn:0,
 skipNextPlayerTurn:false,
 preventAttackDamageThisTurn:false,
 _heroAbilityUsed:false,
 comboPointsToSpend:0,
 rageToSpend:0,
 _hudLastHp:G.char.hp,
 _skipTurnEffectsApplied:false,
 _dmgDoubleActive:false,
 _treants:0, _pets:[],
 _sprintRollBonus:0,
 _waitingForPicker:false,
 _lastTurnDamageTaken:0,
 _dealtFireThisTurn:false, _dealtFireLastTurn:false,
 _hotStreakActive:false, _hotStreakCounters:0,
 _nextFireDmgBonus:0, _nextFireDouble:false, _nextFireAutoHit:false, _nextFireAutoCrit:false,
 _nextArcaneDmgBonus:0, _nextIceDmgBonus:0,
 _shatterActive:false, _icyVeinsActive:false, _icyVeinsUsedThisTurn:false,
 _waterElementalTurns:0, _meteorRepeat:false,
 _astralAlignActive:false, _astralAlignHits:0,
 _bladeStormTurns:0, _infernoTurns:0, _reignOfFireActive:false,
 _felArmorActive:false, _soulStoneActive:false, _soulSiphonTargetIdx:-1,
 _havocTargetIdx:-1, _havocInProgress:false, _unstablePowerActive:false,
 _ancestralSpiritTurns:0, _manaSpringTurns:0, _graceOfAirTurns:0,
 _iceFuryNextDoubleCount:0, _naturesGuardianArmed:false, _naturesGuardianFired:false,
 _aspectNatureActive:false, _aspectFireActive:false, _aspectIceActive:false, _aspectAscendedActive:false,
 _apexPredatorActive:false, _doubleTapActive:false, _lockAndLoadActive:false,
 _guerrillaTacticsActive:false, _scentOfBloodActive:false, _thrillOfHuntActive:false,
 _damnationActive:false, _blackOutActive:false, _innerFireCharges:0, _lightwellActive:false,
 _armiesOfHellActive:false, _temporalAbstractionActive:false, _temporalDmgBuffer:0,
 _timeShudderActive:false, _timeShudderSkipTurn:false, _healedThisTurn:false,
 _hunterMarkTargetIdx:-1, _carefulAimActive:false, _frostTrapActive:false, _frostTrapPersists:false,
 _explosiveTrapActive:false, _explosiveTrapDoubleDmg:false, _camouflageNextDouble:false, _camouflageHalfDmg:false,
 _killerInstinctActive:false, _beastialWrathActive:false,
 _sweepingStrikesActive:false, _devastateActive:false, _angerMgmtActive:false,
 _indomitableActive:false, _indomitableMinHP:1, _dieBySwordActive:false,
 _siphonLifeActive:false, _unstableAfflictionTargetIdx:-1, _soulHarvestActive:false, _soulHarvestCharges:0,
 _hellsAdvocateCharges:0, _consecrationActive:false, _shadowFiendTurns:0,
 _evangelismActive:false, _divineSpiritActive:false, _ritualOfDoomActive:false,
 _tigersRuryActive:false, _ironHideActive:false,
 _maelstromActive:false, _maelstromCharges:0, _gravityBeamCounters:0, _eruptionHitThisTurn:false,
 _shredOverrideFired:false,
 };

 if(G.char.healOnCombatStart) G.char.hp=Math.min(G.char.maxHP,G.char.hp+G.char.healOnCombatStart);
 $('combat-log').innerHTML='';
 log(`⚔️ ${enc.title} — Round 1`,'log-info');
 enemyDefs.forEach(e=>log(`${e.portrait} ${e.name} enters! (${e.maxHP} HP)`,'log-system'));
 renderCombat();
 doDraw();
}

function renderCombat() {
 renderEnemies();
 renderHUD();
 renderBuffZone();
 renderHand();
 renderActionBar();
}

// ── ENEMY FRAMES ──────────────────────────────────────────────────
function renderEnemies() {
 const row=$('enemy-row');
 row.innerHTML='';

 // Pet frame (between player and enemies)
 (C._pets||[]).filter(p=>p.hp>0).forEach(p=>{
 const def=getPetDef(p.id);
 const hpPct=Math.max(0,Math.min(100,(p.hp/p.maxHP)*100));
 const hpCol=hpPct>60?'var(--hp-full)':hpPct>30?'var(--hp-mid)':'var(--hp-low)';
 const flags=[];
 if(C._petShellActive&&p.id==='moonui')flags.push('🛡 Shell');
 if(C._petReflectActive&&p.id==='moonui')flags.push('↩ Reflect');
 if(C._tigerDoubleNext&&p.id==='bhengalesh')flags.push('⚡ Next x2');
 if(p.id==='priestShadowFiend')flags.push(`🌑 ${p.counters||0}/5 counters`);
 if(p.id==='shamanCloudBurst')flags.push(`☁️ ${p.counters||0} counters`);
 if(def&&def.canToggleRedirect)flags.push(p._redirectActive?'🛡 Redirect ON':'⚪ Redirect OFF');
 if(p.id==='warlockInfernal')flags.push(`⏱ Turn ${p._turnCount||0}/3`);
 const rollRows=(def&&def.rollTable||[]).map(([r,t])=>`<div style="display:flex;gap:6px;line-height:1.35"><span style="color:var(--chrome-gold-hi);min-width:30px;flex:none">${r}</span><span style="color:var(--parch-text-dim)">${t}</span></div>`).join('');
 const fixedLine=def&&def.fixedAction?`<div style="color:var(--parch-text-dim);line-height:1.4;text-align:center">${def.fixedAction}</div>`:'';
 const frame=document.createElement('div');
 frame.className='pet-frame';
 frame.style.cssText='display:flex;flex-direction:column;align-items:center;padding:10px 14px;border:2px solid #60c060;border-radius:4px;background:rgba(40,80,40,0.25);min-width:200px;max-width:220px;flex:0 0 auto;order:-1';
 frame.innerHTML=`
 <div style="font-size:32px;line-height:1">${p.icon}</div>
 <div style="font-family:var(--font-pixel);font-size:7px;color:#a0e0a0;margin-top:4px;text-align:center">${p.name}</div>
 <div style="font-family:var(--font-pixel);font-size:6px;color:var(--parch-text-dim);margin-top:2px">${p.species} · ALLY</div>
 <div style="width:100%;height:8px;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.15);border-radius:2px;margin-top:6px;overflow:hidden"><div style="width:${hpPct}%;height:100%;background:${hpCol};transition:width 0.2s"></div></div>
 <div style="font-family:var(--font-pixel);font-size:7px;color:${hpCol};margin-top:2px">${p.hp}/${p.maxHP} HP</div>
 ${flags.length?`<div style="font-family:var(--font-pixel);font-size:6px;color:var(--chrome-gold-hi);margin-top:4px;text-align:center">${flags.join(' · ')}</div>`:''}
 ${rollRows?`<div style="margin-top:8px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.1);width:100%"><div style="font-family:var(--font-pixel);font-size:5px;color:var(--chrome-gold-rim);letter-spacing:0.1em;margin-bottom:4px;text-align:center">TURN ROLL</div><div style="font-family:var(--font-pixel);font-size:6px;display:flex;flex-direction:column;gap:3px">${rollRows}</div></div>`:''}
 ${fixedLine?`<div style="margin-top:8px;padding-top:6px;border-top:1px solid rgba(255,255,255,0.1);width:100%"><div style="font-family:var(--font-pixel);font-size:5px;color:var(--chrome-gold-rim);letter-spacing:0.1em;margin-bottom:4px;text-align:center">EACH TURN</div><div style="font-family:var(--font-pixel);font-size:6px">${fixedLine}</div></div>`:''}
 ${def&&def.canToggleRedirect?`<button class="btn btn-sm" style="margin-top:8px;width:100%;font-size:6px;padding:4px" onclick="togglePetRedirect('${p.id}')">${p._redirectActive?'Disable Redirect':'Enable Redirect'}</button>`:''}
 ${def&&def.canSacrifice&&p.id==='warlockVoidWalker'?`<button class="btn btn-primary btn-sm" style="margin-top:6px;width:100%;font-size:6px;padding:4px" onclick="sacrificeVoidWalker()">Sacrifice (heal 2× HP)</button>`:''}
 ${def&&def.canSacrifice&&p.id==='shamanCloudBurst'?`<button class="btn btn-primary btn-sm" style="margin-top:6px;width:100%;font-size:6px;padding:4px" onclick="sacrificeCloudBurst()">Sacrifice (heal ${p.counters||0} HP)</button>`:''}
 `;
 row.appendChild(frame);
 });

 function sc(icon,label,tip,type=''){
 const lines=tip.split('\n');
 const name=lines[0];
 const desc=lines.length>1?lines.slice(1).join(' '):'';
 // Only show label if it's a number/symbol — skip pure letter abbreviations (SEAR, CAT, etc.)
 const showLabel=label!==''&&!/^[A-Z]+$/.test(String(label));
 return `<div class="sc sc-${type}"><div class="sc-header">${icon}<span class="sc-name">${name}</span>${showLabel?'<span class="sc-count">'+label+'</span>':''}</div>${desc?'<div class="sc-desc">'+desc+'</div>':''}`;
 }


 // Build render order: living boss in centre, everything else split left and right
 let _centerIdx=C.enemies.findIndex(e=>e.type==='boss'&&e.hp>0);
 if(_centerIdx===-1) _centerIdx=C.enemies.findIndex(e=>e.type==='boss');
 let _renderOrder;
 if(_centerIdx===-1){
  _renderOrder=C.enemies.map((e,i)=>({e,i}));
 } else {
  const _others=C.enemies.map((e,i)=>({e,i})).filter(x=>x.i!==_centerIdx);
  const _boss={e:C.enemies[_centerIdx],i:_centerIdx};
  const _lc=Math.floor(_others.length/2);
  _renderOrder=[..._others.slice(0,_lc),_boss,..._others.slice(_lc)];
 }

 // Enemy frames
 _renderOrder.forEach(({e,i})=>{
 const dead=e.hp<=0, targeted=i===C.targetIdx&&!dead, isBoss=e.type==='boss';
 const hpPct=dead?0:Math.max(0,Math.min(100,(e.hp/e.maxHP)*100));
 const hpCol=hpPct>60?'var(--hp-full)':hpPct>30?'var(--hp-mid)':'var(--hp-low)';
 let chips='';
 (e.debuffs||[]).forEach(d=>{
 if(d.id==='ignite'&&d.stacks>0) chips+=sc('🔥',d.stacks,`Ignite (${d.stacks} stack${d.stacks!==1?'s':''})\nTakes ${d.stacks} fire damage per turn.`,'debuff')+'</div>';
 if(d.id==='hemorrhage'&&d.stacks>0) chips+=sc('🩸',d.stacks,`Hemorrhage (${d.stacks})\nDeals ${d.stacks} damage at start of each enemy turn.\\nReduces by 1 stack each turn.`,'debuff')+'</div>';
 if(d.id==='poison'&&d.stacks>0) chips+=sc('☠️',d.stacks,`Poison (${d.stacks})\nTakes ${d.stacks} damage per turn.`,'debuff')+'</div>';
 if(d.id==='marked') chips+=sc('🎯','MARK',`Marked for Death\\nTakes +${d.stacks} damage from all attacks this turn.`,'debuff')+'</div>';
 if(d.id==='freeze') chips+=sc('❄️','FRZE','Frozen\nSkips next attack.','debuff')+'</div>';
 });
 if(e._hunterMarked) chips+=sc('🎯','HMRK',"Hunter's Mark\n+1 ranged damage from you and pets\n+2 to rolls targeting this enemy",'debuff')+'</div>';
 if((e._predatorMark||0)>0) chips+=sc('🎯',`PM${e._predatorMark}`,`Predator's Mark (${e._predatorMark}/3)\n+${e._predatorMark} damage per hit from you`,'debuff')+'</div>';
 if((e._stunnedTurns||0)>0) chips+=sc('💤','STUN',`Stunned (${e._stunnedTurns} turn${e._stunnedTurns!==1?'s':''} left)\nLoses their action each turn.\nStill takes damage from effects.`,'debuff')+'</div>';
 if(e._tookIceDamage) chips+=sc('❄️','ICE','Ice-touched\nIce Lance deals double damage.','debuff')+'</div>';
 if(e.statusEffects?.includes('shield')) chips+=sc('🛡','SHLD','Shielded\nTakes half damage from all sources.','buff')+'</div>';
 if(e.statusEffects?.includes('enrage')) chips+=sc('😡','ENRG','Enraged\nDeals double attack damage.','debuff')+'</div>';
 if(e.surge&&!dead){
 const tts=4-((e.turnCount||0)%4);
 chips+=sc('⚡',`SURGE ${tts}`,`Surge (in ${tts} turn${tts!==1?'s':''})\n${e.surge}`,'surge')+'</div>';
 }
 const tts=e.surge?4-((e.turnCount||0)%4):0;
 const div=document.createElement('div');
 div.className=`enemy-frame ${isBoss?'boss-frame':''} ${targeted?'targeted':''} ${dead?'defeated':''}`;
 div.dataset.enemyIdx=i;
 div.innerHTML=`
 <div class="enemy-header-row">
 <div class="enemy-portrait">${e.portrait}</div>
 <div>
   <div class="enemy-name">${e.name}</div>
   <div class="enemy-tier-badge tier-${e.type||'minion'}">${(e.type||'MINION').toUpperCase()}</div>
 </div>
 </div>
 ${dead?'<div class="enemy-hp-nums" style="color:var(--miss-col);font-family:var(--font-pixel);font-size:9px;margin:6px 0">DEFEATED</div>':`
 <div class="enemy-stat-row">
 <span class="enemy-stat">♥ <b>${e.hp}</b>/${e.maxHP}</span>
 <span class="enemy-atk-badge" title="Deals ${e.atk} damage per attack">
 <span class="enemy-atk-icon">⚔️</span>
 <span class="enemy-atk-val">${e.atk}</span>
 <span class="enemy-atk-lbl">DMG</span>
 </span>
 </div>
 <div class="enemy-bar-wrap"><div class="enemy-bar-fill" style="width:${hpPct}%;background:${hpCol}"></div></div>
 ${chips?`<div class="status-chips">${chips}</div>`:''}
 ${e.ongoing?`
 <div class="enemy-info-block enemy-ongoing-block">
   <div class="enemy-info-label">↻ ONGOING</div>
   <div class="enemy-info-text">${e.ongoing}</div>
 </div>`:''}
 ${e.surge?`
 <div class="enemy-info-block enemy-surge-block">
   <div class="enemy-info-label">⚡ SURGE <span class="enemy-surge-timer">in ${tts} turn${tts!==1?'s':''}</span></div>
   <div class="enemy-info-text">${e.surge}</div>
 </div>`:''}
 ${e.id==='mrSmite'&&!dead?`
 <div class="enemy-info-block" style="border-top:1px solid rgba(200,160,40,0.25);margin-top:6px;padding-top:6px">
   <div class="enemy-info-label" style="color:#c8a028;margin-bottom:6px">⚔️ WEAPON ROTATION</div>
   ${(e.weaponRotation||[]).map(w=>{
     const we=e.weaponEffects?.[w];
     const active=e.currentWeapon===w;
     return `<div style="display:flex;align-items:flex-start;gap:5px;margin-bottom:4px;padding:3px 5px;border-radius:2px;background:${active?'rgba(200,160,40,0.18)':'rgba(0,0,0,0.2)'};border:1px solid ${active?'rgba(200,160,40,0.5)':'rgba(255,255,255,0.05)'}">
       <span style="font-family:var(--font-pixel);font-size:6px;color:${active?'#f9c060':'var(--parch-text-dim)'};white-space:nowrap;padding-top:1px">${active?'▶ ':'○ '}${w}</span>
       <span style="font-size:10px;color:${active?'var(--parch-text)':'var(--parch-text-dim)'};line-height:1.4">${we?we.desc:''}</span>
     </div>`;
   }).join('')}
 </div>`:''}
 `}
 `;
 if(!dead)div.onclick=()=>{setTarget(i);C.playerTargeted=false;renderEnemies();};
 row.appendChild(div);
 });
 if(C.enemies[C.targetIdx]?.hp<=0){const live=C.enemies.findIndex(e=>e.hp>0);if(live>=0)C.targetIdx=live;}
}

function setTarget(i){if(C.enemies[i]?.hp>0){C.targetIdx=i;renderEnemies();}}

// ── HUD ───────────────────────────────────────────────────────────
function renderHUD() {
 const c=G.char, cls=CLASSES[c.className], bar=$('player-hud');
 if(!bar)return;
 // Heal float: detect HP gain since last render
 if(C&&typeof C._hudLastHp==='number'&&c.hp>C._hudLastHp){
 const _healAmt=c.hp-C._hudLastHp;
 spawnPlayerFloat(`+${_healAmt}`,'heal');
 G.char.runHealingDone=(G.char.runHealingDone||0)+_healAmt;
 // Cloud Burst Totem: +1 counter each time you heal
 (C._pets||[]).filter(p=>p.id==='shamanCloudBurst'&&p.hp>0).forEach(p=>{
 p.counters=(p.counters||0)+1;
 log(`☁️ Cloud Burst Totem gains a counter (${p.counters}).`,'log-info');
 });
 }
 if(C) C._hudLastHp=c.hp;
 const hpPct=Math.max(0,Math.min(100,c.hp/c.maxHP*100));
 const hpCol=hpPct>60?'var(--hp-full)':hpPct>30?'var(--hp-mid)':'var(--hp-low)';
 const level=c.level||1;

 // Class stat
 let classStat='';
 if(c.className==='Rogue'){
 const cp=c.comboPoints||0;
 const pips=Array.from({length:5},(_,i)=>
 `<div style="width:10px;height:10px;border-radius:50%;border:1px solid rgba(200,80,80,0.6);background:${i<cp?'var(--rogue-col)':'rgba(0,0,0,0.4)'}"></div>`
 ).join('');
 classStat=`<div style="display:flex;align-items:center;gap:5px;cursor:help" title="Combo Points: ${cp}/5 — spend on Eviscerate, Rupture, Coup de Grâce, Blade Flurry">
 <span style="font-family:var(--font-pixel);font-size:5px;color:var(--rogue-col)">CP</span>
 <div style="display:flex;gap:3px">${pips}</div>
 <span style="font-family:var(--font-pixel);font-size:7px;color:var(--rogue-col);font-weight:bold">${cp}</span>
 </div>`;
 }
 if(c.className==='Druid'&&c.currentForm) classStat=`<div class="hud-class-stat" style="color:var(--druid-col)" title="Current form">${c.currentForm.toUpperCase()}</div>`;
 if(c.className==='Mage'){
 const ign=C.enemies?C.enemies.reduce((s,e)=>{const ig=(e.debuffs||[]).find(d=>d.id==='ignite');return s+(ig?.stacks||0);},0):0;
 if(ign>0) classStat=`<div class="hud-class-stat" style="color:var(--mage-col)" title="Ignite stacks on enemies">🔥 ${ign}</div>`;
 }

 // Compact gear row (replaces old gear chips)
 const eq=c.equipment||{};
 const _slotDefs=[{k:'weapon',i:'⚔️'},{k:'offhand',i:'🛡️'},{k:'armor',i:'🧥'},{k:'trinket',i:'💎'}];
 const gearRowHtml=`<div class="hud-gear-row">${_slotDefs.map(s=>{
  const item=eq[s.k];
  const rar=item?.rarity&&RARITY[item.rarity]?RARITY[item.rarity]:null;
  return `<div class="hud-eq-slot${item?' filled':''}" onclick="openCombatGearPanel('${s.k}')" style="${rar?'border-color:'+rar.border+';':''}">
   <span class="hud-eq-icon">${item?.icon||s.i}</span>
   <span class="hud-eq-name" style="${rar?'color:'+rar.color:''}">${item?.name||'—'}</span>
  </div>`;}).join('')}
 </div>`;

 // Stat chips
 const dmg=(c.dmgBonus||0)+(c._eqDmg||0)+(c._eqDmgAll||0), roll=(c.rollBonus||0)+(c._eqRoll||0);
 const armorTotal=Math.max(0,(c._eqArmor||0)+(C._angerMgmtArmor||0)-(C._shredderArmorDebuff||0));
 const drTotal=(c.dmgReduction||0);
 const critThresh=c.critThreshold||20;
 const drawPerTurn=3+(c.extraDraw||0)+(c._eqDraw||0);
 const stats=[
 {v:C.turn||0, l:'RND', sub:'round'},
 {v:C.deck?.length||0, l:'DECK', sub:`${C.discard?.length||0} discard`},
 {v:dmg?'+'+dmg:'—', l:'DMG', hi:!!dmg, sub:dmg?`perks +${c.dmgBonus||0} · all +${(c._eqDmg||0)+(c._eqDmgAll||0)} · typed→pills`:null},
 {v:roll?'+'+roll:'—', l:'ROLL', hi:!!roll, sub:roll?`perks +${c.rollBonus||0} · gear +${c._eqRoll||0}`:null},
 {v:armorTotal||'—', l:'ARMOR', hi:!!armorTotal, sub:armorTotal?`gear ${c._eqArmor||0}${(C._angerMgmtArmor||0)?` · +${C._angerMgmtArmor} anger`:''}${(C._shredderArmorDebuff||0)?` · -${C._shredderArmorDebuff} shredded`:''} (attack dmg only)`:(C._shredderArmorDebuff||0)?`-${C._shredderArmorDebuff} shredded`:'no armor'},
 {v:drTotal||'—', l:'DR', hi:!!drTotal, sub:drTotal?`reduces ALL damage (ability + attack)`:'no reduction'},
 {v:critThresh+'+', l:'CRIT', hi:critThresh<20, sub:critThresh<20?`${20-critThresh} pts reduced`:'roll to crit'},
 {v:drawPerTurn, l:'DRAW', sub:`cards/turn · +${(c.extraDraw||0)+(c._eqDraw||0)} bonus`},
 {v:c.gold||0, l:'GOLD', gold:true, sub:'spend at shop'},
 {v:c.xp||0, l:'XP', sub:`next lv: ${xpToNextLevel(level)||'MAX'}`},
 ];
 const statsHtml=stats.map(s=>`<div class="hud-stat-chip">
 <span class="hud-stat-v" style="${s.gold?'color:var(--chrome-gold)':s.hi?'color:var(--crit-col)':''}">${s.v}</span>
 <span class="hud-stat-l">${s.l}</span>
 ${s.sub?`<span class="hud-stat-sub">${s.sub}</span>`:''}
 </div>`).join('');

 // Active combat trackers (shield wall, pet, stance, rage)
 const trackers=[];
 if((C._shieldWallCounters||0)>0) trackers.push(`<div class="hud-tracker hud-tracker-shield">🛡️ Shield Wall <span class="hud-tracker-val">${C._shieldWallCounters}</span><span class="hud-tracker-sub">blocks remaining</span></div>`);
 if(c._petActive) trackers.push(`<div class="hud-tracker hud-tracker-buff">🐾 ${c._petActive}<span class="hud-tracker-sub">${c._petBonus||''}</span></div>`);
 if(c._stance) trackers.push(`<div class="hud-tracker hud-tracker-buff">⚔️ ${c._stance.charAt(0).toUpperCase()+c._stance.slice(1)} Stance</div>`);
 if((c._rageCounters||0)>0) trackers.push(`<div class="hud-tracker hud-tracker-buff">💢 Rage <span class="hud-tracker-val">${c._rageCounters}</span></div>`);
 if(C._divineShieldActive) trackers.push(`<div class="hud-tracker hud-tracker-shield">✨ Divine Shield<span class="hud-tracker-sub">all damage blocked</span></div>`);
 if(c._treeOfLifeActive) trackers.push(`<div class="hud-tracker hud-tracker-buff">🌿 Tree of Life<span class="hud-tracker-sub">+${c._hotBonus||1} to all healing</span></div>`);
 if(C._growlDebuff&&C._growlDebuff.turns>0) trackers.push(`<div class="hud-tracker hud-tracker-shield">🐻 Growl <span class="hud-tracker-val">-${C._growlDebuff.amount} atk</span><span class="hud-tracker-sub">${C._growlDebuff.turns} turn${C._growlDebuff.turns!==1?'s':''} remaining</span></div>`);
 const trackersHtml=trackers.length?`<div class="hud-trackers">${trackers.join('')}</div>`:'';

 // Hero ability indicator
 let heroLine='';
 if(c.heroId){
 const hero=getHero(c.heroId);
 if(hero){
 const used=C._heroAbilityUsed;
 heroLine=`<div class="hud-hero-ability${used?' hud-hero-used':''}">
 <span class="hud-hero-name">${used?'✓':'★'} ${hero.icon} ${hero.abilityName} ${used?'(used)':'(ready)'}</span>
 <span class="hud-hero-desc">${hero.abilityDesc}</span>
 </div>`;
 }
 }

 // Bag button
 const inv=c.inventory||[];
 const bagHtml=`<button class="hud-bag-btn" onclick="openCombatGearPanel()">🎒${inv.length?`<span class="hud-bag-count">${inv.length}</span>`:''}</button>`;

 // Self-targeting click
 const selCard2=C.selectedCardId?getCardById(C.selectedCardId):null;
 const selfTypes=['health','buff','Self','self'];
 const ptActive=(selCard2&&selfTypes.includes(selCard2.type))||C.playerTargeted;
 bar.style.borderColor=ptActive?'var(--heal-col)':'rgba(80,200,80,0.2)';
 bar.style.cursor=selCard2&&selfTypes.includes(selCard2.type)?'pointer':'default';
 bar.onclick=selCard2&&selfTypes.includes(selCard2.type)?()=>{C.playerTargeted=true;renderCombat();}:null;

 // Center HP bar
 const chpEl=$('player-hp-center');
 if(chpEl){
 chpEl.className=`player-hp-center${ptActive?' phc-targeted':''}`;
 chpEl.onclick=selCard2&&selfTypes.includes(selCard2.type)?()=>{C.playerTargeted=true;renderCombat();}:null;
 chpEl.innerHTML=`
 <span class="phc-name">${cls.icon} ${c.name} <span class="phc-lv">Lv${level} ${cls.name}</span></span>
 ${ptActive?'<span class="phc-target-label">❖ TARGET</span>':''}
 <div class="phc-track"><div class="phc-fill" style="width:${hpPct}%;background:${hpCol}"></div></div>
 <span class="phc-nums" style="color:${hpCol}">${c.hp}<span class="phc-max">/${c.maxHP}</span></span>
 `;
 }

 bar.innerHTML=`
 <div class="pb-header">
 <span class="hud-portrait">${cls.icon}</span>
 <div>
  <div class="hud-name">${c.name}</div>
  <div class="hud-lv">Lv${level} ${cls.name}</div>
 </div>
 </div>
 ${classStat}
 ${heroLine}
 ${trackersHtml}
 ${gearRowHtml}
 ${bagHtml}
 <div class="hud-stats">${statsHtml}</div>
 `;
}

function openCombatGearPanel(focusSlot) {
 document.getElementById('combat-gear-panel')?.remove();
 const c=G.char;
 const eq=c.equipment||{};
 const inv=c.inventory||[];
 const maxSlots=getInventoryMaxSlots();

 const overlay=document.createElement('div');
 overlay.id='combat-gear-panel';
 overlay.style.cssText='position:fixed;inset:0;z-index:350;display:flex;pointer-events:all';
 overlay.onclick=(e)=>{ if(e.target===overlay) overlay.remove(); };

 const panel=document.createElement('div');
 panel.className='cgp-panel';

 // Header
 const headerDiv=document.createElement('div');
 headerDiv.className='cgp-header';
 headerDiv.innerHTML=`<span style="font-family:var(--font-pixel);font-size:8px;color:var(--chrome-gold)">⚔ GEAR & INVENTORY</span>
  <button class="btn btn-ghost btn-sm cgp-close" onclick="document.getElementById('combat-gear-panel').remove()">✕</button>`;
 panel.appendChild(headerDiv);

 const body=document.createElement('div');
 body.className='cgp-body';

 // ── EQUIPMENT ──────────────────────────────────────────────────
 const eqHdr=document.createElement('div');
 eqHdr.className='cgp-section-hdr';
 eqHdr.textContent='EQUIPPED GEAR';
 body.appendChild(eqHdr);

 const slotDefs=[{k:'weapon',i:'⚔️',l:'WEAPON'},{k:'offhand',i:'🛡️',l:'OFF-HAND'},{k:'armor',i:'🧥',l:'ARMOR'},{k:'trinket',i:'💎',l:'TRINKET'}];
 slotDefs.forEach(s=>{
  const item=eq[s.k];
  const rar=item?.rarity&&RARITY[item.rarity]?RARITY[item.rarity]:null;
  const statsStr=item?.stats?Object.entries(item.stats).filter(([k,v])=>v&&typeof v==='number').map(([k,v])=>`${v>0?'+':''}${v} ${k}`).join(' · '):'';
  const row=document.createElement('div');
  row.className='cgp-slot'+(item?' filled':'');
  if(rar) row.style.borderColor=rar.border;
  row.innerHTML=`
   <div class="cgp-slot-main">
    <span class="cgp-slot-icon">${item?.icon||s.i}</span>
    <div class="cgp-slot-info">
     <span class="cgp-slot-name" style="${rar?'color:'+rar.color:''}">${item?.name||'— empty —'}</span>
     <span class="cgp-slot-label">${s.l}${rar?' · '+rar.label:''}</span>
    </div>
    ${item?'<span class="cgp-chevron">▾</span>':''}
   </div>
   ${item?`<div class="cgp-slot-detail" style="display:none">
    <div class="cgp-slot-desc">${item.desc}</div>
    ${statsStr?`<div class="cgp-slot-stats" style="${rar?'color:'+rar.color:''}">${statsStr}</div>`:''}
   </div>`:''}`;
  if(item){
   row.style.cursor='pointer';
   row.onclick=()=>{
    const det=row.querySelector('.cgp-slot-detail');
    const chev=row.querySelector('.cgp-chevron');
    const open=det.style.display!=='none';
    det.style.display=open?'none':'block';
    chev.textContent=open?'▾':'▴';
   };
   if(focusSlot===s.k){
    row.querySelector('.cgp-slot-detail').style.display='block';
    row.querySelector('.cgp-chevron').textContent='▴';
   }
  }
  body.appendChild(row);
 });

 // ── INVENTORY ──────────────────────────────────────────────────
 const invHdr=document.createElement('div');
 invHdr.className='cgp-section-hdr';
 invHdr.innerHTML=`INVENTORY <span style="color:var(--parch-text-dim);font-size:5px">(${inv.length}/${maxSlots})</span>`;
 body.appendChild(invHdr);

 if(inv.length===0){
  const empty=document.createElement('div');
  empty.style.cssText='font-family:var(--font-pixel);font-size:6px;color:var(--parch-text-dim);text-align:center;padding:10px 0';
  empty.textContent='No items';
  body.appendChild(empty);
 } else {
  inv.forEach((item,idx)=>{
   const isEquip=!!item.slot;
   const rar=item.rarity&&RARITY[item.rarity]?RARITY[item.rarity]:null;
   const row=document.createElement('div');
   row.className='cgp-inv-row';
   if(rar) row.style.borderColor=rar.border;
   row.innerHTML=`
    <span class="cgp-inv-icon">${item.icon}</span>
    <div class="cgp-inv-info">
     <span class="cgp-inv-name" style="${rar?'color:'+rar.color:''}">${item.name}</span>
     <span class="cgp-inv-desc">${item.desc}</span>
    </div>
    ${!isEquip
     ?`<button class="btn btn-primary btn-sm cgp-use-btn" onclick="useInventoryItem('${item.id}');openCombatGearPanel()">Use</button>`
     :`<span class="cgp-inv-badge">IN BAG</span>`}`;
   body.appendChild(row);
  });
 }

 panel.appendChild(body);
 overlay.appendChild(panel);
 document.body.appendChild(overlay);
}

// ── BUFF ZONE (pills above hand) ──────────────────────────────────
function renderBuffZone() {
 const bz=$('buff-zone');
 if(!bz)return;
 const c=G.char;
 const pill=(icon,label,tip,type='')=>{
 const lines=tip.split('\n');
 const name=lines[0];
 const desc=lines.length>1?lines.slice(1).join(' · '):'';
 const showLabel=label!==''&&!/^[A-Z]+$/.test(String(label));
 return `<span class="hud-pill${type?' hp-'+type:''}"><span class="hud-pill-header">${icon}<span class="hud-pill-name">${name}</span>${showLabel?'<span class="hud-pill-count">'+label+'</span>':''}</span>${desc?'<span class="hud-pill-desc">'+desc+'</span>':''}</span>`;
 };
 const pills=[];
 if(C._hotStreakActive&&(C._hotStreakCounters||0)>0) pills.push(pill('🔥',C._hotStreakCounters+'/3',`Hot Streak\nFire +${C._hotStreakCounters} damage`));
 if(C._nextFireAutoHit||C._nextFireAutoCrit) pills.push(pill('🔥','✓','Combustion: next Fire auto-succeeds'));
 if(C._nextFireDouble) pills.push(pill('🔥','×2','Next Fire resolves twice'));
 if(C._shatterActive) pills.push(pill('❄️','SHT','Shatter: ice deals double to ice-touched targets','buff'));
 if(C._icyVeinsActive) pills.push(pill('❄️','IV','Icy Veins: first ice each turn = extra play','buff'));
 if((c._iceArmorCharges||0)>0) pills.push(pill('🛡',c._iceArmorCharges,`Ice Armor: ${c._iceArmorCharges} charges`,'buff'));
 if((c._mageArmorCharges||0)>0) pills.push(pill('✨',c._mageArmorCharges,`Mage Armor: ${c._mageArmorCharges} charges`,'buff'));
 if(c._moltenArmorActive) pills.push(pill('🌋',c._moltenArmorCharges||0,'Molten Armor: retaliate on hits','buff'));
 if(C.thornsActive) pills.push(pill('🌿','','Thorns: reflect attack damage','buff'));
 if(C._rebirthActive) pills.push(pill('🌿','','Rebirth: cheat death active — survive next fatal hit!','buff'));
 if(C._soulStoneActive) pills.push(pill('💀','SS','Soul Stone: cheat death — return to half HP if fatal','buff'));
 if((C._bladeStormTurns||0)>0) pills.push(pill('⚔️',C._bladeStormTurns,`Blade Storm: ${C._bladeStormTurns} AoE turn(s) left`,'buff'));
 if((C._shieldWallBuffTurns||0)>0) pills.push(pill('🛡️',C._shieldWallBuffTurns,`Shield Wall: +1 shield charge at start of each turn for ${C._shieldWallBuffTurns} more turn(s)`,'buff'));
 if((C._infernoTurns||0)>0) pills.push(pill('🔥',C._infernoTurns,`Infernal: ${C._infernoTurns} turn(s) left`,'buff'));
 if((C._ancestralSpiritTurns||0)>0) pills.push(pill('👻',C._ancestralSpiritTurns,`Ancestral Spirit: ${C._ancestralSpiritTurns} turn(s) left`,'buff'));
 if(C._reignOfFireActive) pills.push(pill('🔥','ROF','Reign Of Fire: 3 fire AoE each turn on 10+','buff'));
 if(C._felArmorActive) pills.push(pill('🟢','FA','Fel Armor: +roll bonus, +1 HP/turn','buff'));
 if(C._lightwellActive) pills.push(pill('✨','LW','Lightwell: roll 13+ each turn to heal 2 HP','buff'));
 if(C._unstablePowerActive) pills.push(pill('💀','UP','Unstable Power: shadow ×2, take roll/5 dmg/turn','debuff'));
 if(C._blackOutActive) pills.push(pill('🌑','BO','Black Out: shadow damage doubled','buff'));
 if(C._lockAndLoadActive) pills.push(pill('🏹','L&L','Lock and Load: damage → roll 15+ for extra play','buff'));
 if(C._aimedShotActive) pills.push(pill('🎯','AIM','Aimed Shot: next ranged card deals double damage','buff'));
 if(C._aimedShotAutoCrit) pills.push(pill('🎯','AIM★','Aimed Shot (CRIT): next ranged card auto-crits','buff'));
 if(G.char._aspectMonkey) pills.push(pill('🐒','MNK','Aspect of the Monkey: roll 11+ on attacks taken to halve damage','buff'));
 if(C._aspectHawkActive) pills.push(pill('🦅','HWK',`Aspect of the Hawk: +${C._aspectHawkDmgDelta||1} ranged dmg, -${C._aspectHawkDrawPenalty||1} draw/turn`,'buff'));
 if(C._aspectCheetahActive) pills.push(pill('🐆','CHT',`Aspect of the Cheetah: +${C._aspectCheetahRollDelta||1} rolls, +${C._aspectCheetahDrawDelta||1} draw/turn, +1 dmg taken`,'buff'));
 if(C._aspectNatureActive) pills.push(pill('🌿','AN','Aspect of Nature: nature hits 13+ for extra play','buff'));
 if(C._aspectFireActive) pills.push(pill('🔥','AF','Aspect of Fire: fire hits 13+ for extra play','buff'));
 if(C._aspectIceActive) pills.push(pill('❄️','AI','Aspect of Ice: ice hits 13+ for extra play','buff'));
 if(C._aspectAscendedActive) pills.push(pill('🌟','AA','Aspect of Ascended: heals 13+ for extra heal','buff'));
 if(C._naturesGuardianArmed&&!C._naturesGuardianFired) pills.push(pill('🌿','NG','Nature\'s Guardian: heals 20% on drop below 50% HP','buff'));
 if((C._innerFireCharges||0)>0) pills.push(pill('✨',C._innerFireCharges,`Inner Fire: ${C._innerFireCharges} block charges`,'buff'));
 if(C._damnationActive) pills.push(pill('🌑','DMN','Damnation: Shadow Words hit second enemy','buff'));
 if(C._temporalAbstractionActive) pills.push(pill('⏳','TA','Temporal Abstraction: damage buffered this turn','buff'));
 if((C._omenTurns||0)>0) pills.push(pill('🌿',C._omenTurns,`Clearcasting: ${C._omenTurns} turn${C._omenTurns!==1?'s':''} left — 50% proc on each hit`,'buff'));
 if(C._dieBySwordActive) pills.push(pill('⚔️','DBtS','Die By the Sword: survive sub-max damage','buff'));
 if(C._indomitableActive) pills.push(pill('💪','INDOM',`Indomitable: HP floor ${C._indomitableMinHP}`,'buff'));
 if(C._consecrationActive) pills.push(pill('✨','CONSEC','Consecration: 1 holy/turn to all enemies','buff'));
 if(C._siphonLifeActive) pills.push(pill('💀','SIPH','Siphon Life: 1 shadow/turn to all (roll 8+)','buff'));
 if(C._unstableAfflictionTargetIdx>=0) pills.push(pill('💀','UA','Unstable Affliction active','buff'));
 if((C._soulHarvestCharges||0)>0) pills.push(pill('💀',C._soulHarvestCharges,`Soul Harvest: +${C._soulHarvestCharges} dmg`,'buff'));
 if((C._hellsAdvocateCharges||0)>0) pills.push(pill('👿',C._hellsAdvocateCharges,`Hell's Advocate: ${C._hellsAdvocateCharges} double-shadow charge(s)`,'buff'));
 if(C._ironHideActive) pills.push(pill('🐻','IRON','Iron Hide: roll >8 → -1 physical damage','buff'));
 if(C._tigersRuryActive) pills.push(pill('🐯','TIGER',"Tiger's Fury: +melee damage",'buff'));
 if(C._maelstromActive) pills.push(pill('⚡',C._maelstromCharges||0,`Maelstrom Weapon: ${C._maelstromCharges||0}/5 charges`,'buff'));
 if((C._gravityBeamCounters||0)>0) pills.push(pill('⏳',C._gravityBeamCounters,`Gravity Beam: ${C._gravityBeamCounters} counter(s)`,'buff'));
 if(C._killerInstinctActive) pills.push(pill('🎯','KI','Killer Instinct: +3 dmg vs <50% HP','buff'));
 if(C._sweepingStrikesActive) pills.push(pill('⚔️','SWEEP','Sweeping Strikes: melee hits extra target','buff'));
 if((C._onslaughtBonus||0)>0) pills.push(pill('⚔️','+'+C._onslaughtBonus,`Onslaught: +${C._onslaughtBonus} melee damage (this combat)`,'buff'));
 if((C._angerMgmtArmor||0)>0) pills.push(pill('🛡','+'+C._angerMgmtArmor,`Anger Management: +${C._angerMgmtArmor} armor (this combat)`,'buff'));
 if((C._shredderArmorDebuff||0)>0) pills.push(pill('⚙️','-'+C._shredderArmorDebuff,`Shredded: -${C._shredderArmorDebuff} armor (Shredder surge)`,'debuff'));
 if(C._provokeDmgReduction) pills.push(pill('🐻','','Provoke: attack damage halved this turn','buff'));
 if((C.extraAllowedThisTurn||0)>0) pills.push(pill('▶',C.extraAllowedThisTurn,`+${C.extraAllowedThisTurn} extra play`,'buff'));
 if((C.bonusRoll||0)>0) pills.push(pill('🎲','+'+C.bonusRoll,`+${C.bonusRoll} to next roll`,'buff'));
 if(C.doubleDmgNext) pills.push(pill('⚡','×2','Next ability: double damage','buff'));
 if((c._eqDmgAll||0)>0) pills.push(pill('✦','+'+c._eqDmgAll,`+${c._eqDmgAll} to all damage types`,'buff'));
 if((c._eqDmgMagic||0)>0) pills.push(pill('🌀','+'+c._eqDmgMagic,`+${c._eqDmgMagic} to all magic damage`,'buff'));
 [['melee','⚔️','_eqDmgMelee'],['ranged','🏹','_eqDmgRanged'],['fire','🔥','_eqDmgFire'],['frost','❄️','_eqDmgFrost'],['nature','🌿','_eqDmgNature'],['arcane','🔮','_eqDmgArcane'],['shadow','🌑','_eqDmgShadow'],['holy','✨','_eqDmgHoly']].forEach(([t,icon,prop])=>{ if((c[prop]||0)>0) pills.push(pill(icon,'+'+c[prop],`+${c[prop]} ${t} damage`,'buff')); });
 if(c.currentForm==='cat'||c.currentForm==='both') pills.push(pill('🐱','','Cat Form: melee +2 dmg','form'));
 if(c.currentForm==='bear'||c.currentForm==='both') pills.push(pill('🐻','','Bear Form: half damage taken','form'));
 (C.activeHoTs||[]).forEach(h=>{
 if(h.channel){
 if(h.channelType==='damage'){
 const nextDmg=(h.baseDmg||0)+h.bonusPerStack*((h.stack||0)+1);
 pills.push(pill(h.icon,`${nextDmg}`,`${h.name} (channel)\nRoll ${h.dc}+ each turn to continue\nNext tick deals ${nextDmg} ice to all · tick ${(h.stack||0)+1}`,'debuff'));
 } else {
 const nextAmt=h.baseHeal+h.bonusPerStack*((h.stack||0)+1);
 pills.push(pill(h.icon,`+${nextAmt}`,`${h.name} (channel)\nRoll ${h.dc}+ each turn to continue\nNext tick heals ${nextAmt} HP · tick ${(h.stack||0)+1}`,'hot'));
 }
 }
 else pills.push(pill(h.icon,`+${h.healPerTurn}`,`${h.name}\n+${h.healPerTurn} HP/turn · ${h.turnsLeft} turns left${h.bloomAmt?'\nBlooms: +'+h.bloomAmt:''}` ,'hot'));
 });
 (c.statusEffects||[]).forEach(se=>{
 if(se.id==='seared') pills.push(pill('🔥','SEAR','Seared: 2 fire dmg/turn','debuff'));
 if(se.id==='poison') pills.push(pill('☠',se.stacks||1,`Poison: ${se.stacks||1} dmg/turn`,'debuff'));
 if(se.id==='stealth') pills.push(pill('👤','','Stealth\nPersists until you deal damage.\nNext attack: +1 damage bonus.','form'));
 });
 bz.innerHTML=pills.length?`<div class="hud-pills buff-zone-pills">${pills.join('')}</div>`:'';
}

// ── HAND ──────────────────────────────────────────────────────────
function renderHand() {
 const zone=$('hand-zone');
 zone.innerHTML='';
 if(C.phase!=='draw'&&C.phase!=='choose'){
 zone.innerHTML='<div style="font-family:var(--font-pixel);font-size:7px;color:var(--parch-text-dim);padding:8px">Rolling...</div>';
 return;
 }
 C.hand.forEach(id=>{
 const card=getCardById(id);
 if(!card)return;
 const sel=C.selectedCardId===id;
 const el=document.createElement('div');
 const isStealthed=(G.char.statusEffects||[]).some(s=>s.id==='stealth');
 el.className=`ability-card${sel?' card-selected':''}${isStealthed&&card.type==='damage'?' card-stealth':''}`;
 const talent=CARD_TALENTS[card.name], tc=talent?(TALENT_COLORS[talent]||' '):null;
 const artIcon2 = {
 Fire:'🔥',Ice:'❄️',Arcane:'🔮',
 Feral:'🐾',Balance:'🌙',Restoration:'🌿',
 Assassination:'🗡️',Combat:'⚔️',Subtlety:'👤'
 }[talent]||TYPE_ICONS[card.type]||'✦';
 const artBg2 = tc?`${tc}18`:'rgba(180,140,40,0.1)';
 const artBrd2 = tc?`${tc}33`:'rgba(180,140,40,0.15)';
 el.innerHTML=`
 <div style="background:${artBg2};border-bottom:1px solid ${artBrd2};padding:10px 6px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:2px;position:relative">
 <div style="font-size:22px;line-height:1;filter:drop-shadow(0 1px 4px rgba(0,0,0,0.5))">${artIcon2}</div>
 <div style="font-family:var(--font-pixel);font-size:4px;color:rgba(255,255,255,0.3)">${(talent||card.type).toUpperCase()}</div>
 <div style="position:absolute;top:3px;right:5px;font-family:var(--font-pixel);font-size:5px;color:rgba(255,255,255,0.3)">${TIER_ROMAN[card.tier]}</div>
 </div>
 <div class="card-header" style="padding-top:5px;padding-bottom:4px">
 <div class="card-name" style="flex:1">${card.name}</div>
 </div>
 ${talent?`<div class="card-talent-bar" style="background:${tc}22;border-bottom:1px solid ${tc}44"><span class="card-talent-label" style="color:${tc}">${talent}</span></div>`:''}
 <div class="card-body">
 <div class="card-roll-req">Need ${card.risk>0?card.risk+'+':'Special'}</div>
 <div class="card-effect-text">${card.hit||''}</div>
 ${card.crit?`<div class="card-crit-line">★ ${card.crit}</div>`:''}
 ${card.critmiss?`<div class="card-fail-line">☠ ${card.critmiss}</div>`:''}
 </div>
 `;
 el.onclick=()=>{C.selectedCardId=sel?null:id;renderHand();renderActionBar();};
 zone.appendChild(el);
 });
}

// ── ACTION BAR ────────────────────────────────────────────────────
function renderActionBar() {
 const bar=$('action-bar');
 bar.innerHTML='';
 if(C.phase!=='draw'&&C.phase!=='choose')return;

 if(C.selectedCardId){
 const card=getCardById(C.selectedCardId);
 // Combo point picker for spending cards
 const comboSpend=COMBO_SPEND_CARDS[card.name];
 if(comboSpend&&(G.char.comboPoints||0)>0){
 const pts=G.char.comboPoints||0;
 // Auto-default to spending all points when a combo card is selected
 if(C.comboPointsToSpend===0||C.comboPointsToSpend===undefined) C.comboPointsToSpend=pts;
 const pickerLabel=document.createElement('div');
 pickerLabel.style.cssText='font-family:var(--font-pixel);font-size:6px;color:var(--rogue-col);display:flex;align-items:center;gap:6px;flex-wrap:wrap';
 pickerLabel.innerHTML=`SPEND COMBO (${pts} avail):`;
 bar.appendChild(pickerLabel);
 const btnsWrap=document.createElement('div');
 btnsWrap.style.cssText='display:flex;gap:4px';
 for(let n=0;n<=pts;n++){
 const cb=document.createElement('button');
 cb.className=`btn btn-sm${(C.comboPointsToSpend||0)===n?' btn-primary':' btn-ghost'}`;
 cb.style.cssText='min-width:28px;padding:4px 6px';
 cb.textContent=n===0?'0':n+'pt';
 cb.onclick=(()=>{const v=n;return()=>{C.comboPointsToSpend=v;renderActionBar();}})();
 btnsWrap.appendChild(cb);
 }
 bar.appendChild(btnsWrap);
 // Show effect preview
 const prev=document.createElement('div');
 const pts2=C.comboPointsToSpend||0;
 prev.style.cssText='font-family:var(--font-pixel);font-size:5px;color:var(--parch-text-dim)';
 if(pts2>0){
 const bd=(G.char.dmgBonus||0)+(G.char._eqDmg||0)+(G.char._eqDmgAll||0)+(G.char._eqDmgMelee||0);
 let preview='';
 if(card.name==='Eviscerate'){
 const v=[0,3,7,12,17,23][pts2]||pts2*5;
 preview=`→ ~${v+bd} melee dmg`;
 } else if(card.name==="Coup de Grâce"){
 const v=[0,3,6,10,15,21][pts2]||pts2*4;
 preview=`→ ~${v+bd} dmg${pts2>=3?' (devastating below half)':''}`; 
 } else if(card.name==='Rupture'){
 const v=[0,1,2,4,7,11][pts2]||pts2*2;
 preview=`→ ${v} Hemorrhage stacks`;
 } else if(card.name==='Killing Spree'){
 const v=[0,2,4,7,10,14][pts2]||pts2*3;
 preview=`→ ~${v+bd} to ALL enemies`;
 } else if(card.name==='Blade Flurry'){
 preview=`→ repeats ${pts2}× with +${Math.max(0,pts2-1)} dmg each`;
 }
 if(preview)prev.textContent=preview;
 }
 bar.appendChild(prev);
 }
 // Rage picker — shown for any Warrior card when rage > 0
 const rage=(G.char._rageCounters||0);
 if(G.char.className==='Warrior'&&rage>0){
  const isRageSpendCard=!!RAGE_SPEND_CARDS[card.name];
  const rageLbl=document.createElement('div');
  rageLbl.style.cssText='font-family:var(--font-pixel);font-size:6px;color:#e05030;display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:4px';
  rageLbl.innerHTML=`💢 RAGE (${rage}/3) — ${isRageSpendCard?RAGE_SPEND_CARDS[card.name].label:'+2 roll per counter'}:`;
  bar.appendChild(rageLbl);
  const rageWrap=document.createElement('div');
  rageWrap.style.cssText='display:flex;gap:4px';
  for(let n=0;n<=rage;n++){
   const rb=document.createElement('button');
   rb.className=`btn btn-sm${(C.rageToSpend||0)===n?' btn-primary':' btn-ghost'}`;
   rb.style.cssText='min-width:28px;padding:4px 6px';
   rb.textContent=n===0?'0':n+'💢';
   rb.onclick=(()=>{const v=n;return()=>{C.rageToSpend=v;renderActionBar();}})();
   rageWrap.appendChild(rb);
  }
  bar.appendChild(rageWrap);
  const ragePrev=document.createElement('div');
  ragePrev.style.cssText='font-family:var(--font-pixel);font-size:5px;color:var(--parch-text-dim)';
  const rSpend=C.rageToSpend||0;
  if(rSpend>0){
   if(isRageSpendCard)ragePrev.textContent=`→ +${rSpend*2} bonus damage`;
   else ragePrev.textContent=`→ +${rSpend*2} to roll`;
  }
  bar.appendChild(ragePrev);
 }
 const btn=document.createElement('button');
 btn.className='btn btn-primary';
 const spendTxt=comboSpend&&(C.comboPointsToSpend||0)>0?` [${C.comboPointsToSpend}pt]`:'';
 const rageTxt=(G.char.className==='Warrior'&&(C.rageToSpend||0)>0)?` [${C.rageToSpend}💢]`:'';
 btn.innerHTML=`🎲 Play ${card.name}${spendTxt}${rageTxt} (Roll ${card.risk>0?card.risk+'+':'Special'})`;
 btn.onclick=playCard; bar.appendChild(btn);
 const clr=document.createElement('button');
 clr.className='btn btn-ghost btn-sm'; clr.textContent='Deselect';
 clr.onclick=()=>{C.selectedCardId=null;C.comboPointsToSpend=0;C.rageToSpend=0;renderHand();renderActionBar();};
 bar.appendChild(clr);
 } else {
 const hint=document.createElement('div');
 hint.className='action-label';
 const pl=(2+(C.extraAllowedThisTurn||0))-(C.cardsPlayedThisTurn||0);
 hint.textContent=`${(C.hand||[]).length} cards in hand — ${pl} play${pl!==1?'s':''} remaining`;
 bar.appendChild(hint);
 }

 // Hero ability button
 if(G.char.heroId){
 const hero=getHero(G.char.heroId);
 if(hero){
 const used=C._heroAbilityUsed;
 const hBtn=document.createElement('button');
 hBtn.className=`btn btn-sm${used?' btn-ghost':''}`;
 hBtn.style.cssText=used?'opacity:0.4':'border-color:var(--chrome-gold);color:var(--chrome-gold-hi)';
 hBtn.innerHTML=`${hero.icon} ${hero.abilityName} (${hero.abilityDC}+)`;
 hBtn.title=hero.abilityDesc;
 hBtn.disabled=!!used;
 if(!used)hBtn.onclick=useHeroAbility;
 bar.appendChild(hBtn);
 }
 }

 // Plays counter
 const played=C.cardsPlayedThisTurn||0, allowed=2+(C.extraAllowedThisTurn||0), rem=allowed-played;
 const pd=document.createElement('div');
 pd.style.cssText=`font-family:var(--font-pixel);font-size:6px;color:${rem>0?'var(--chrome-gold-hi)':'var(--parch-text-dim)'};padding:3px 8px;background:rgba(0,0,0,0.3);border:1px solid var(--chrome-mid);border-radius:3px;text-align:center`;
 pd.textContent=rem>0?`▶ ${rem} play${rem!==1?'s':''} left`:'▶ No plays left';
 bar.appendChild(pd);

 const pass=document.createElement('button');
 pass.className='btn btn-ghost btn-sm'; pass.textContent='⏭ Pass Turn';
 pass.title='Skip to enemy turn';
 pass.onclick=()=>{
 log('You pass your turn.','log-system');
 C.hand.forEach(id=>C.discard.push(id));
 C.hand=[]; C.selectedCardId=null; C.phase='enemy';
 setTimeout(doEnemyTurn,400);
 };
 bar.appendChild(pass);
}

// ── HERO ABILITY ──────────────────────────────────────────────────
function showRollTheBonesPicker(cardIds) {
 // Show full card picker (hand + discard + deck) to play as crit
 const unique = [...new Set(cardIds)];
 if(unique.length === 0){ toast('No cards available!','danger'); return; }

 const overlay = document.createElement('div');
 overlay.style.cssText = 'position:fixed;inset:0;z-index:600;background:rgba(0,0,0,0.88);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px';

 const title = document.createElement('div');
 title.style.cssText = 'font-family:var(--font-pixel);font-size:9px;color:var(--crit-col);text-shadow:0 0 20px rgba(240,208,96,0.4)';
 title.textContent = '👑 NATURAL 20 — Choose any card (plays as CRITICAL HIT):';
 overlay.appendChild(title);

 const grid = document.createElement('div');
 grid.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap;justify-content:center;max-width:900px;overflow-y:auto;max-height:65vh;padding:10px';

 unique.forEach(id => {
 const card = getCardById(id);
 if(!card) return;
 const talent = CARD_TALENTS[card.name], tc = talent ? (TALENT_COLORS[talent]||' ') : null;
 const artIcon = {Fire:'🔥',Ice:'❄️',Arcane:'🔮',Feral:'🐾',Balance:'🌙',Restoration:'🌿',Assassination:'🗡️',Combat:'⚔️',Subtlety:'👤'}[talent]||TYPE_ICONS[card.type]||'✦';
 const el = document.createElement('div');
 el.className = 'ability-card';
 el.style.cssText = 'cursor:pointer;border-color:var(--crit-col);box-shadow:0 0 8px rgba(240,208,96,0.2)';
 el.innerHTML = `
 <div style="background:${tc?tc+'18':'rgba(240,208,96,0.1)'};border-bottom:1px solid ${tc?tc+'33':'rgba(240,208,96,0.2)'};padding:10px 6px;text-align:center">
 <div style="font-size:22px">${artIcon}</div>
 <div style="font-family:var(--font-pixel);font-size:4px;color:rgba(255,255,255,0.3)">${(talent||card.type).toUpperCase()}</div>
 </div>
 <div class="card-header" style="padding-top:5px">
 <div class="card-name" style="flex:1">${card.name}</div>
 <div class="card-tier-badge">${TIER_ROMAN[card.tier]}</div>
 </div>
 <div class="card-body">
 <div class="card-roll-req">CRITICAL HIT</div>
 <div class="card-effect-text">${card.crit||card.hit||''}</div>
 </div>`;
 el.onclick = () => {
 document.body.removeChild(overlay);
 // Remove from wherever it is
 C.hand = C.hand.filter(hid => hid !== id);
 C.discard = C.discard.filter(did => did !== id);
 C.deck = C.deck.filter(did => did !== id);
 log(`👑 Roll the Bones plays: ${card.name} as CRITICAL HIT!`, 'log-crit');
 C.targetIdx = C.targetIdx; // keep current target
 applyCombatEffect(card, 'crit', C.enemies[C.targetIdx], false);
 C.discard.push(id);
 C.phase = 'draw';
 renderCombat();
 };
 grid.appendChild(el);
 });
 overlay.appendChild(grid);

 const cancel = document.createElement('button');
 cancel.className = 'btn btn-ghost btn-sm';
 cancel.textContent = '✕ Skip';
 cancel.onclick = () => { document.body.removeChild(overlay); C.phase='draw'; renderCombat(); };
 overlay.appendChild(cancel);
 document.body.appendChild(overlay);
}

function showObfuscateComboOverlay(card, playMode, discardId) {
 const pts = G.char.comboPoints||0;
 const overlay = document.createElement('div');
 overlay.style.cssText = 'position:fixed;inset:0;z-index:650;background:rgba(0,0,0,0.88);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px';

 const title = document.createElement('div');
 title.style.cssText = 'font-family:var(--font-pixel);font-size:9px;color:var(--chrome-gold-hi);text-align:center';
 title.textContent = `OBFUSCATE — ${card.name}: spend combo points?`;
 overlay.appendChild(title);

 const desc = document.createElement('div');
 desc.style.cssText = 'font-family:var(--font-pixel);font-size:6px;color:var(--parch-text-dim)';
 desc.textContent = `You have ${pts} Combo Point${pts!==1?'s':''}`;
 overlay.appendChild(desc);

 const btnsRow = document.createElement('div');
 btnsRow.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;justify-content:center';

 for(let n=0; n<=pts; n++){
 const btn = document.createElement('button');
 btn.className = n===pts ? 'btn btn-primary' : 'btn btn-ghost';
 btn.style.cssText = 'min-width:60px;font-size:8px';
 btn.textContent = n===0 ? 'Skip (0pt)' : n+'pt';
 btn.onclick = (()=>{
 const spend=n;
 return ()=>{
 document.body.removeChild(overlay);
 C._waitingForPicker=false;
 C.comboPointsToSpend=spend;
 C.discard=C.discard.filter(did=>did!==discardId);
 log(`👤 Obfuscate plays: ${card.name}${spend>0?' ['+spend+'pt]':''}${playMode==='crit'?' as Critical!':''}!`,'log-hit');
 applyCombatEffect(card, playMode==='crit'?'crit':'hit', C.enemies[C.targetIdx], false);
 C.discard.push(discardId);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 C.phase='draw'; renderCombat();
 };
 })();
 btnsRow.appendChild(btn);
 }
 overlay.appendChild(btnsRow);

 const cancel = document.createElement('button');
 cancel.className = 'btn btn-ghost btn-sm';
 cancel.textContent = '✕ Cancel — pick different card';
 cancel.onclick = ()=>{ document.body.removeChild(overlay); showDiscardPicker(playMode); };
 overlay.appendChild(cancel);
 document.body.appendChild(overlay);
}

function showDiscardPicker(playMode) {
 // Show an overlay to pick a card from discard, then play it
 if(C.discard.length===0){toast('Discard is empty!','danger');return;}
 const overlay=document.createElement('div');
 overlay.style.cssText='position:fixed;inset:0;z-index:600;background:rgba(0,0,0,0.85);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px';
 const title=document.createElement('div');
 title.style.cssText='font-family:var(--font-pixel);font-size:9px;color:var(--chrome-gold-hi)';
 title.textContent='OBFUSCATE — Choose a card from your discard:';
 overlay.appendChild(title);
 const grid=document.createElement('div');
 grid.style.cssText='display:flex;gap:10px;flex-wrap:wrap;justify-content:center;max-width:800px;overflow-y:auto;max-height:60vh;padding:10px';
 C.discard.forEach(id=>{
 const card=getCardById(id);if(!card)return;
 const talent=CARD_TALENTS[card.name],tc=talent?(TALENT_COLORS[talent]||' '):null;
 const el=document.createElement('div');
 el.className='ability-card';
 el.style.cssText='cursor:pointer;opacity:0.9;flex-shrink:0';
 el.innerHTML=`
 <div class="card-header">
 <div class="card-type-icon">${TYPE_ICONS[card.type]||'✦'}</div>
 <div class="card-name">${card.name}</div>
 <div class="card-tier-badge">${TIER_ROMAN[card.tier]}</div>
 </div>
 ${talent?`<div class="card-talent-bar" style="background:${tc}22;border-bottom:1px solid ${tc}44"><span class="card-talent-label" style="color:${tc}">${talent}</span></div>`:''}
 <div class="card-body">
 <div class="card-roll-req">Need ${card.risk>0?card.risk+'+':'Special'}</div>
 <div class="card-effect-text">${card.hit||''}</div>
 ${card.crit?`<div class="card-crit-line">★ ${card.crit}</div>`:''}
 </div>`;
 el.onclick=()=>{
 const comboSpendDef=COMBO_SPEND_CARDS[card.name];
 const availCP=G.char.comboPoints||0;
 if(comboSpendDef&&availCP>0){
 // Show combo picker inline before executing
 document.body.removeChild(overlay);
 showObfuscateComboOverlay(card, playMode, id);
 } else {
 document.body.removeChild(overlay);
 C._waitingForPicker=false;
 C.comboPointsToSpend=0;
 C.discard=C.discard.filter(did=>did!==id);
 log(`👤 Obfuscate retrieves: ${card.name}${playMode==='crit'?' (as Critical!)':''}!`,'log-hit');
 applyCombatEffect(card, playMode==='crit'?'crit':'hit', C.enemies[C.targetIdx], false);
 C.discard.push(id);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 C.phase='draw';renderCombat();
 }
 };
 grid.appendChild(el);
 });
 overlay.appendChild(grid);
 const cancel=document.createElement('button');
 cancel.className='btn btn-ghost btn-sm';cancel.textContent='✕ Cancel';
 cancel.onclick=()=>{C._waitingForPicker=false;document.body.removeChild(overlay);C.phase='draw';renderCombat();};
 overlay.appendChild(cancel);
 document.body.appendChild(overlay);
}

function useHeroAbility() {
 if(C._heroAbilityUsed){toast('Already used this combat!','danger');return;}
 const hero=getHero(G.char.heroId);
 if(!hero)return;
 C.phase='rolling';
 log(`${hero.icon} ${G.char.name} uses ${hero.abilityName}! (Need ${hero.abilityDC}+)`,'log-system');
 const popup=$('dice-popup');
 popup.classList.add('rolling');
 $('dice-num').className='dice-num';
 $('dice-outcome-label').textContent='';
 $('dice-sub').textContent='';
 let frames=0;
 const anim=setInterval(()=>{
 $('dice-num').textContent=Math.floor(Math.random()*20)+1;
 if(++frames>=12){
 clearInterval(anim);
 const raw=d20(), bonus=(G.char.rollBonus||0)+(C.bonusRoll||0), total=raw+bonus;
 const success=total>=hero.abilityDC;
 $('dice-num').textContent=raw;
 $('dice-num').className=`dice-num o-${success?'hit':'miss'}`;
 $('dice-outcome-label').textContent=success?'✅ SUCCESS':'❌ FAIL';
 $('dice-outcome-label').style.color=success?'var(--heal-col)':'var(--miss-col)';
 $('dice-sub').textContent=`Rolled ${raw}${bonus?'+'+bonus+' = '+total:''} · Need ${hero.abilityDC}+`;
 C._heroAbilityUsed=true;
 const result=hero.ability(G.char, total, C);
 log(`${hero.icon} ${result.msg}`,success?'log-hit':'log-miss');
 setTimeout(()=>{popup.classList.remove('rolling');C.phase='draw';renderCombat();},900);
 }
 },70);
}

// ── DRAW ──────────────────────────────────────────────────────────
function doDraw() {
 C.phase='draw'; C.cardsPlayedThisTurn=0; C.extraAllowedThisTurn=0;
 C.thornsActive=null; // Thorns expires at start of new player turn
 C.preventAttackDamageThisTurn=false; // reset after enemy attacks resolved
 C._maulDmgBuff=0; // Maul crit buff falls off at end of round
 C._icyVeinsUsedThisTurn=false;
 C._astralAlignHits=0;
 C._healedThisTurn=false;
 if((C._omenTurns||0)>0){ C._omenTurns--; if(C._omenTurns===0) log('🌿 Clearcasting fades.','log-system'); }
 // Shield Wall buff: gain 1 shield charge at the start of each turn for N turns
 if((C._shieldWallBuffTurns||0)>0){
  C._shieldWallCounters=(C._shieldWallCounters||0)+1;
  C._shieldWallBuffTurns--;
  log(`🛡️ Shield Wall: +1 shield charge (${C._shieldWallCounters} total, ${C._shieldWallBuffTurns} turn${C._shieldWallBuffTurns!==1?'s':''} left)`,'log-info');
  if(C._shieldWallBuffTurns===0) log('🛡️ Shield Wall buff fades.','log-system');
 }
 // Check if player's turn is skipped (e.g. Hibernate, critmiss)
 if(C.skipNextPlayerTurn){
 C.skipNextPlayerTurn=false;
 log('💤 Your turn is skipped!','log-critmiss');
 C.hand.forEach(id=>C.discard.push(id)); C.hand=[];
 // Tick HoTs
 if((C.activeHoTs||[]).length>0){
 C.activeHoTs=C.activeHoTs.filter(h=>{
 if(h.channel){
 const tRoll=d20()+(G.char.rollBonus||0);
 if(tRoll<h.dc){log(`${h.icon} ${h.name} channel breaks! (rolled ${tRoll} vs DC ${h.dc})`,'log-miss');return false;}
 h.stack=(h.stack||0)+1;
 if(h.channelType==='damage'){
 const dmg=(h.baseDmg||0)+h.bonusPerStack*h.stack;
 C.enemies.forEach((e,ei)=>{if(e.hp>0){dealEnemyDamage(e,dmg,ei);e._tookIceDamage=true;}});
 log(`${h.icon} ${h.name} channels: ${dmg} ice to all (rolled ${tRoll}, tick ${h.stack})`,'log-hit');
 return true;
 }
 const amt=h.baseHeal+h.bonusPerStack*h.stack+(G.char._hotBonus||0);
 const _co=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+amt);
 log(`${h.icon} ${h.name} channels: +${G.char.hp-_co} HP (rolled ${tRoll}, tick ${h.stack}) → ${G.char.hp}/${G.char.maxHP}`,'log-hit');
 return true;
 }
 if(h.turnsLeft<=0){
 if(h.bloomAmt){const _blmOld=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+h.bloomAmt);log(`${h.icon} ${h.name} BLOOMS! Healed ${G.char.hp-_blmOld} HP`,'log-crit');}
 return false;
 }
 const _hotOld=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+(h.healPerTurn+(G.char._hotBonus||0)));
 log(`${h.icon} ${h.name} healed ${G.char.hp-_hotOld} HP → ${G.char.hp}/${G.char.maxHP} (${h.healPerTurn+(G.char._hotBonus||0)} HP · ${h.turnsLeft-1} left)`,'log-hit');
 h.turnsLeft--;
 return h.turnsLeft>0;
 });
 }
 // Tick player DoTs
 if((G.char.statusEffects||[]).find(s=>s.id==='seared')) dealPlayerDamage(2,'Seared',true);
 (G.char.statusEffects||[]).filter(s=>s.id==='poison').forEach(s=>dealPlayerDamage(s.stacks||1,'Poison',true));
 G.char.statusEffects=(G.char.statusEffects||[]).filter(s=>{
 if(s.id==='poison'){const r=d20();if(r>15){log(`💊 Poison resisted! (${r})`,'log-hit');return false;}}
 return true;
 });
 C._skipTurnEffectsApplied=true; // prevent double-tick in doEnemyTurn/_finishEnemyTurn
 renderCombat();
 if(G.char.hp<=0){setTimeout(onPlayerDeath,500);return;}
 setTimeout(doEnemyTurn,600);
 return;
 }
 // Pet turn: rolls before player draws so buffs apply this turn
 doPetTurn();
 let drawCount=3+(G.char.extraDraw||0)+(G.char._eqDraw||0);
 if(C._aspectHawkActive)drawCount=Math.max(1,drawCount-(C._aspectHawkDrawPenalty||0));
 if(C.drawPenalty){drawCount=C.drawPenalty;C.drawPenalty=0;}
 if(C.bonusDrawNextTurn){drawCount+=C.bonusDrawNextTurn;C.bonusDrawNextTurn=0;}
 drawCount=Math.max(1,drawCount);

 // Form card exclusion (Druid) — active form card cannot be drawn again
 const formExclude=[];
 if(G.char.className==='Druid'&&G.char.currentForm){
 const fm={
 cat: ['d11'],
 bear: ['d12'],
 both: ['d11','d12'],
 astral: ['d37'],
 tree: ['d34'],
 };
 (fm[G.char.currentForm]||[]).forEach(id=>formExclude.push(id));
 }
 const savedDeck=formExclude.filter(id=>C.deck.includes(id));
 const savedDiscard=formExclude.filter(id=>C.discard.includes(id));
 const tempDeck=C.deck.filter(id=>!formExclude.includes(id));
 const tempDiscard=C.discard.filter(id=>!formExclude.includes(id));
 const result=drawFromDeck(tempDeck,tempDiscard,drawCount);
 C.deck=[...result.deck,...savedDeck];
 C.discard=[...result.discard,...savedDiscard];
 C.hand=result.drawn;
 C.selectedCardId=null;
 if(result.deck.length<C.deck.length)log('🔀 Deck reshuffled.','log-system');
 log(`🃏 Drew ${C.hand.length} card${C.hand.length!==1?'s':''}. ${2+(C.extraAllowedThisTurn||0)} plays this turn.`,'log-info');
 renderCombat();
}

// ── PLAY CARD ─────────────────────────────────────────────────────
function playCard() {
 if(!C.selectedCardId)return;
 const card=getCardById(C.selectedCardId);
 if(!card)return;
 G.char.runCardsPlayed=(G.char.runCardsPlayed||0)+1;
 C.phase='rolling';
 log(`You play ${card.name}…`,'log-system');

 // Check for auto-hit/auto-crit conditions — skip dice roll
 const isFireCard = CARD_TALENTS[card.name]==='Fire';
 const isRangedCard = getCardDmgType(card)==='ranged';
 const autoHit = C.autoHitCharges>0 || (isFireCard && C._nextFireAutoHit) || C._nextCardAutoHit;
 const autoCrit = (isFireCard && C._nextFireAutoCrit) || C._nextCardAutoCrit || (isRangedCard && C._aimedShotAutoCrit);
 if(autoHit&&C._nextCardAutoHit) C._nextCardAutoHit=false;
 if(autoCrit&&C._nextCardAutoCrit) C._nextCardAutoCrit=false;
 if(autoCrit&&isRangedCard&&C._aimedShotAutoCrit) C._aimedShotAutoCrit=false;

 if(autoHit || autoCrit){
 // Show popup briefly with auto result (no rolling animation)
 const outcome = autoCrit ? 'critical' : 'hit';
 const popup=$('dice-popup');
 popup.classList.add('rolling');
 $('dice-num').textContent = autoCrit ? '★' : '✓';
 $('dice-num').className = `dice-num o-${outcome}`;
 const ol={critical:'⭐ CRITICAL HIT!',hit:'✅ AUTO-SUCCESS'};
 const oc={critical:'var(--crit-col)',hit:'var(--heal-col)'};
 $('dice-outcome-label').textContent = ol[outcome];
 $('dice-outcome-label').style.color = oc[outcome];
 $('dice-sub').textContent = autoCrit ? 'Auto-critical hit!' : 'Auto-success — no roll needed!';
 log(`✨ ${card.name} auto-${autoCrit?'crits':'succeeds'}! No roll needed.`, 'log-hit');
 // Consume the auto charge
 if(C.autoHitCharges>0) C.autoHitCharges--;
 if(isFireCard && C._nextFireAutoHit) C._nextFireAutoHit=false;
 if(isFireCard && C._nextFireAutoCrit) C._nextFireAutoCrit=false;
 setTimeout(()=>{
 popup.classList.remove('rolling');
 resolveCard(card, outcome, 20); // treat as roll of 20 for effect purposes
 }, 700);
 return;
 }

 // Normal dice roll
 const popup=$('dice-popup');
 popup.classList.add('rolling');
 $('dice-num').className='dice-num';
 $('dice-outcome-label').textContent=''; $('dice-sub').textContent='';
 let frames=0;
 const anim=setInterval(()=>{
 $('dice-num').textContent=Math.floor(Math.random()*20)+1;
 if(++frames>=14){clearInterval(anim);finalizeCardPlay(card);}
 },70);
}

function finalizeCardPlay(card) {
 // Warrior Rage: consume up front BEFORE the roll — rage is spent regardless of outcome.
 // Default cards get +2 roll per counter; RAGE_SPEND_CARDS use the counters in their handler (read C._rageSpent).
 C._rageSpent=0;
 if(G.char.className==='Warrior'&&(C.rageToSpend||0)>0){
  const rSpend=C.rageToSpend;C.rageToSpend=0;
  G.char._rageCounters=Math.max(0,(G.char._rageCounters||0)-rSpend);
  C._rageSpent=rSpend;
  if(!RAGE_SPEND_CARDS[card.name]){
   C.bonusRoll=(C.bonusRoll||0)+rSpend*2;
   log(`💢 Rage: spent ${rSpend} counter(s) — +${rSpend*2} to this roll!`,'log-info');
  } else {
   log(`💢 Rage: spent ${rSpend} counter(s) for ${card.name}!`,'log-info');
  }
 }
 const raw=d20();
 const _markTgt=C.enemies&&C.enemies[C.targetIdx];
 const _markBonus=(_markTgt&&_markTgt._hunterMarked)?2:0;
 const bonus=(G.char.rollBonus||0)+(C.bonusRoll||0)+(G.char._luckCharges>0?1:0)+(G.char._eqRoll||0)+_markBonus;
 if(G.char._luckCharges>0)G.char._luckCharges--;
 C.bonusRoll=0;
 const critThresh=Math.max(15,(G.char.critThreshold||20)+(G.char._eqCritThresh||0));
 // Sprint: reduce risk of this card by 4
 if(C._sprintRollBonus>0){
 C.bonusRoll=(C.bonusRoll||0)+C._sprintRollBonus;
 log(`⚡ Sprint: +${C._sprintRollBonus} on this roll!`,'log-info');
 C._sprintRollBonus=0;
 }
 let outcome;
 if(C._greenskinCritFail){C._greenskinCritFail=false;outcome='critmiss';log('☠️ Greenskin\'s curse! Critical fail!','log-critmiss');}
 else if(C.autoHitCharges>0){C.autoHitCharges--;outcome='hit';log(`✨ Auto-hit!`,'log-info');}
 else{outcome=rollOutcome(raw,card.risk,bonus,critThresh);}

 $('dice-num').textContent=raw;
 $('dice-num').className=`dice-num o-${outcome}`;
 const ol={critical:'⭐ CRITICAL HIT!',hit:'✅ SUCCESS',miss:'❌ MISS',critmiss:'💀 CRITICAL FAIL'};
 const oc={critical:'var(--crit-col)',hit:'var(--heal-col)',miss:'var(--miss-col)',critmiss:'var(--dmg-col)'};
 $('dice-outcome-label').textContent=ol[outcome];
 $('dice-outcome-label').style.color=oc[outcome];
 $('dice-sub').textContent=`Rolled ${raw}${bonus?'+'+bonus+' = '+(raw+bonus):''} · Need ${card.risk>0?card.risk:'Special'}`;
 log(`Rolled ${raw}${bonus?'+'+bonus+' = '+(raw+bonus):''} → ${ol[outcome]}`,`log-${outcome}`);
 setTimeout(()=>{$('dice-popup').classList.remove('rolling');resolveCard(card,outcome,raw+bonus);},900);
}

function resolveCard(card, outcome, effectiveRoll) {
 const target=C.enemies[C.targetIdx];
 let doubleDmg=C.doubleDmgNext||false;
 C.doubleDmgNext=false;
 if(G.char._nextDoubleDmg){doubleDmg=true;G.char._nextDoubleDmg=false;}
 let effectText='';
 switch(outcome){
 case 'critical': effectText=card.crit||card.hit||''; applyCombatEffect(card,'crit',target,doubleDmg); G.char.runCrits=(G.char.runCrits||0)+1; break;
 case 'hit': effectText=card.hit||''; applyCombatEffect(card,'hit',target,doubleDmg); break;
 case 'miss': effectText=card.miss||'Your attack misses!'; log(effectText,'log-miss'); break;
 case 'critmiss': effectText=card.critmiss||'Critical failure!'; log(effectText,'log-critmiss'); G.char.runCritFails=(G.char.runCritFails||0)+1;
 if(card.critmiss){
 const dm=card.critmiss.match(/[Tt]ake (\d+) damage/); if(dm)dealPlayerDamage(parseInt(dm[1]),'Critical Fail',false,null,true);
 const cm=card.critmiss.match(/[Ll]ose (?:all|(\d+)) [Cc]ombo/);
 if(cm){if(card.critmiss.toLowerCase().includes('all'))G.char.comboPoints=0;else if(cm[1])G.char.comboPoints=Math.max(0,(G.char.comboPoints||0)-parseInt(cm[1]));}
 const rm=card.critmiss.match(/-(\d+) (?:on|from) (?:your )?next roll/i); if(rm)C.bonusRoll=(C.bonusRoll||0)-parseInt(rm[1]);
 if(/only draw 1 card/i.test(card.critmiss))C.drawPenalty=1;
 if(/lose your next turn/i.test(card.critmiss))C.skipNextPlayerTurn=true;
 }
 break;
 }
 if(effectText&&outcome!=='miss'&&outcome!=='critmiss') log(effectText,outcome==='critical'?'log-crit':'log-hit');
 // Remove only ONE instance of the played card (not all duplicates)
 const playedIdx=C.hand.indexOf(C.selectedCardId);
 if(playedIdx!==-1)C.hand.splice(playedIdx,1);
 C.discard.push(C.selectedCardId);
 C.selectedCardId=null;
 C.cardsPlayedThisTurn=(C.cardsPlayedThisTurn||0)+1;
 if(C.enemies.every(e=>e.hp<=0)){C.hand.forEach(id=>C.discard.push(id));C.hand=[];setTimeout(onCombatWin,600);return;}
 if(outcome==='critmiss'){C.hand.forEach(id=>C.discard.push(id));C.hand=[];C.phase='enemy';setTimeout(doEnemyTurn,700);return;}
 const playsAllowed=2+(C.extraAllowedThisTurn||0);
 if(C._waitingForPicker)return;
 if(C.cardsPlayedThisTurn<playsAllowed){
 if(C.hand.length===0){
 // No cards left — end turn even if plays remain
 log('No cards left in hand. Ending turn.','log-system');
 C.phase='enemy';setTimeout(doEnemyTurn,400);
 } else {
 C.phase='draw';renderCombat();
 }
 return;
 }
 // Don't end turn if a picker overlay is waiting for user input
 if(C._waitingForPicker)return;
 C.hand.forEach(id=>C.discard.push(id));C.hand=[];C.phase='enemy';setTimeout(doEnemyTurn,700);
}


// ── APPLY EFFECT ──────────────────────────────────────────────────
function applyCombatEffect(card, outcomeType, target, doubleDmg) {
 const isCrit=outcomeType==='crit';
 // Store doubleDmg in combat state so handlers and dealEnemyDamage can see it
 if(doubleDmg) C._dmgDoubleActive=true;
 // Pre-set override for all cards with explicit handlers (prevents generic double-damage)
 const _HANDLED_CARDS=new Set(['Adrenaline Rush','Ambush','Arcane Explosion','Arcane Missiles','Arcane Power','Backstab','Bash','Shapeshift: Bear','Bearzerk','Blade Flurry','Blast Wave','Shapeshift: Cat','Cheap Shot','Claw','Cloak of Shadows','Combustion','Cone of Cold','Conjure Food','Counterspell','Deadly Poison','Eviscerate','Fan of Knives','Feral Charge','Ferocious Bite','Fireball','Frost Nova','Frostbolt','Frozen Orb','Gouge','Healing Touch','Hibernate','Hot Streak','Ice Armor','Ice Lance','Killing Spree','Lifebloom','Mage Armor','Mangle','Marked for Death','Master of Shadows','Maul','Molten Armor','Moonfire','Mutilate','Obfuscate','Pick Pocket','Polymorph','Pounce','Premeditation','Prowl','Pyroblast','Ravage','Regrowth','Rejuvenation','Roll the Bones','Rupture','Savage Roar','Seal Fate','Shadow Step','Shiv','Shred','Sinister Strike','Sprint','Starfall','Stealth','Strangling Roots','Thorns','Time Stop','Tranquility','Vigor','Wild Growth','Wrath','Swipe',"Shapeshift: Cat",'Shapeshift: Bear','Shapeshift: Astral','Shapeshift: Tree of Life',"Nature\'s Might",'Maim','Sunfire','Overrun','Provoke','Shapeshift: Cat','Shapeshift: Bear',"King of the Jungle",'Solar Flare','Starfire','Nourish','Force of Nature','Rebirth','Heroic Strike','Slam','Rend','Battle Shout','Battle Stance','Intercept','Parry','Berserker Stance','Defensive Stance','Shield Bash','Hamstring','Pummel','Anger Management','Counter','Shield Wall','Taunt','Cleave','Charge','Bloodthirst','Whirlwind','Mortal Strike','Execute','Thunder Clap','Enrage','Devastate','Sweeping Strikes','Colossus Smash','Maddening Rage','Ignore Pain','Indomitable','Recklessness','Die By the Sword','Revenge','Onslaught','Blade Storm',
'Arcane Shot','Kill Command','Aspect of the Monkey','Aspect of the Hawk','Aspect of the Cheetah','Serpent Sting','Concussive Shot','Steel Trap',"Hunter's Mark",'Careful Aim','Summon Animal Companion','Snipe','Multi Shot','Frost Trap','Frost trap','Rapid Fire','Aimed Shot','Explosive Trap','Explosive trap','Feign Death','Beastial Wrath','Disengage','Explosive Shot','Spirit Bond','Camouflage','Camoflage','Killer Instinct',
"Predator's Mark",'Eagle Eye','Ricochet Shot','Apex Predator','Double Tap','Lock and Load','Guerrilla tactics','Scent of Blood','One With the Pack','Thrill of the Hunt',
'Heal','Smite','Divine Word: Shield','Divine Word: Fortitude','Resurrect','Shadow word: Pain','Shadow Word: Pain','Mind Control','Divine Word: Empower','Holy Fire','Holy Nova','Shadow Word: Death','Shadow word: Death','Dispersion','Shadow Infusion','Mind Blast','Greater Heal','Flash Heal','Devouring Plague','Divine Spirit','Desperate Plea','Divine Word: Enlighten','Consecration','Summon Shadow Fiend','Evangelism','Penance','Mind Flay','Noble Sacrifice','Lay on Hands','Wrath of God','Hells Advocate',
'Sins of the Many','Damnation','Black Out','Inner Fire','Crusader Strike','Inner Focus','Lightwell',
'Corruption','Curse of Weakness','Shadow Bolt','Immolate','Summon: Imp','Create: Health Stone','Create: Mana Stone','Fear','Siphon Life','Searing Pain','Summon: Fel Guard','Summon: Fel Hunter','Curse of Agony','Drain Life','Life Tap','Soul Fire','Conflagrate','Death Coil','Summon Void Walker','Unstable Affliction','Soul Harvest','Ritual of Doom',
'Create: Soul Stone','Soul Siphon','Fel Armor','Hell Fire','Implosion','Summon: Infernal','Reign Of Fire','Chaos Bolt','Death Bolt','Havoc','Unstable Power','Armies Of Hell',
'Earth Shock','Flame Shock','Frost Shock','Rock Blast','Healing Wave','Fire Shield','Earth Shield','Ancestral Knowledge','Healing Spring Totem','Searing Totem','Fire Nova Totem','Stoneskin Totem','Healing Surge','Cloud Burst Totem','Fissure','Reincarnation','Lava Burst','Lava burst','Lava Lash','Chain Heal','Earthquake','Eruption','Elemental Mastery','Maelstrom Weapon',
'Rock Biter','Ice Fury','Ice Blast','Mana Spring Totem','Grace of Air Totem','Frost Bite','Riptide','Crash Lightning',"Nature's Gaurdian",'Whirlwind Strike','Call of The Elements','Aspect of Nature','Aspect of Fire','Aspect of Ice','Aspect of the Ascended','Ancestral Spirit',
'Magic Missile','Foresight','Gravity Bomb','Accelerate','Slow','Daze','Insight','Blink','Dispel','Time Warp','Arcane Orb','Rewind','Future Sight','Inversion','Time Loop','Chronoshift','Time Bank','Memory Lapse','Mending','Celerity','Arcane Torrent','Time Bomb','Freeze Time','Reversion','Portal','Fate of One','Black Hole','Gravity Beam',
'Temporal Abstraction','Switch Fate','Time Shudder','Dimension Lock','Spell Surge','Comet',
'Skull Crack',"Slice 'n Dice",'Preparation','Vanish','Cold Blood','Shadow Strike',
'Water Elemental','Blizzard','Flamestrike','Presence of Mind','Evocation',"Dragon's Breath",'Cold Snap','Pyroclasm','Icy Veins','Phoenix Flames','Meteor','Arcane Blast','Shatter',
'Swift Mend',"Gaia's Bounty",'Astral Alignment',"Tiger's Fury",'Iron Hide',
'Shield wall','Life tap']);
 if(_HANDLED_CARDS.has(card.name)) C._shredOverrideFired=true;
 let dmg=extractDamage(card.hit||'');
 if(dmg===0&&card.type==='damage')dmg=2;
 let bonusDmg=(G.char.dmgBonus||0)+(G.char._eqDmg||0)+(G.char._eqDmgAll||0)+(C._maulDmgBuff||0);
const _cdt=getCardDmgType(card);if(_cdt&&DMG_TYPE_PROP[_cdt])bonusDmg+=(G.char[DMG_TYPE_PROP[_cdt]]||0);
if(_cdt&&['fire','frost','nature','arcane','shadow','holy'].includes(_cdt))bonusDmg+=(G.char._eqDmgMagic||0);
 const isMelee=CARD_DAMAGE_TYPES[card.name]==='melee'||(card.hit||'').includes(' melee ');
 if(isMelee&&(G.char.currentForm==='cat'||G.char.currentForm==='both'))bonusDmg+=2+(G.char._catFormBonus||0);
 if((C._petPlayerDmgBuff||0)>0)bonusDmg+=C._petPlayerDmgBuff;
 if((C._felHunterShadowBuff||0)>0&&getCardDmgType(card)==='shadow')bonusDmg+=C._felHunterShadowBuff;
 if((G.char._moltenArmorFireBonus||0)>0&&CARD_TALENTS[card.name]==='Fire')bonusDmg+=G.char._moltenArmorFireBonus;
 if((C._nextFireDmgBonus||0)>0&&CARD_TALENTS[card.name]==='Fire'){bonusDmg+=C._nextFireDmgBonus;C._nextFireDmgBonus=0;}
 if((C._nextIceDmgBonus||0)>0&&CARD_TALENTS[card.name]==='Ice'){bonusDmg+=C._nextIceDmgBonus;C._nextIceDmgBonus=0;}
 if((C._nextArcaneDmgBonus||0)>0&&CARD_TALENTS[card.name]==='Arcane'){bonusDmg+=C._nextArcaneDmgBonus;C._nextArcaneDmgBonus=0;}

 if((G.char._astralBonusDmg||0)>0&&CARD_TALENTS[card.name]==='Balance') bonusDmg+=G.char._astralBonusDmg; // Generic next-card bonus
 if(C.nextCardDmgBonus>0){bonusDmg+=C.nextCardDmgBonus;C.nextCardDmgBonus=0;}
 // Shadow Fiend: gain a shadow counter each time player deals shadow magic damage (max 5)
 if(_cdt==='shadow'&&(outcomeType==='hit'||outcomeType==='crit')){
 const sf=(C._pets||[]).find(p=>p.id==='priestShadowFiend'&&p.hp>0);
 if(sf){ sf.counters=Math.min(5,(sf.counters||0)+1); log(`🌑 Shadow Fiend gains a counter (${sf.counters}/5).`,'log-info'); }
 }
 // Predator's Mark: marked target takes +mark stacks bonus damage
 if(target&&(target._predatorMark||0)>0)bonusDmg+=(target._predatorMark||0);
 // Hunter's Mark: +1 damage of any type vs marked target
 if(target&&target._hunterMarked)bonusDmg+=1;
 // Killer Instinct: +3 dmg to targets below 50% HP
 if(C._killerInstinctActive&&target&&target.hp<=Math.ceil(target.maxHP/2))bonusDmg+=3;
 // Ice Fury: next N ice sources deal double
 if((C._iceFuryNextDoubleCount||0)>0&&_cdt==='ice'&&(outcomeType==='hit'||outcomeType==='crit')){C._iceFuryNextDoubleCount--;C._dmgDoubleActive=true;log('❄️ Ice Fury: ice damage doubled!','log-info');}
 // Black Out: shadow abilities deal double damage
 if(C._blackOutActive&&_cdt==='shadow'&&(outcomeType==='hit'||outcomeType==='crit'))C._dmgDoubleActive=true;
 // Unstable Power: shadow damage doubled
 if(C._unstablePowerActive&&_cdt==='shadow'&&(outcomeType==='hit'||outcomeType==='crit'))C._dmgDoubleActive=true;
 // Hell's Advocate: spend a charge to double shadow damage
 if((C._hellsAdvocateCharges||0)>0&&_cdt==='shadow'&&(outcomeType==='hit'||outcomeType==='crit')){C._hellsAdvocateCharges--;C._dmgDoubleActive=true;log(`👿 Hell's Advocate: shadow doubled! (${C._hellsAdvocateCharges} charges left)`,'log-info');}
 // Ritual of Doom: triple shadow damage this turn (add 2× base as bonus ≈ 3×)
 if(C._ritualOfDoomActive&&_cdt==='shadow'&&(outcomeType==='hit'||outcomeType==='crit'))bonusDmg+=dmg*2;
 // Camouflage: next ability deals double damage
 if(C._camouflageNextDouble&&(outcomeType==='hit'||outcomeType==='crit')){C._camouflageNextDouble=false;C._dmgDoubleActive=true;log('🎭 Camouflage: damage doubled!','log-info');}
 // Aimed Shot: next ranged card deals double damage
 if(C._aimedShotActive&&_cdt==='ranged'&&(outcomeType==='hit'||outcomeType==='crit')){C._aimedShotActive=false;C._dmgDoubleActive=true;log('🎯 Aimed Shot: ranged damage doubled!','log-info');}
 const stealthFx=(G.char.statusEffects||[]).find(s=>s.id==='stealth');
 const _wasStealthed = !!stealthFx; // capture BEFORE consumption for card handlers
 if(stealthFx && (card.type==='damage'||isMelee)){
 bonusDmg+=1; // stealth attack bonus
 G.char.statusEffects=G.char.statusEffects.filter(s=>s.id!=='stealth');
 log('👤 Stealth: +1 attack bonus. Stealth breaks!','log-info');
 }
 let totalDmg=(dmg+bonusDmg)*(doubleDmg||isCrit?2:1);
 // Health/utility cards should not deal generic damage to enemies
 // Only apply generic damage for cards NOT in the handled set
 if(totalDmg>0&&target&&target.hp>0&&!C._shredOverrideFired&&card.type!=='health'&&card.type!=='cards'&&card.type!=='target'&&card.type!=='buff')dealEnemyDamage(target,totalDmg,C.targetIdx);

 // Fire tracking
 if(CARD_TALENTS[card.name]==='Fire'&&(outcomeType==='hit'||outcomeType==='crit'))C._dealtFireThisTurn=true;
 // Icy Veins: first ice ability each turn grants extra play
 if(C._icyVeinsActive&&CARD_TALENTS[card.name]==='Ice'&&(outcomeType==='hit'||outcomeType==='crit')&&!C._icyVeinsUsedThisTurn){C._icyVeinsUsedThisTurn=true;C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;log('❄️ Icy Veins: ice ability — extra play!','log-info');}

 // Rogue: combo point SPENDING — scaling power curves
 const comboSpent=C.comboPointsToSpend||0;
 const comboSpendDef=COMBO_SPEND_CARDS[card.name];
 if(comboSpendDef&&comboSpent>0&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.comboPoints=Math.max(0,(G.char.comboPoints||0)-comboSpent);
 C.comboPointsToSpend=0;
 const critMult=isCrit?2:1;
 const tgt=target;

 if(card.name==='Eviscerate'){
 // Scaling: 1pt=6, 2pt=14, 3pt=24, 4pt=36, 5pt=50 — triangular ramp
 const evBase=[0,3,7,12,17,23][comboSpent]||comboSpent*5;
 const evDmg=Math.floor((evBase+bonusDmg)*critMult);
 dealEnemyDamage(tgt,evDmg,C.targetIdx);
 log(`⚡ Eviscerate [${comboSpent}pt]: ${evDmg} melee damage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;

 } else if(card.name==="Coup de Grâce"){
 // Scaling: 1pt=5, 2pt=12, 3pt=21, 4pt=32, 5pt=45
 // Below half HP: ×1.5 per point (vicious finish)
 const cdBase=[0,3,6,10,15,21][comboSpent]||comboSpent*4;
 const belowHalf=tgt&&tgt.hp<=Math.ceil(tgt.maxHP/2);
 const cdMult=belowHalf?Math.floor(1+comboSpent*0.3):1; // more brutal the more pts spent
 const cdDmg=Math.floor((cdBase+bonusDmg)*critMult*cdMult);
 dealEnemyDamage(tgt,cdDmg,C.targetIdx);
 if(belowHalf)log(`⚡ Coup de Grâce [${comboSpent}pt]: ${cdDmg} damage — FINISHING BLOW ×${cdMult}!`,'log-crit');
 else log(`⚡ Coup de Grâce [${comboSpent}pt]: ${cdDmg} damage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;

 } else if(card.name==='Rupture'){
 // Scaling: 1pt=2 stacks, 2pt=5, 3pt=9, 4pt=14, 5pt=20 — accelerating stacks
 const rupStacks=[0,1,2,4,7,11][comboSpent]||comboSpent*2;
 tgt&&(tgt.debuffs=tgt.debuffs||[]);
 const hem=tgt&&tgt.debuffs.find(d=>d.id==='hemorrhage');
 if(hem)hem.stacks+=rupStacks; else tgt&&tgt.debuffs.push({id:'hemorrhage',stacks:rupStacks});
 if(isCrit){G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+comboSpent);log(`⚡ Rupture CRIT: combo points returned!`,'log-crit');}
 log(`⚡ Rupture [${comboSpent}pt]: +${rupStacks} Hemorrhage${isCrit?' (free — pts returned)':''}!`,'log-hit');
 C._shredOverrideFired=true;

 } else if(card.name==='Killing Spree'){
 // Scaling: each point hits for more — 1pt=3, 2pt=7, 3pt=12, 4pt=18, 5pt=25 total to all
 const ksHits=[0,2,4,7,10,14][comboSpent]||comboSpent*3;
 const ksDmg=Math.floor((ksHits+bonusDmg)*critMult);
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,ksDmg,ei);});
 log(`⚡ Killing Spree [${comboSpent}pt]: ${ksDmg} damage to ALL enemies!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;

 } else if(card.name==='Blade Flurry'){
 // 1pt=1 repeat, 2pt=2 repeats +2 dmg each, 3pt=3 +4 each, 4pt=4 +6 each, 5pt=5 +8 each
 const bfRepeats=comboSpent;
 const bfBonus=Math.max(0,(comboSpent-1));
 C._bladeFlurryRepeats=bfRepeats;
 C._bladeFlurryDmgBonus=bfBonus;
 log(`⚡ Blade Flurry [${comboSpent}pt]: chosen card repeats ${bfRepeats}× with +${bfBonus} dmg each!`,'log-info');
 C._shredOverrideFired=true;

 } else if(card.name==='Way Lay'){
 const wlDmg=Math.floor((comboSpent*2+bonusDmg)*critMult);
 if(tgt&&tgt.hp>0)dealEnemyDamage(tgt,wlDmg,C.targetIdx);
 log(`⚡ Way Lay [${comboSpent}pt]: ${wlDmg} melee damage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 log(`⚡ ${comboSpent} Combo Point${comboSpent!==1?'s':''} spent.`,'log-system');
 }
 // Rogue: combo point GAINING
 if(G.char.className==='Rogue'&&(card.hit?.includes('Combo Point'))&&(outcomeType==='hit'||outcomeType==='crit')){
 const gain=isCrit?2:1;
 G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+gain);
 log(`Gained ${gain} Combo Point${gain>1?'s':''} (${G.char.comboPoints}/5)`,'log-info');
 }
 // Mage: ignite counters
 if(G.char.className==='Mage'&&card.hit?.toLowerCase().includes('ignite')){
 C.enemies.forEach(e=>{if(e.hp>0){e.debuffs=e.debuffs||[];const ig=e.debuffs.find(d=>d.id==='ignite');if(ig)ig.stacks+=(isCrit?2:1);else e.debuffs.push({id:'ignite',stacks:isCrit?2:1});}});
 log(`🔥 Ignite applied! (${isCrit?2:1} stack${isCrit?'s':''})`,'log-info');
 }

 // ── NEW CLASS CARD HANDLERS ──────────────────────────────────────

 // ═══════════ WARRIOR ═══════════
 if(card.name==='Heroic Strike'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rageSpent=C._rageSpent||0;
 const rageDmg=rageSpent*2;
 const dmgAmt=(4+bonusDmg+rageDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,dmgAmt,C.targetIdx);
 G.char._rageCounters=Math.min(3,(G.char._rageCounters||0)+1);
 log(`⚔️ Heroic Strike: ${dmgAmt} melee damage${rageSpent>0?` (${rageSpent}💢 → +${rageDmg} dmg)`:''} +1 Rage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Slam'&&(outcomeType==='hit'||outcomeType==='crit')){
 const dmgAmt=(3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,dmgAmt,C.targetIdx);target._noAttackThisTurn=true;}
 G.char._rageCounters=Math.min(3,(G.char._rageCounters||0)+1);
 log(`⚔️ Slam: ${dmgAmt} melee damage + 1 Rage! Target stunned!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Rend'&&(outcomeType==='hit'||outcomeType==='crit')){
 const stacks=isCrit?6:3;
 if(target&&target.hp>0){target.debuffs=target.debuffs||[];const hem=target.debuffs.find(d=>d.id==='hemorrhage');if(hem)hem.stacks+=stacks;else target.debuffs.push({id:'hemorrhage',stacks});}
 G.char._rageCounters=Math.min(3,(G.char._rageCounters||0)+1);
 log(`🩸 Rend: ${stacks} bleed stacks applied! +1 Rage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Battle Shout'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.dmgBonus=(G.char.dmgBonus||0)+2;
 C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+(isCrit?2:1);
 G.char._rageCounters=Math.min(3,(G.char._rageCounters||0)+1);
 log(`📣 Battle Shout: +2 melee damage this and next turn! +1 Rage!`,'log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Battle Stance'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.dmgBonus=(G.char.dmgBonus||0)+1; G.char._stance='battle';
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`⚔️ Battle Stance: +1 melee damage (persistent). Extra play!`,'log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Intercept'&&(outcomeType==='hit'||outcomeType==='crit')){
 const icDmg=(3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,icDmg,C.targetIdx);
 dealPlayerDamage(1,'Intercept self-damage',true);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`💨 Intercept: ${icDmg} damage, took 1 self-damage, extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Parry'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.preventAttackDamageThisTurn=true;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 if(isCrit){G.char._rageCounters=Math.min(3,(G.char._rageCounters||0)+2);log('🛡️ Parry CRIT: +2 Rage from perfect parry!','log-crit');}
 log('🛡️ Parry: all attack damage blocked this turn! Extra play!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Berserker Stance'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.dmgBonus=(G.char.dmgBonus||0)+1; G.char._stance='berserker';
 C._berserkerMode=true; // take +1 dmg each turn, deal +1
 log(`😡 Berserker Stance: +1 melee damage (persistent), but take +1 from attacks.`,'log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Defensive Stance'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char._stance='defensive'; G.char.dmgReduction=(G.char.dmgReduction||0)+1;
 log('🛡️ Defensive Stance: -1 melee damage dealt, prevent 1 from each attack source (persistent).','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Shield Bash'&&(outcomeType==='hit'||outcomeType==='crit')){
 const sbDmg=(3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,sbDmg,C.targetIdx);
 C._shieldWallCounters=(C._shieldWallCounters||0)+3;
 G.char._rageCounters=Math.min(3,(G.char._rageCounters||0)+1);
 log(`🛡️ Shield Bash: ${sbDmg} damage, +3 shield counters (blocks 3 attack damage), +1 Rage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Hamstring'&&(outcomeType==='hit'||outcomeType==='crit')){
 const hsDmg=(2+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,hsDmg,C.targetIdx);target.debuffs=target.debuffs||[];const mk=target.debuffs.find(d=>d.id==='marked');if(mk)mk.stacks+=2;else target.debuffs.push({id:'marked',stacks:2});}
 G.char._rageCounters=Math.min(3,(G.char._rageCounters||0)+1);
 log(`⚔️ Hamstring: ${hsDmg} damage, target takes +2 from all sources this turn! +1 Rage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Pummel'&&(outcomeType==='hit'||outcomeType==='crit')){
 const pmDmg=(3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,pmDmg,C.targetIdx);
 G.char._rageCounters=Math.min(3,(G.char._rageCounters||0)+1);
 C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+1;
 log(`⚔️ Pummel: ${pmDmg} damage, draw 1 extra next turn! +1 Rage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Whirlwind'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rageSpent=C._rageSpent||0;
 const wwDmg=(3+bonusDmg+rageSpent)*(isCrit?2:1);
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,wwDmg,ei);});
 log(`🌀 Whirlwind: ${wwDmg} melee to ALL enemies${rageSpent>0?` (${rageSpent}💢→+${rageSpent} dmg)`:''}!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Execute'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rageSpent=C._rageSpent||0;
 const belowHalf=target&&target.hp<=Math.ceil(target.maxHP/2);
 const rageDmg=rageSpent*(belowHalf?3:1);
 const exBase=belowHalf?8:5;
 const exDmg=(exBase+bonusDmg+rageDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,exDmg,C.targetIdx);
 log(`⚔️ Execute: ${exDmg} damage${belowHalf?' (below half HP)':''}${rageSpent>0?` (${rageSpent}💢→+${rageDmg} dmg)`:''}!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Thunder Clap'&&(outcomeType==='hit'||outcomeType==='crit')){
 const tcDmg=(2+bonusDmg)*(isCrit?2:1);
 C.enemies.forEach((e,ei)=>{if(e.hp>0){dealEnemyDamage(e,tcDmg,ei);e._halfAttackNextTurn=true;}});
 log(`⚡ Thunder Clap: ${tcDmg} to all, all enemies deal half damage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Mortal Strike'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rageSpent=C._rageSpent||0;
 const msDmg=(5+bonusDmg+rageSpent*2)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,msDmg,C.targetIdx);target.statusEffects=target.statusEffects||[];if(!target.statusEffects.find(s=>s.id==='no-heal'))target.statusEffects.push({id:'no-heal',turnsLeft:1});}
 log(`⚔️ Mortal Strike: ${msDmg} melee damage${rageSpent>0?` (${rageSpent}💢→+${rageSpent*2} dmg)`:''}, target can't heal this turn!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if((card.name==='Shield Wall'||card.name==='Shield wall')&&(outcomeType==='hit'||outcomeType==='crit')){
 C._shieldWallBuffTurns=(C._shieldWallBuffTurns||0)+(isCrit?6:3);
 log(`🛡️ Shield Wall: gain 1 shield charge at the start of each turn for ${isCrit?6:3} turn(s)!`,isCrit?'log-crit':'log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Charge'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rageSpent=C._rageSpent||0;
 const chDmg=(5+bonusDmg+rageSpent)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,chDmg,C.targetIdx);
 dealPlayerDamage(2,'Charge self-damage',true);
 G.char._rageCounters=Math.min(3,(G.char._rageCounters||0)+2);
 if(target)target._stunnedTurns=(target._stunnedTurns||0)+(isCrit?2:1);
 log(`💨 Charge: ${chDmg} damage${rageSpent>0?` (${rageSpent}💢→+${rageSpent} dmg)`:''}, 2 self-dmg, +2 Rage, target stunned${isCrit?' 2 turns':''}!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Bloodthirst'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rageSpent=C._rageSpent||0;
 const btDmg=(4+bonusDmg+rageSpent)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,btDmg,C.targetIdx);
 const btHeal=Math.ceil(btDmg/3);
 const _btOld=G.char.hp; G.char.hp=Math.min(G.char.maxHP,G.char.hp+btHeal);
 log(`🩸 Bloodthirst: ${btDmg} damage${rageSpent>0?` (${rageSpent}💢→+${rageSpent} dmg)`:''}, healed ${G.char.hp-_btOld} HP → ${G.char.hp}/${G.char.maxHP}!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Enrage'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.dmgBonus=(G.char.dmgBonus||0)+(isCrit?4:2);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`😡 Enrage: +${isCrit?4:2} damage this combat! Extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Colossus Smash'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rageSpent=C._rageSpent||0;
 const csDmg=(10+bonusDmg+rageSpent*2)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,csDmg,C.targetIdx);target.statusEffects=target.statusEffects||[];if(!target.statusEffects.includes('shield-broken'))target.statusEffects.push('shield-broken');}
 C.skipNextPlayerTurn=true;
 log(`💥 Colossus Smash: ${csDmg} damage${rageSpent>0?` (${rageSpent}💢→+${rageSpent*2} dmg)`:''}, armor shattered, lose next turn!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Ignore Pain'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.dmgReduction=(G.char.dmgReduction||0)+(isCrit?4:2);
 log(`💪 Ignore Pain: +${isCrit?4:2} damage reduction this combat!`,'log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Recklessness'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.critThreshold=Math.max(16,(G.char.critThreshold||20)-4);
 G.char.dmgBonus=(G.char.dmgBonus||0)+3;
 log(`😤 Recklessness: crit on ${G.char.critThreshold}+, +3 damage — but take +2 from attacks!`,'log-crit');
 C._berserkerMode=true;
 C._shredOverrideFired=true;
 }
 if(card.name==='Revenge'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rvDmg=(3+bonusDmg)*(isCrit?2:1);
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,rvDmg,ei);});
 log(`⚔️ Revenge: ${rvDmg} melee to ALL enemies!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Onslaught'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rageBonus=G.char._rageCounters||0;
 G.char.dmgBonus=(G.char.dmgBonus||0)+rageBonus;
 C._onslaughtBonus=(C._onslaughtBonus||0)+rageBonus;
 if(isCrit){G.char._rageCounters=Math.min(3,(G.char._rageCounters||0)+3);log(`⚔️ Onslaught CRIT: +${rageBonus} dmg from rage! +3 Rage!`,'log-crit');}
 else log(`⚔️ Onslaught: +${rageBonus} persistent melee dmg (${rageBonus} rage stacks)!`,'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Blade Storm'&&(outcomeType==='hit'||outcomeType==='crit')){
 const bsDmg=(isCrit?5:3)+bonusDmg;
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,bsDmg,ei);});
 C._bladeStormTurns=3;
 log(`⚔️ Blade Storm: ${bsDmg} melee to ALL enemies! Continues ${C._bladeStormTurns} more turns!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Anger Management'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rageSpent=C._rageSpent||0;
 if(rageSpent===3){
  G.char.dmgReduction=(G.char.dmgReduction||0)+1;
  log(`😤 Anger Management: +1 damage reduction (3💢 spent)!`,isCrit?'log-crit':'log-hit');
 } else if(rageSpent>0){
  C._angerMgmtArmor=(C._angerMgmtArmor||0)+rageSpent;
  log(`😤 Anger Management: +${rageSpent} armor (${rageSpent}💢 spent)!`,isCrit?'log-crit':'log-hit');
 } else {
  log(`😤 Anger Management played with no rage — no effect!`,'log-info');
 }
 C._shredOverrideFired=true;}
 if(card.name==='Counter'&&(outcomeType==='hit'||outcomeType==='crit')){
 const missing=G.char.maxHP-G.char.hp;const ctrBase=Math.min(isCrit?999:10,Math.ceil(missing/2));const ctrDmg=(ctrBase+bonusDmg)*(isCrit?1:1);
 if(target&&target.hp>0)dealEnemyDamage(target,Math.max(1,ctrDmg),C.targetIdx);
 log(`⚔️ Counter: ${Math.max(1,ctrDmg)} melee (half missing HP${isCrit?', no cap':' max 10'})!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Taunt'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.preventAttackDamageThisTurn=true;const alliesProtected=isCrit?1:2;dealPlayerDamage(alliesProtected,'Taunt (self)',true);
 log(`🛡️ Taunt: blocked attack damage! Took ${alliesProtected} self-damage protecting allies.${isCrit?' Half incoming!':''}`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Cleave'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rageSpent=C._rageSpent||0;
 const clvDmg=(3+bonusDmg+rageSpent*2)*(isCrit?2:1);
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,clvDmg,ei);});
 G.char._rageCounters=Math.min(3,(G.char._rageCounters||0)+1);
 log(`⚔️ Cleave: ${clvDmg} melee to ALL enemies${rageSpent>0?` (${rageSpent}💢→+${rageSpent*2} dmg)`:''} +1 Rage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Devastate'&&(outcomeType==='hit'||outcomeType==='crit')){
 const dvDmg=(2+bonusDmg)*(isCrit?2:1);if(target&&target.hp>0){dealEnemyDamage(target,dvDmg,C.targetIdx);target._devastated=true;}
 log(`⚔️ Devastate: ${dvDmg} melee! ${target?.name||'target'} takes double melee damage this turn!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Sweeping Strikes'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._sweepingStrikesActive=true;C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 if(isCrit)C._sweepingStrikesActive=2;
 log(`⚔️ Sweeping Strikes: melee abilities hit an extra target this turn${isCrit?' (2 turns)':''}! Extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Maddening Rage'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rage=G.char._rageCounters||0;C.nextCardDmgBonus=(C.nextCardDmgBonus||0)+rage;
 dealPlayerDamage(3,'Maddening Rage',true);C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 if(isCrit){G.char._rageCounters=3;log(`😤 Maddening Rage CRIT: max rage (3)! +${rage} to next ability, 3 self-dmg, extra play!`,'log-crit');}
 else log(`😤 Maddening Rage: +${rage} to next ability, 3 self-dmg, extra play!`,'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Indomitable'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._indomitableActive=true;C._indomitableMinHP=isCrit?G.char.hp:1;
 log(`💪 Indomitable: damage redirected, HP can't drop below ${isCrit?G.char.hp:1}!${isCrit?' (CRIT — current HP floor)':''}`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Die By the Sword'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._dieBySwordActive=true;
 log('⚔️ Die By the Sword: cannot be killed by damage less than current HP (persistent)!',isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}

 // ═══════════ HUNTER ═══════════
 if(card.name==='Arcane Shot'&&(outcomeType==='hit'||outcomeType==='crit')){
 const asDmg=(2+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,asDmg,C.targetIdx);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 const asDrawCount=isCrit?2:1;
 const asRes=drawFromDeck(C.deck,C.discard,asDrawCount);
 C.deck=asRes.deck;C.discard=asRes.discard;C.hand=[...C.hand,...asRes.drawn];
 log(`🏹 Arcane Shot: ${asDmg} ranged damage, drew ${asRes.drawn.length} card${asRes.drawn.length!==1?'s':''}, extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Kill Command'&&(outcomeType==='hit'||outcomeType==='crit')){
 const hasPet=(C._treants||0)>0||G.char._petActive||hasLivingPet();
 const kcDmg=(hasPet?6:3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,kcDmg,C.targetIdx);
 log(`🐺 Kill Command: ${kcDmg} damage${hasPet?' (pet bonus!)':''}!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Aspect of the Monkey'&&(outcomeType==='hit'||outcomeType==='crit')){
 if(!G.char._aspectMonkey){ G.char._aspectMonkey=true; C._aspectMonkeyFromCombat=true; }
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🐒 Aspect of the Monkey: each attack, roll — 11+ = half damage taken! Extra play!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Aspect of the Hawk'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.dmgBonus=(G.char.dmgBonus||0)+1; C._aspectHawkDmgDelta=(C._aspectHawkDmgDelta||0)+1;
 C._aspectHawkActive=true; C._aspectHawkDrawPenalty=(C._aspectHawkDrawPenalty||0)+1;
 log('🦅 Aspect of the Hawk: +1 ranged damage. Draw -1 per turn.','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Aspect of the Cheetah'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.rollBonus=(G.char.rollBonus||0)+1; C._aspectCheetahRollDelta=(C._aspectCheetahRollDelta||0)+1;
 G.char.extraDraw=(G.char.extraDraw||0)+1; C._aspectCheetahDrawDelta=(C._aspectCheetahDrawDelta||0)+1;
 C._aspectCheetahActive=true;
 log('🐆 Aspect of the Cheetah: +1 to all rolls, draw +1 per turn, take +1 from attacks.','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Serpent Sting'&&(outcomeType==='hit'||outcomeType==='crit')){
 const ssDmg=(isCrit?4:3)+bonusDmg;
 const stacks=isCrit?5:3;
 if(target&&target.hp>0){dealEnemyDamage(target,ssDmg,C.targetIdx);target.debuffs=target.debuffs||[];const px=target.debuffs.find(d=>d.id==='poison');if(px)px.stacks+=stacks;else target.debuffs.push({id:'poison',stacks});}
 log(`🐍 Serpent Sting: ${ssDmg} ranged damage + ${stacks} Poison stacks!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Concussive Shot'&&(outcomeType==='hit'||outcomeType==='crit')){
 const csDmg=(2+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,csDmg,C.targetIdx);target._halfAttackNextTurn=true;}
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`🏹 Concussive Shot: ${csDmg} damage, target half attack, extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Steel Trap'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._steelTrapActive=true;
 log('🪤 Steel Trap set! Next attack against you: trap fires for 5 damage to attacker!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Summon Animal Companion'&&(outcomeType==='hit'||outcomeType==='crit')){
 const petRoll=Math.max(1,Math.min(20,d20()+(G.char.rollBonus||0)));
 const petDef=pickHunterPetByRoll(petRoll);
 const replaced=(C._pets||[]).filter(p=>p.hp>0).map(p=>p.name);
 if(replaced.length) log(`💨 ${replaced.join(' & ')} replaced by ${petDef.name}.`,'log-system');
 summonPet(petDef);
 log(`🐾 Summoned ${petDef.name} (rolled ${petRoll})! HP ${petDef.maxHP}/${petDef.maxHP}.`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Snipe'&&(outcomeType==='hit'||outcomeType==='crit')){
 const snipeDmg=(10+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,snipeDmg,C.targetIdx);
 C.drawPenalty=1; // only draw 1 next turn
 log(`🎯 Snipe: ${snipeDmg} damage! (Draw 1 only next turn)`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Rapid Fire'&&(outcomeType==='hit'||outcomeType==='crit')){
 let rfTotal=0,dc=6;
 for(let r=0;r<6;r++){
 const rfDmg=(2+bonusDmg)*(isCrit&&r===0?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,rfDmg,C.targetIdx);rfTotal+=rfDmg;}
 dc+=2;const roll=d20();
 if(roll<dc){log(`🏹 Rapid Fire repeat ${r+2}: rolled ${roll} vs DC ${dc} — stopped.`,'log-miss');break;}
 log(`🏹 Rapid Fire repeat ${r+2}: rolled ${roll} — fires again!`,'log-hit');
 }
 log(`🏹 Rapid Fire total: ${rfTotal} ranged damage!`,'log-crit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Aimed Shot'&&(outcomeType==='hit'||outcomeType==='crit')){
 if(isCrit) C._aimedShotAutoCrit=true;
 else C._aimedShotActive=true;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(isCrit?'🎯 Aimed Shot CRIT: next ranged card auto-crits! Extra play!':'🎯 Aimed Shot: next ranged card deals double damage! Extra play!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Feign Death'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.preventAttackDamageThisTurn=true;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 G.char.statusEffects=G.char.statusEffects||[];
 G.char.statusEffects.push({id:'stealth',stacks:1});
 log('💀 Feign Death: no attacks this round, gain Stealth, extra play!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==="Predator's Mark"&&(outcomeType==='hit'||outcomeType==='crit')){
 if(target&&target.hp>0){target._hunterMarked=false;target._markType='predator';target._predatorMark=Math.min((target._predatorMark||0)+(isCrit?3:1),3);}
 log(`🎯 Predator's Mark: ${target?._predatorMark||0}/3 stacks on ${target?.name||'target'} (+${target?._predatorMark||0} dmg/hit)!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Eagle Eye'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+(isCrit?3:2);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`🦅 Eagle Eye: draw ${isCrit?3:2} extra next turn! Extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Ricochet Shot'&&(outcomeType==='hit'||outcomeType==='crit')){
 const firstDmg=(4+bonusDmg)*(isCrit?2:1);
 const hitTargets=[];
 if(target&&target.hp>0){dealEnemyDamage(target,firstDmg,C.targetIdx);hitTargets.push(target);}
 let rrTotal=firstDmg;
 const dc=card.risk;
 for(let hops=1;hops<3;hops++){
 const pool=C.enemies.filter(e=>e.hp>0&&!hitTargets.includes(e));
 if(!pool.length){log(`🏹 Ricochet Shot: no new targets — stopped.`,'log-info');break;}
 const rc=d20()+(G.char.rollBonus||0)+(G.char._eqRoll||0);
 if(rc<dc){log(`🏹 Ricochet Shot reroll ${hops+1}: rolled ${rc} vs DC ${dc} — bounce missed.`,'log-miss');break;}
 const next=pool[Math.floor(Math.random()*pool.length)];
 const ni=C.enemies.indexOf(next);
 const hopDmg=4+bonusDmg;
 dealEnemyDamage(next,hopDmg,ni);
 hitTargets.push(next);rrTotal+=hopDmg;
 log(`🏹 Ricochet Shot bounces to ${next.name} (rolled ${rc}) for ${hopDmg}!`,'log-hit');
 }
 log(`🏹 Ricochet Shot: ${hitTargets.length} hit(s), ${rrTotal} total ranged damage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Apex Predator'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._apexPredatorActive=true;
 log('🐆 Apex Predator: pets deal +3 damage (persistent)!',isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Double Tap'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._doubleTapActive=true;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🏹 Double Tap: next damaging ability resolves twice! Extra play!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Lock and Load'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._lockAndLoadActive=true;
 log('🏹 Lock and Load: each time you deal damage, roll 15+ for extra play (persistent)!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Guerrilla tactics'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._guerrillaTacticsActive=true;
 log('🌿 Guerrilla Tactics: traps activate twice before discarding (persistent)!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Scent of Blood'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._scentOfBloodActive=true;
 log('🩸 Scent of Blood: pet attacks deal bonus = 10% of target max HP (persistent)!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='One With the Pack'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._oneWithPackActive=true;
 log('🐺 One With the Pack: multiple pet types active simultaneously!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Thrill of the Hunt'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.critThreshold=Math.min(18,G.char.critThreshold||20);
 log(`🎯 Thrill of the Hunt: rolls of 18+ count as crits (threshold: ${G.char.critThreshold})!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==="Hunter's Mark"&&(outcomeType==='hit'||outcomeType==='crit')){
 const applyHMark=e=>{e._predatorMark=0;e._hunterMarked=true;e._markType='hunter';};
 if(isCrit){C.enemies.forEach(e=>{if(e.hp>0)applyHMark(e);});log("🎯 Hunter's Mark CRIT: ALL enemies marked! (+1 ranged dmg, +2 rolls vs them)",'log-crit');}
 else{if(target&&target.hp>0){applyHMark(target);C._hunterMarkTargetIdx=C.targetIdx;}log(`🎯 Hunter's Mark: ${target?.name||'target'} marked (+1 ranged dmg, +2 rolls vs them)`,'log-hit');}
 C._shredOverrideFired=true;}
 if(card.name==='Careful Aim'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._carefulAimActive=true;
 if(!C._lastTurnDamageTaken){G.char.dmgBonus=(G.char.dmgBonus||0)+2;log('🎯 Careful Aim: no damage last turn — +2 ranged damage (persistent)!',isCrit?'log-crit':'log-hit');}
 else log('🎯 Careful Aim: active (took damage last turn — +2 ranged if no damage next turn)','log-info');
 C._shredOverrideFired=true;}
 if(card.name==='Multi Shot'&&(outcomeType==='hit'||outcomeType==='crit')){
 const msDmg=(3+bonusDmg)*(isCrit?3:1);
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,msDmg,ei);});
 log(`🏹 Multi Shot: ${msDmg} ranged to ALL enemies!${isCrit?' (TRIPLE!)':''}`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Frost trap'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._frostTrapActive=true;if(isCrit)C._frostTrapPersists=true;
 log(`🪤 Frost Trap set! Next attack against you: enemies deal no attack damage!${isCrit?' (persists 1 extra turn)':''}`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Explosive trap'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._explosiveTrapActive=true;if(isCrit)C._explosiveTrapDoubleDmg=true;
 log(`💥 Explosive Trap set! Next attack against you: 5 fire to ALL enemies!${isCrit?' (double damage)':''}`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Beastial Wrath'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._beastialWrathActive=true;C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🐺 Beastial Wrath: pet deals double damage this turn! Extra play!',isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Disengage'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.preventAttackDamageThisTurn=true;C.bonusRoll=(C.bonusRoll||0)+2;C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 if(isCrit)C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`🏹 Disengage: no attack damage! +2 to next roll! ${isCrit?'×2 ':''}Extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Explosive Shot'&&(outcomeType==='hit'||outcomeType==='crit')){
 const esDmg=(5+bonusDmg)*(isCrit?2:1);
 if(isCrit){C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,esDmg,ei);});log(`💥 Explosive Shot CRIT: ${esDmg} fire to ALL enemies!`,'log-crit');}
 else{if(target&&target.hp>0)dealEnemyDamage(target,esDmg,C.targetIdx);log(`💥 Explosive Shot: ${esDmg} fire ranged damage!`,'log-hit');}
 C._shredOverrideFired=true;}
 if(card.name==='Spirit Bond'&&(outcomeType==='hit'||outcomeType==='crit')){
 const hasPet=!!(G.char._petActive);const sbHeal=(hasPet?6:3)*(isCrit?2:1);const _sbOld=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+sbHeal);
 if(isCrit)C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+1;
 log(`🐾 Spirit Bond: healed ${G.char.hp-_sbOld} HP${hasPet?' (pet bonus!)':''}!${isCrit?' Repeats next turn!':''}`,isCrit?'log-crit':'log-hit');
 renderHUD();C._shredOverrideFired=true;}
 if(card.name==='Camouflage'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.statusEffects=G.char.statusEffects||[];G.char.statusEffects.push({id:'stealth',stacks:1});
 C._camouflageNextDouble=true;C._camouflageHalfDmg=true;
 if(isCrit){const _cbOld=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+5);log(`🎭 Camouflage CRIT: Stealth, next ability doubled, healed ${G.char.hp-_cbOld} HP!`,'log-crit');renderHUD();}
 else log('🎭 Camouflage: Stealth! Half damage this turn. Next ability deals double!','log-info');
 C._shredOverrideFired=true;}
 if(card.name==='Killer Instinct'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._killerInstinctActive=true;
 log('🎯 Killer Instinct: +3 damage to targets below 50% HP (persistent)!',isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}

 // ═══════════ PRIEST ═══════════
 if(card.name==='Heal'&&(outcomeType==='hit'||outcomeType==='crit')){
 let healAmt=isCrit?12:6;if(C._divineSpiritActive){healAmt*=2;C._divineSpiritActive=false;} const _hOld=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+healAmt);
 log(`✨ Heal: healed ${G.char.hp-_hOld} HP → ${G.char.hp}/${G.char.maxHP}`,isCrit?'log-crit':'log-hit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Smite'&&(outcomeType==='hit'||outcomeType==='crit')){
 const smDmg=(5+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,smDmg,C.targetIdx);
 log(`✨ Smite: ${smDmg} Holy magic damage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if((card.name==='Divine Word: Shield')&&(outcomeType==='hit'||outcomeType==='crit')){
 C._shieldWallCounters=(C._shieldWallCounters||0)+(isCrit?999:1); // 999 = all damage blocked
 C._divineShieldActive=true;
 if(isCrit)C.preventAttackDamageThisTurn=true;
 log(`✨ Divine Word: Shield: ALL damage from one source blocked this turn!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Divine Word: Fortitude'&&(outcomeType==='hit'||outcomeType==='crit')){
 const hpGain=isCrit?10:5;
 G.char.maxHP=(G.char.maxHP||20)+hpGain;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+hpGain);
 log(`✨ Divine Word: Fortitude: +${hpGain} max HP for the rest of combat!`,'log-info');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Resurrect'&&(outcomeType==='hit'||outcomeType==='crit')){
 // In single player: trigger cheat death if not already active
 if(!C._rebirthActive){
 C._rebirthActive=true; C._rebirthFullHeal=isCrit;
 log(`✨ Resurrect: cheat death activated — survive next fatal hit${isCrit?' at FULL HP':''}!`,isCrit?'log-crit':'log-hit');
 } else {
 const healAmt=Math.ceil(G.char.maxHP/2); const _rOld=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+healAmt);
 log(`✨ Resurrect: already active — healed ${G.char.hp-_rOld} HP instead!`,'log-hit');
 }
 renderHUD(); C._shredOverrideFired=true;
 }
 if((card.name==='Shadow word: Pain'||card.name==='Shadow Word: Pain')&&(outcomeType==='hit'||outcomeType==='crit')){
 const swpDmg=(3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){
 dealEnemyDamage(target,swpDmg,C.targetIdx);
 target.debuffs=target.debuffs||[];
 const px=target.debuffs.find(d=>d.id==='poison');
 if(px)px.stacks+=isCrit?3:2;else target.debuffs.push({id:'poison',stacks:isCrit?3:2});
 }
 log(`🌑 Shadow Word: Pain: ${swpDmg} Shadow damage + repeating DoT!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Mind Control'&&(outcomeType==='hit'||outcomeType==='crit')){
 if(target&&target.hp>0){
 target._noAttackThisTurn=true;
 // Mind controlled enemy attacks another enemy
 const others=C.enemies.filter(e=>e.hp>0&&e!==target);
 if(others.length>0){
 const victim=others[0];
 const mcDmg=Math.ceil(target.atk*(isCrit?2:1));
 dealEnemyDamage(victim,mcDmg,C.enemies.indexOf(victim));
 log(`🌀 Mind Control: ${target.name} attacks ${victim.name} for ${mcDmg} damage!`,isCrit?'log-crit':'log-hit');
 } else {
 log(`🌀 Mind Control: ${target.name} is controlled but has no allies to attack!`,'log-hit');
 }
 }
 C._shredOverrideFired=true;
 }
 if(card.name==='Divine Word: Empower'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.bonusRoll=(C.bonusRoll||0)+(isCrit?6:3);
 G.char.dmgBonus=(G.char.dmgBonus||0)+1;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`✨ Divine Word: Empower: +${isCrit?6:3} to next roll, +1 damage, extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Holy Fire'&&(outcomeType==='hit'||outcomeType==='crit')){
 const hfDmg=(4+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,hfDmg,C.targetIdx);target.debuffs=target.debuffs||[];const ig=target.debuffs.find(d=>d.id==='ignite');if(ig)ig.stacks++;else target.debuffs.push({id:'ignite',stacks:1});}
 log(`🔥 Holy Fire: ${hfDmg} Holy/Fire damage + Ignite!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Holy Nova'&&(outcomeType==='hit'||outcomeType==='crit')){
 const hnDmg=(2+bonusDmg)*(isCrit?2:1);
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,hnDmg,ei);});
 const _hnOld=G.char.hp; G.char.hp=Math.min(G.char.maxHP,G.char.hp+(isCrit?4:2));
 log(`✨ Holy Nova: ${hnDmg} to ALL enemies, healed ${G.char.hp-_hnOld} HP!`,isCrit?'log-crit':'log-hit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if((card.name==='Shadow Word: Death'||card.name==='Shadow word: Death')&&(outcomeType==='hit'||outcomeType==='crit')){
 const belowHalf=target&&target.hp<=Math.ceil(target.maxHP/2);
 const swdDmg=(belowHalf?8:5+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,swdDmg,C.targetIdx);
 log(`🌑 Shadow Word: Death: ${swdDmg} Shadow damage${belowHalf?' (EXECUTE below 50%)':''}!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Dispersion'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._preventAbilityDmgThisTurn=true;
 C.preventAttackDamageThisTurn=isCrit;
 log(`🌑 Dispersion: immune to ability damage this turn${isCrit?' + no attack damage!':''}!`,'log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Shadow Infusion'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.autoHitCharges=(C.autoHitCharges||0)+1;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🌑 Shadow Infusion: next Shadow ability auto-succeeds! Extra shadow play!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Mind Blast'&&(outcomeType==='hit'||outcomeType==='crit')){
 const mbDmg=(8+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,mbDmg,C.targetIdx);
 log(`🌑 Mind Blast: ${mbDmg} Shadow magic damage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Greater Heal'&&(outcomeType==='hit'||outcomeType==='crit')){
 const ghBase=Math.ceil(G.char.maxHP*0.6);const ghAmt=C._divineSpiritActive?ghBase*2:ghBase;if(C._divineSpiritActive)C._divineSpiritActive=false;
 const ghOld=G.char.hp; G.char.hp=isCrit?G.char.maxHP:Math.min(G.char.maxHP,G.char.hp+ghAmt);
 C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+1;
 log(`✨ Greater Heal: healed ${G.char.hp-ghOld} HP → ${G.char.hp}/${G.char.maxHP}! Draw +1 next turn!`,isCrit?'log-crit':'log-hit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Flash Heal'&&(outcomeType==='hit'||outcomeType==='crit')){
 let fhAmt=isCrit?8:4;if(C._divineSpiritActive){fhAmt*=2;C._divineSpiritActive=false;} const _fhOld=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+fhAmt);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`✨ Flash Heal: healed ${G.char.hp-_fhOld} HP → ${G.char.hp}/${G.char.maxHP}! Extra play!`,isCrit?'log-crit':'log-hit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Devouring Plague'&&(outcomeType==='hit'||outcomeType==='crit')){
 const dpStacks=isCrit?4:2;
 if(target&&target.hp>0){target.debuffs=target.debuffs||[];const px=target.debuffs.find(d=>d.id==='poison');if(px)px.stacks+=dpStacks;else target.debuffs.push({id:'poison',stacks:dpStacks});}
 C.activeHoTs=C.activeHoTs||[];
 C.activeHoTs.push({name:'Devouring Plague',icon:'🌑',healPerTurn:1,turnsLeft:4});
 log(`🌑 Devouring Plague: ${dpStacks} Shadow DoT stacks on target, heal 1/turn for 4 rounds!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Mind Flay'&&(outcomeType==='hit'||outcomeType==='crit')){
 let mfTotal=0,dc=8;
 for(let r=0;r<4;r++){
 const mfDmg=(2+bonusDmg)*(isCrit&&r===0?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,mfDmg,C.targetIdx);mfTotal+=mfDmg;}
 dc+=3;const roll=d20();
 if(roll<dc){log(`🌑 Mind Flay pulse ${r+2}: rolled ${roll} vs DC ${dc} — ends.`,'log-miss');break;}
 log(`🌑 Mind Flay pulse ${r+2}: rolled ${roll} — continues!`,'log-hit');
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 }
 log(`🌑 Mind Flay total: ${mfTotal} Shadow damage!`,mfTotal>6?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Penance'&&(outcomeType==='hit'||outcomeType==='crit')){
 const penDmg=(3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,penDmg,C.targetIdx);dealEnemyDamage(target,penDmg,C.targetIdx);}
 const _penOld=G.char.hp; G.char.hp=Math.min(G.char.maxHP,G.char.hp+(isCrit?6:3));
 log(`✨ Penance: ${penDmg*2} Holy damage (2 bolts), healed ${G.char.hp-_penOld} HP!`,isCrit?'log-crit':'log-hit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Lay on Hands'&&(outcomeType==='hit'||outcomeType==='crit')){
 const _lohOld=G.char.hp; G.char.hp=G.char.maxHP;
 log(`✨ LAY ON HANDS: Fully restored to ${G.char.maxHP}/${G.char.maxHP} HP!`,'log-crit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Wrath of God'&&(outcomeType==='hit'||outcomeType==='crit')){
 const wogDmg=(6+bonusDmg)*(isCrit?2:1);
 C.enemies.forEach((e,ei)=>{if(e.hp>0){dealEnemyDamage(e,wogDmg,ei);e._stunnedTurns=(e._stunnedTurns||0)+1;}});
 log(`✨ Wrath of God: ${wogDmg} to ALL enemies + all stunned 1 turn!`,'log-crit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Noble Sacrifice'&&(outcomeType==='hit'||outcomeType==='crit')){
 const sacDmg=Math.floor((G.char.maxHP-G.char.hp)/2); // deal damage equal to half missing HP
 G.char.hp=Math.ceil(G.char.maxHP*0.1); // go to 10% HP
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,sacDmg+(bonusDmg*(isCrit?2:1)),ei);});
 log(`✨ Noble Sacrifice: dealt ${sacDmg} to ALL enemies (half missing HP)! Reduced to 10% HP!`,'log-crit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Sins of the Many'&&(outcomeType==='hit'||outcomeType==='crit')){
 if(isCrit){const _sOld=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+5);log(`✨ Sins of the Many CRIT: healed ${G.char.hp-_sOld} HP (no damage taken)!`,'log-crit');renderHUD();}
 else{const dmgTaken=Math.min(5,Math.max(0,G.char.hp-1));if(dmgTaken>0)dealPlayerDamage(dmgTaken,'Sins of the Many',true);const _sOld=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+dmgTaken);log(`✨ Sins of the Many: took ${dmgTaken} damage, healed ${dmgTaken} HP!`,'log-hit');renderHUD();}
 C._shredOverrideFired=true;
 }
 if(card.name==='Damnation'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._damnationActive=true;
 log('🌑 Damnation: Shadow Word abilities now affect a second enemy (persistent)!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Black Out'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._blackOutActive=true;
 log('🌑 Black Out: Shadow abilities deal double damage! (Non-shadow play clears this)',isCrit?'log-crit':'log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Inner Fire'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._innerFireCharges=(C._innerFireCharges||0)+(isCrit?4:2);
 log(`✨ Inner Fire: ${isCrit?4:2} charges — spend to block all incoming attacks!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Crusader Strike'&&(outcomeType==='hit'||outcomeType==='crit')){
 const csDmg=(5+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,csDmg,C.targetIdx);target._holyVulnerable=true;}
 log(`✨ Crusader Strike: ${csDmg} holy melee! ${target?.name||'target'} takes double holy damage next!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Inner Focus'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.autoHitCharges=(C.autoHitCharges||0)+1;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('✨ Inner Focus: next ability cannot fail! Extra play!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Lightwell'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._lightwellActive=true;
 log('✨ Lightwell placed! Each turn roll 13+ to heal 2 HP!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Divine Spirit'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._divineSpiritActive=true;
 const dsHeal=isCrit?4:2;const _dsOld=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+dsHeal);
 log(`✨ Divine Spirit: healed ${G.char.hp-_dsOld} HP. Next heal is doubled!${isCrit?' (×2 from crit)':''}`,isCrit?'log-crit':'log-hit');
 renderHUD();C._shredOverrideFired=true;}
 if(card.name==='Desperate Plea'&&(outcomeType==='hit'||outcomeType==='crit')){
 const belowHalf=G.char.hp<=Math.ceil(G.char.maxHP/2);
 let dpHeal=(belowHalf||isCrit)?10:5;
 if(C._divineSpiritActive){dpHeal*=2;C._divineSpiritActive=false;}
 const _dpOld=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+dpHeal);
 log(`✨ Desperate Plea: healed ${G.char.hp-_dpOld} HP${belowHalf?' (auto-success below half HP)':''}!`,isCrit?'log-crit':'log-hit');
 renderHUD();C._shredOverrideFired=true;}
 if(card.name==='Divine Word: Enlighten'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+(isCrit?4:3);C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`✨ Divine Word: Enlighten: draw ${isCrit?4:3} extra next turn! Extra play now!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Consecration'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._consecrationActive=true;const csDmg=(1+bonusDmg)*(isCrit?2:1);
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,csDmg,ei);});
 if(isCrit){G.char.rollBonus=(G.char.rollBonus||0)+1;log(`✨ Consecration CRIT: ${csDmg} holy to ALL! 1 holy/turn + +1 rolls!`,'log-crit');}
 else log(`✨ Consecration: ${csDmg} holy to ALL enemies! Repeats each round (persistent)!`,'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Summon Shadow Fiend'&&(outcomeType==='hit'||outcomeType==='crit')){
 summonPetById('priestShadowFiend');
 const sf=firstLivingPet();
 if(isCrit&&sf){ sf.counters=Math.min(5,(sf.counters||0)+2); log(`🌑 Shadow Fiend CRIT: summoned with ${sf.counters} shadow counters!`,'log-crit'); }
 else log('🌑 Shadow Fiend summoned! (1 counter — scales as you deal shadow damage)','log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Evangelism'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._evangelismActive=true;C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('✨ Evangelism: Divine Word abilities affect a second target (persistent)! Extra play!',isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Hells Advocate'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._hellsAdvocateCharges=(C._hellsAdvocateCharges||0)+3;
 log(`👿 Hell's Advocate: ${C._hellsAdvocateCharges} charges — next shadow damage abilities deal double!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}

 // ═══════════ WARLOCK ═══════════
 if(card.name==='Corruption'&&(outcomeType==='hit'||outcomeType==='crit')){
 const corStacks=isCrit?4:2;
 if(target&&target.hp>0){target.debuffs=target.debuffs||[];const px=target.debuffs.find(d=>d.id==='poison');if(px)px.stacks+=corStacks;else target.debuffs.push({id:'poison',stacks:corStacks});}
 log(`💀 Corruption: ${corStacks} Shadow DoT stacks — deals ${corStacks} damage/turn!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Curse of Weakness'&&(outcomeType==='hit'||outcomeType==='crit')){
 if(target&&target.hp>0)target._halfAttackNextTurn=true;
 log(`💀 Curse of Weakness: ${target?.name||'target'} deals half attack damage this turn!`,'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Shadow Bolt'&&(outcomeType==='hit'||outcomeType==='crit')){
 const sbDmg=(5+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,sbDmg,C.targetIdx);
 log(`💀 Shadow Bolt: ${sbDmg} Shadow magic damage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Immolate'&&(outcomeType==='hit'||outcomeType==='crit')){
 const imDmg=(3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,imDmg,C.targetIdx);target.debuffs=target.debuffs||[];const ig=target.debuffs.find(d=>d.id==='ignite');if(ig)ig.stacks+=isCrit?2:1;else target.debuffs.push({id:'ignite',stacks:isCrit?2:1});}
 log(`🔥 Immolate: ${imDmg} fire damage + ${isCrit?2:1} Ignite!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if((card.name==='Summon: Imp'||card.name==='Summon: Fel Guard'||card.name==='Summon: Fel Hunter'||card.name==='Summon Void Walker'||card.name==='Summon: Infernal')&&(outcomeType==='hit'||outcomeType==='crit')){
 const petIdByCard={'Summon: Imp':'warlockImp','Summon: Fel Guard':'warlockFelGuard','Summon: Fel Hunter':'warlockFelHunter','Summon Void Walker':'warlockVoidWalker','Summon: Infernal':'warlockInfernal'};
 const petId=petIdByCard[card.name];
 if(petId) summonPetById(petId);
 if(isCrit) C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`💀 ${card.name} resolves.${isCrit?' Extra play!':''}`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Create: Health Stone'&&(outcomeType==='hit'||outcomeType==='crit')){
 const hsHeal=isCrit?10:5; const _hsOld=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+hsHeal);
 log(`💀 Health Stone: healed ${G.char.hp-_hsOld} HP → ${G.char.hp}/${G.char.maxHP}!`,isCrit?'log-crit':'log-hit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Create: Mana Stone'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+(isCrit?2:1);
 C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+1;
 log(`💀 Mana Stone: ${isCrit?2:1} extra play${isCrit?'s':''}! Draw +1 next turn!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Fear'&&(outcomeType==='hit'||outcomeType==='crit')){
 if(target&&target.hp>0){target._stunnedTurns=(target._stunnedTurns||0)+(isCrit?2:1);target.debuffs=target.debuffs||[];const mk=target.debuffs.find(d=>d.id==='marked');if(mk)mk.stacks+=3;else target.debuffs.push({id:'marked',stacks:3});}
 log(`💀 Fear: ${target?.name||'target'} feared for ${isCrit?2:1} turn(s), takes +3 Shadow damage!`,'log-hit');
 C._shredOverrideFired=true;
 }
 if((card.name==='Life Tap'||card.name==='Life tap')&&(outcomeType==='hit'||outcomeType==='crit')){
 const tapDmg=Math.min(6,Math.floor(G.char.hp/2));
 dealPlayerDamage(tapDmg,'Life Tap',true);
 const extraPlays=Math.floor(tapDmg/2);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+Math.max(1,extraPlays);
 C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+Math.max(1,extraPlays);
 log(`💀 Life Tap: spent ${tapDmg} HP for +${Math.max(1,extraPlays)} extra play(s) and draw(s)!`,'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Drain Life'&&(outcomeType==='hit'||outcomeType==='crit')){
 const dlDmg=(3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,dlDmg,C.targetIdx);
 const _dlOld=G.char.hp; G.char.hp=Math.min(G.char.maxHP,G.char.hp+Math.ceil(dlDmg/2));
 log(`💀 Drain Life: ${dlDmg} Shadow damage, healed ${G.char.hp-_dlOld} HP!`,isCrit?'log-crit':'log-hit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Curse of Agony'&&(outcomeType==='hit'||outcomeType==='crit')){
 const coaStacks=isCrit?4:2;
 if(target&&target.hp>0){target.debuffs=target.debuffs||[];const px=target.debuffs.find(d=>d.id==='poison');if(px)px.stacks+=coaStacks;else target.debuffs.push({id:'poison',stacks:coaStacks});}
 log(`💀 Curse of Agony: ${coaStacks} escalating Shadow DoT (takes more each turn)!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Death Coil'&&(outcomeType==='hit'||outcomeType==='crit')){
 const dcDmg=(5+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,dcDmg,C.targetIdx);target._noAttackThisTurn=true;}
 log(`💀 Death Coil: ${dcDmg} Shadow damage, target cannot attack this turn!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Conflagrate'&&(outcomeType==='hit'||outcomeType==='crit')){
 const igStacks=target?(target.debuffs||[]).find(d=>d.id==='ignite')?.stacks||0:0;
 const cfDmg=(3+bonusDmg+igStacks*2)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,cfDmg,C.targetIdx);if(igStacks>0){const ig=(target.debuffs||[]).find(d=>d.id==='ignite');if(ig)ig.stacks=0;}}
 log(`🔥 Conflagrate: ${cfDmg} fire damage (detonated ${igStacks} Ignite stacks)!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Soul Fire'&&(outcomeType==='hit'||outcomeType==='crit')){
 const sfDmg=(7+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,sfDmg,C.targetIdx);
 log(`💀 Soul Fire: ${sfDmg} fire magic damage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Create: Soul Stone'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._soulStoneActive=true;
 log(`💀 Soul Stone: cheat death — if fatal, return to half HP instead! (once)${isCrit?' Retained on crit!':''}`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Soul Siphon'&&(outcomeType==='hit'||outcomeType==='crit')){
 if(target&&target.hp>0){const ssDmg=(3+bonusDmg)*(isCrit?2:1);dealEnemyDamage(target,ssDmg,C.targetIdx);C._soulSiphonTargetIdx=C.targetIdx;log(`💀 Soul Siphon: ${ssDmg} shadow! Draining 1 HP/turn until target dies!`,isCrit?'log-crit':'log-hit');}
 C._shredOverrideFired=true;
 }
 if(card.name==='Fel Armor'&&(outcomeType==='hit'||outcomeType==='crit')){
 const faBonus=isCrit?2:1;
 C._felArmorActive=true;
 G.char.rollBonus=(G.char.rollBonus||0)+faBonus;
 log(`🟢 Fel Armor: +${faBonus} to all rolls, +1 HP/turn (persistent)!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Hell Fire'&&(outcomeType==='hit'||outcomeType==='crit')){
 const hfDmg=(5+bonusDmg)*(isCrit?2:1);let hfTotal=0;
 C.enemies.forEach((e,ei)=>{if(e.hp>0){dealEnemyDamage(e,hfDmg,ei);hfTotal+=hfDmg;}});
 if(isCrit){const _hfOld=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+hfTotal);log(`💀 Hell Fire CRIT: healed ${G.char.hp-_hfOld} HP from ${hfTotal} dealt!`,'log-crit');renderHUD();}
 else{dealPlayerDamage(3,'Hell Fire',true);log(`💀 Hell Fire: ${hfDmg} fire to ALL enemies! Took 3 self-damage.`,'log-hit');}
 C._shredOverrideFired=true;
 }
 if(card.name==='Implosion'&&(outcomeType==='hit'||outcomeType==='crit')){
 const impDmg=(3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){
  dealEnemyDamage(target,impDmg,C.targetIdx);
  if(target.hp<=0){const splash=5;C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,splash,ei);});log(`💀 Implosion: ${impDmg} shadow — ${target.name} EXPLODES for ${splash} to all!`,'log-crit');}
  else log(`💀 Implosion: ${impDmg} shadow damage!`,isCrit?'log-crit':'log-hit');
 }
 C._shredOverrideFired=true;
 }
 if(card.name==='Summon: Infernal'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._infernoTurns=(isCrit?8:5);
 if(isCrit)C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`🔥 Infernal summoned! 5 fire damage/turn for ${C._infernoTurns} turns!${isCrit?' Extra play!':''}`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Reign Of Fire'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rofDmg=(isCrit?5:3)+bonusDmg;
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,rofDmg,ei);});
 C._reignOfFireActive=true;
 log(`🔥 Reign Of Fire: ${rofDmg} fire to ALL enemies! Repeats each turn on 10+!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Chaos Bolt'&&(outcomeType==='hit'||outcomeType==='crit')){
 const cbDmg=(8+bonusDmg)*(isCrit?2:1);const cbCount=isCrit?3:1;
 const cbTargets=C.enemies.filter(e=>e.hp>0);
 for(let i=0;i<cbCount;i++){if(cbTargets.length>0){const cbT=cbTargets[Math.floor(Math.random()*cbTargets.length)];dealEnemyDamage(cbT,cbDmg,C.enemies.indexOf(cbT));log(`💀 Chaos Bolt: ${cbDmg} shadow to ${cbT.name}!`,isCrit?'log-crit':'log-hit');}}
 C._shredOverrideFired=true;
 }
 if(card.name==='Death Bolt'&&(outcomeType==='hit'||outcomeType==='crit')){
 const dotStacks=target?(target.debuffs||[]).filter(d=>d.id==='poison'||d.id==='hemorrhage').reduce((s,d)=>s+(d.stacks||1),0):0;
 const dbDmg=(3+bonusDmg+dotStacks*3)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,dbDmg,C.targetIdx);if(isCrit)(target.debuffs||[]).forEach(d=>{if(d.turnsLeft!==undefined)d.turnsLeft+=2;});}
 log(`💀 Death Bolt: ${dbDmg} shadow (+${dotStacks*3} from ${dotStacks} DoT stacks)!${isCrit?' All effects refreshed!':''}`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Havoc'&&(outcomeType==='hit'||outcomeType==='crit')){
 if(target&&target.hp>0){C._havocTargetIdx=C.targetIdx;target._havocMarked=true;log(`💀 Havoc: ${target.name} linked — damage you deal is mirrored to them!${isCrit?' +1 bonus dmg!':''}`,isCrit?'log-crit':'log-hit');}
 C._shredOverrideFired=true;
 }
 if(card.name==='Unstable Power'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._unstablePowerActive=true;
 log('💀 Unstable Power: take dmg = roll/5 each turn, Shadow damage doubled (persistent)!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Armies Of Hell'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._treants=(C._treants||0)+4;C._armiesOfHellActive=true;
 log('💀 Armies Of Hell: ALL 4 Warlock pets summoned! Attacks doubled!',isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Siphon Life'&&(outcomeType==='hit'||outcomeType==='crit')){
 const slDmg=(1+bonusDmg)*(isCrit?2:1);
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,slDmg,ei);});
 C._siphonLifeActive=true;
 log(`💀 Siphon Life: ${slDmg} shadow to ALL enemies! Repeats each turn on 8+!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Searing Pain'&&(outcomeType==='hit'||outcomeType==='crit')){
 const spDmg=(2+bonusDmg)*(isCrit?2:1);
 if(isCrit){C.enemies.forEach((e,ei)=>{if(e.hp>0){dealEnemyDamage(e,spDmg,ei);e.debuffs=e.debuffs||[];const mk=e.debuffs.find(d=>d.id==='marked');if(mk)mk.stacks+=2;else e.debuffs.push({id:'marked',stacks:2});}});}
 else{if(target&&target.hp>0){dealEnemyDamage(target,spDmg,C.targetIdx);target.debuffs=target.debuffs||[];const mk=target.debuffs.find(d=>d.id==='marked');if(mk)mk.stacks+=2;else target.debuffs.push({id:'marked',stacks:2});}}
 log(`🔥 Searing Pain: ${spDmg} fire damage${isCrit?' to ALL enemies':''}! Target takes +2 from all sources!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Unstable Affliction'&&(outcomeType==='hit'||outcomeType==='crit')){
 const uaAlive=C.enemies.filter(e=>e.hp>0);
 if(uaAlive.length>0){const uaT=uaAlive[Math.floor(Math.random()*uaAlive.length)];C._unstableAfflictionTargetIdx=C.enemies.indexOf(uaT);log(`💀 Unstable Affliction: attached to ${uaT.name}! 5 shadow/turn — jumps on 7 or less!`,isCrit?'log-crit':'log-hit');}
 C._shredOverrideFired=true;}
 if(card.name==='Soul Harvest'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._soulHarvestActive=true;C._soulHarvestCharges=isCrit?2:0;
 if(C._soulHarvestCharges>0){G.char.dmgBonus=(G.char.dmgBonus||0)+C._soulHarvestCharges;log(`💀 Soul Harvest CRIT: starting with ${C._soulHarvestCharges} charges! +${C._soulHarvestCharges} dmg!`,'log-crit');}
 else log('💀 Soul Harvest: active — earn charges per enemy kill (+1 dmg each)!','log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Ritual of Doom'&&(outcomeType==='hit'||outcomeType==='crit')){
 dealPlayerDamage(5,'Ritual of Doom',true);
 C._ritualOfDoomActive=true;
 log('💀 Ritual of Doom: took 5 damage — shadow damage tripled this turn!',isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}

 // ═══════════ SHAMAN ═══════════
 if(card.name==='Earth Shock'&&(outcomeType==='hit'||outcomeType==='crit')){
 const esDmg=(3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,esDmg,C.targetIdx);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`⚡ Earth Shock: ${esDmg} Nature damage! Extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Flame Shock'&&(outcomeType==='hit'||outcomeType==='crit')){
 const fsBaseDmg=(1+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){
 dealEnemyDamage(target,fsBaseDmg,C.targetIdx);
 target.debuffs=target.debuffs||[];
 const ig=target.debuffs.find(d=>d.id==='ignite');
 if(ig)ig.stacks+=isCrit?2:1;else target.debuffs.push({id:'ignite',stacks:isCrit?2:1});
 }
 log(`🔥 Flame Shock: ${fsBaseDmg} fire damage + ${isCrit?2:1} Ignite!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Frost Shock'&&(outcomeType==='hit'||outcomeType==='crit')){
 const belowHalf=target&&target.hp<=Math.ceil(target.maxHP/2);
 const fsDmg=(belowHalf?4:1+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,fsDmg,C.targetIdx);target._halfAttackNextTurn=true;}
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`❄️ Frost Shock: ${fsDmg} ice damage${belowHalf?' (below half HP bonus)':''}, half attack! Extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Rock Blast'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rbDmg=(6+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,rbDmg,C.targetIdx);
 log(`⚡ Rock Blast: ${rbDmg} Nature magic damage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Healing Wave'&&(outcomeType==='hit'||outcomeType==='crit')){
 const hwAmt=isCrit?12:6; const _hwOld=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+hwAmt);
 log(`⚡ Healing Wave: healed ${G.char.hp-_hwOld} HP → ${G.char.hp}/${G.char.maxHP}!`,isCrit?'log-crit':'log-hit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Fire Shield'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._fireShieldActive=isCrit?6:3; // number of charges
 log(`🔥 Fire Shield: ${isCrit?6:3} charges — retaliate with 3 fire damage when hit!`,'log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Earth Shield'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._earthShieldCharges=isCrit?6:3;
 log(`⚡ Earth Shield: ${isCrit?6:3} charges — heal 3 HP each time you take damage!`,'log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Ancestral Knowledge'&&(outcomeType==='hit'||outcomeType==='crit')){
 // Play a card from discard
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 if(C.discard.length>0){
 C._waitingForPicker=true;
 showDiscardPicker(isCrit?'crit':'hit');
 }
 log('⚡ Ancestral Knowledge: retrieve and play a card from discard!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Healing Spring Totem'&&(outcomeType==='hit'||outcomeType==='crit')){
 summonPetById('shamanHealingSpring',{append:true});
 // On-summon heal + start of each subsequent turn
 const _hsOld=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+(isCrit?2:1));
 if(G.char.hp>_hsOld) log(`💧 Healing Spring Totem placed — healed you ${G.char.hp-_hsOld} HP.`,isCrit?'log-crit':'log-hit');
 else log('💧 Healing Spring Totem placed.',isCrit?'log-crit':'log-hit');
 if(isCrit) C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 renderHUD();
 C._shredOverrideFired=true;
 }
 if(card.name==='Cloud Burst Totem'&&(outcomeType==='hit'||outcomeType==='crit')){
 summonPetById('shamanCloudBurst',{append:true});
 if(isCrit){ const p=C._pets[C._pets.length-1]; if(p){ p.counters=(p.counters||0)+2; } }
 log('☁️ Cloud Burst Totem placed.',isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Searing Totem'&&(outcomeType==='hit'||outcomeType==='crit')){
 summonPetById('shamanSearing',{append:true});
 if(isCrit) C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🔥 Searing Totem placed.',isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Fire Nova Totem'&&(outcomeType==='hit'||outcomeType==='crit')){
 summonPetById('shamanFireNova',{append:true});
 if(isCrit) C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('💥 Fire Nova Totem placed — detonates at end of your turn.',isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if((card.name==='Stoneskin Totem'||card.name==='Stone Skin Totem')&&(outcomeType==='hit'||outcomeType==='crit')){
 summonPetById('shamanStoneSkin',{append:true});
 if(isCrit){ const p=C._pets[C._pets.length-1]; if(p){ p.maxHP+=2; p.hp=p.maxHP; } }
 log(`🪨 Stone Skin Totem placed${isCrit?' (+2 max HP)':''}.`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Healing Surge'&&(outcomeType==='hit'||outcomeType==='crit')){
 const hsgAmt=isCrit?4:2; const _hsgOld=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+hsgAmt);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`⚡ Healing Surge: healed ${G.char.hp-_hsgOld} HP! Extra play!`,isCrit?'log-crit':'log-hit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Fissure'&&(outcomeType==='hit'||outcomeType==='crit')){
 const belowHalf=target&&target.hp<=Math.ceil(target.maxHP/2);
 const fisDmg=(belowHalf?7:3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,fisDmg,C.targetIdx);
 log(`⚡ Fissure: ${fisDmg} Nature damage${belowHalf?' (below half HP bonus)':''}!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Reincarnation'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._rebirthActive=true; C._rebirthFullHeal=isCrit;
 log(`⚡ Reincarnation: cheat death activated${isCrit?' — return to FULL HP':''}!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if((card.name==='Lava Burst'||card.name==='Lava burst')&&(outcomeType==='hit'||outcomeType==='crit')){
 const lvDmg=(5+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,lvDmg,C.targetIdx);target.debuffs=target.debuffs||[];const ig=target.debuffs.find(d=>d.id==='ignite');if(ig)ig.stacks+=2;else target.debuffs.push({id:'ignite',stacks:2});}
 log(`🌋 Lava Burst: ${lvDmg} fire damage + 2 Ignite!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Lava Lash'&&(outcomeType==='hit'||outcomeType==='crit')){
 const llDmg=(4+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,llDmg,C.targetIdx);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`🔥 Lava Lash: ${llDmg} fire melee damage! Extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Chain Heal'&&(outcomeType==='hit'||outcomeType==='crit')){
 let chHeal=isCrit?6:4; const _chOld=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+chHeal);
 chHeal=Math.ceil(chHeal*0.7);
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+chHeal); // second bounce
 log(`⚡ Chain Heal: healed ${G.char.hp-_chOld} HP total (2 bounces) → ${G.char.hp}/${G.char.maxHP}!`,isCrit?'log-crit':'log-hit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Earthquake'&&(outcomeType==='hit'||outcomeType==='crit')){
 const eqDmg=(4+bonusDmg)*(isCrit?2:1);
 C.enemies.forEach((e,ei)=>{if(e.hp>0){dealEnemyDamage(e,eqDmg,ei);e._stunnedTurns=(e._stunnedTurns||0)+1;}});
 log(`⚡ Earthquake: ${eqDmg} to ALL enemies + all stunned 1 turn!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Elemental Mastery'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.critThreshold=Math.max(16,(G.char.critThreshold||20)-2);
 C.autoHitCharges=(C.autoHitCharges||0)+(isCrit?2:1);
 log(`⚡ Elemental Mastery: crit on ${G.char.critThreshold}+! Next ${isCrit?2:1} ability auto-success!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Rock Biter'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rbDmg=(2+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,rbDmg,C.targetIdx);target._natureDmgBonus=(target._natureDmgBonus||0)+2;}
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`⚡ Rock Biter: ${rbDmg} nature melee! ${target?.name||'target'} takes +2 nature damage. Extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Ice Fury'&&(outcomeType==='hit'||outcomeType==='crit')){
 const ifDmg=(2+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,ifDmg,C.targetIdx);target._tookIceDamage=true;}
 C._iceFuryNextDoubleCount=(C._iceFuryNextDoubleCount||0)+(isCrit?3:1);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`❄️ Ice Fury: ${ifDmg} ice melee! Next ${isCrit?3:1} ice source deals double! Extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Ice Blast'&&(outcomeType==='hit'||outcomeType==='crit')){
 const isBelow=target&&target.hp<=target.maxHP/2;
 const ibDmg=(5+bonusDmg)*(isCrit?2:1)*((!isCrit&&isBelow)?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,ibDmg,C.targetIdx);target._tookIceDamage=true;}
 log(`❄️ Ice Blast: ${ibDmg} ice damage${(!isCrit&&isBelow)?' (DOUBLED — target below 50% HP!)':''}!`,isCrit||isBelow?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Mana Spring Totem'&&(outcomeType==='hit'||outcomeType==='crit')){
 summonPetById('shamanManaSpring',{append:true});
 if(isCrit) C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('💠 Mana Spring Totem placed.',isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Grace of Air Totem'&&(outcomeType==='hit'||outcomeType==='crit')){
 summonPetById('shamanGraceOfAir',{append:true});
 if(isCrit) C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('💨 Grace of Air Totem placed.',isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Frost Bite'&&(outcomeType==='hit'||outcomeType==='crit')){
 const fbDmg=(2+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){dealEnemyDamage(target,fbDmg,C.targetIdx);target._iceDmgBonus=(target._iceDmgBonus||0)+2;target._tookIceDamage=true;}
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`❄️ Frost Bite: ${fbDmg} ice melee! ${target?.name||'target'} takes +2 ice damage. Extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Riptide'&&(outcomeType==='hit'||outcomeType==='crit')){
 const rtBonus=C._healedThisTurn?2:0;
 const rtHeal=(2+rtBonus)*(isCrit?2:1); const _rtOld=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+rtHeal);
 C._healedThisTurn=true;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+(isCrit?3:1);
 log(`💧 Riptide: healed ${G.char.hp-_rtOld} HP${rtBonus?' (double — already healed this turn)':''}! ${isCrit?'×3 ':''}Extra play!`,isCrit?'log-crit':'log-hit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Crash Lightning'&&(outcomeType==='hit'||outcomeType==='crit')){
 const clDmg=(4+bonusDmg)*(isCrit?2:1);
 if(isCrit){C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,clDmg,ei);});log(`⚡ Crash Lightning CRIT: ${clDmg} nature to ALL enemies!`,'log-crit');}
 else{if(target&&target.hp>0)dealEnemyDamage(target,clDmg,C.targetIdx);C.enemies.forEach((e,ei)=>{if(e.hp>0&&ei!==C.targetIdx)dealEnemyDamage(e,1,ei);});log(`⚡ Crash Lightning: ${clDmg} to ${target?.name||'target'} + 1 to all others!`,'log-hit');}
 C._shredOverrideFired=true;
 }
 if(card.name==="Nature's Gaurdian"&&(outcomeType==='hit'||outcomeType==='crit')){
 if(isCrit){const _ngOld=G.char.hp;G.char.hp=G.char.maxHP;log("🌿 Nature's Guardian CRIT: fully healed!",'log-crit');renderHUD();}
 else{C._naturesGuardianArmed=true;C._naturesGuardianFired=false;log("🌿 Nature's Guardian armed! Heals 20% max HP when you drop below 50%.",'log-info');}
 C._shredOverrideFired=true;
 }
 if(card.name==='Whirlwind Strike'&&(outcomeType==='hit'||outcomeType==='crit')){
 const wwBase=(3+bonusDmg);let wwTotal=0;
 for(let i=0;i<=2;i++){const wwDmg=(wwBase+(isCrit?i:-i))*(i===0&&isCrit?2:1);const hit=Math.max(1,wwDmg);if(target&&target.hp>0){dealEnemyDamage(target,hit,C.targetIdx);wwTotal+=hit;}}
 log(`⚡ Whirlwind Strike: ${wwTotal} nature damage (3 strikes)!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Call of The Elements'&&(outcomeType==='hit'||outcomeType==='crit')){
 const elDeck=G.char.deck||[];
 const elCards=elDeck.filter(c=>(['fire','nature','ice','Elemental','Enhancement','Restoration'].some(t=>(CARD_TALENTS[c.name]===t)||(c.hit||'').toLowerCase().includes(t+' damage'))));
 if(elCards.length>0){const chosen=elCards[Math.floor(Math.random()*elCards.length)];G.char.deck=elDeck.filter(c=>c!==chosen);C.hand=(C.hand||[]);C.hand.push(chosen);C.autoHitCharges=(C.autoHitCharges||0)+1;if(isCrit)C._nextCardAutoCrit=true;log(`⚡ Call of The Elements: ${chosen.name} drawn — auto-succeeds!${isCrit?' Auto-crit!':''}`,isCrit?'log-crit':'log-hit');}
 else log('⚡ Call of The Elements: no elemental cards in deck!','log-miss');
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 C._shredOverrideFired=true;
 }
 if(card.name==='Aspect of Nature'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._aspectNatureActive=true;
 log('🌿 Aspect of Nature: nature hits roll 13+ for extra play (persistent)!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Aspect of Fire'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._aspectFireActive=true;
 log('🔥 Aspect of Fire: fire hits roll 13+ for extra play (persistent)!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Aspect of Ice'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._aspectIceActive=true;
 log('❄️ Aspect of Ice: ice hits roll 13+ for extra play (persistent)!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Aspect of the Ascended'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._aspectAscendedActive=true;
 log('🌟 Aspect of the Ascended: restoration heals roll 13+ for extra heal (persistent)!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Ancestral Spirit'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._ancestralSpiritTurns=(isCrit?8:5);
 log(`👻 Ancestral Spirit: 2 nature damage/turn for ${C._ancestralSpiritTurns} turns!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Eruption'&&(outcomeType==='hit'||outcomeType==='crit')){
 const eruDmg=C._eruptionHitThisTurn?(5+bonusDmg)*(isCrit?2:1):(1+bonusDmg)*(isCrit?2:1);
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,eruDmg,ei);});
 log(`🌋 Eruption: ${eruDmg} fire to ALL enemies!${C._eruptionHitThisTurn?' (EMPOWERED — already hit this turn)':''}`,isCrit?'log-crit':'log-hit');
 C._eruptionHitThisTurn=true;C._shredOverrideFired=true;}
 if(card.name==='Maelstrom Weapon'&&(outcomeType==='hit'||outcomeType==='crit')){
 const mwCharges=C._maelstromCharges||0;
 C._maelstromActive=true;
 if(mwCharges>0){C.bonusRoll=(C.bonusRoll||0)+mwCharges;log(`⚡ Maelstrom Weapon: spent ${mwCharges} charges — +${mwCharges} to rolls! Active.`,isCrit?'log-crit':'log-hit');}
 else log('⚡ Maelstrom Weapon: active! Elemental hits add charges (fire/ice/nature, max 5).','log-info');
 C._maelstromCharges=isCrit?3:0;
 C._shredOverrideFired=true;}

 // ═══════════ TIME WALKER ═══════════
 if(card.name==='Magic Missile'&&(outcomeType==='hit'||outcomeType==='crit')){
 const mmDmg=(3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,mmDmg,C.targetIdx);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`⏳ Magic Missile: ${mmDmg} arcane damage! Extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Foresight'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+3; // "redraw your hand"
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`⏳ Foresight: draw +3 next turn (effectively redraw hand)! Extra play!`,'log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Gravity Bomb'&&(outcomeType==='hit'||outcomeType==='crit')){
 const gb_stacks=isCrit?4:3;
 C.enemies.forEach(e=>{if(e.hp>0){e._timeBombs=(e._timeBombs||0)+gb_stacks;}});
 log(`⏳ Gravity Bomb: ${gb_stacks} time bomb counters on ALL enemies — detonate for massive damage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Blink'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.preventAttackDamageThisTurn=true;
 C._preventAbilityDmgThisTurn=true;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+2;
 log('⏳ Blink: IMMUNE to all damage this turn! +2 extra plays!','log-crit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Arcane Orb'&&(outcomeType==='hit'||outcomeType==='crit')){
 const aoDmg=(5+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,aoDmg,C.targetIdx);
 log(`⏳ Arcane Orb: ${aoDmg} arcane magic damage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Rewind'&&(outcomeType==='hit'||outcomeType==='crit')){
 // Restore HP to what it was at start of combat... approximate: heal half missing
 const rwHeal=Math.floor((G.char.maxHP-G.char.hp)/2); const _rwOld=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+(isCrit?rwHeal*2:rwHeal));
 // Also remove DoTs
 G.char.statusEffects=(G.char.statusEffects||[]).filter(s=>s.id!=='poison'&&s.id!=='seared');
 log(`⏳ Rewind: healed ${G.char.hp-_rwOld} HP, DoTs removed! (Time rewound)`,isCrit?'log-crit':'log-hit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Future Sight'&&(outcomeType==='hit'||outcomeType==='crit')){
 const fsRoll=d20();
 if(fsRoll<=5){dealPlayerDamage(3,'Future Sight (bad omen)',true);log(`⏳ Future Sight: rolled ${fsRoll} — bad omen! 3 damage!`,'log-critmiss');}
 else if(fsRoll<=10){const fsDmg=(5+bonusDmg)*(isCrit?2:1);if(target&&target.hp>0)dealEnemyDamage(target,fsDmg,C.targetIdx);log(`⏳ Future Sight: rolled ${fsRoll} — vision! ${fsDmg} arcane damage!`,'log-hit');}
 else if(fsRoll<=15){C.autoHitCharges=(C.autoHitCharges||0)+1;C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;log(`⏳ Future Sight: rolled ${fsRoll} — clarity! Next ability auto-succeeds + extra play!`,'log-crit');}
 else{C._nextCardAutoCrit=true;log(`⏳ Future Sight: rolled ${fsRoll} — PERFECT VISION! Next ability auto-crits!`,'log-crit');}
 C._shredOverrideFired=true;
 }
 if(card.name==='Time Warp'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+(isCrit?4:2);
 C.bonusRoll=(C.bonusRoll||0)+(isCrit?4:2);
 log(`⏳ Time Warp: +${isCrit?4:2} extra plays and rolls this turn!`,'log-crit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Inversion'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._inversionActive=true;
 log('⏳ Inversion: this turn, failed rolls succeed and successes fail for enemies!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Chronoshift'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._savedRoll=d20();
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`⏳ Chronoshift: saved roll ${C._savedRoll} for any ability this turn! Extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Time Bank'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+(isCrit?3:2);
 log(`⏳ Time Bank: +${isCrit?3:2} extra plays banked!`,'log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Memory Lapse'&&(outcomeType==='hit'||outcomeType==='crit')){
 if(target&&target.hp>0){target._stunnedTurns=(target._stunnedTurns||0)+(isCrit?2:1);target.turnCount=Math.max(0,target.turnCount-3);}
 log(`⏳ Memory Lapse: ${target?.name||'target'} stunned ${isCrit?2:1} turn(s), surge timer set back!`,'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Mending'&&(outcomeType==='hit'||outcomeType==='crit')){
 const mAmt=isCrit?6:3; const _mOld=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+mAmt);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`⏳ Mending: healed ${G.char.hp-_mOld} HP → ${G.char.hp}/${G.char.maxHP}! Extra play!`,isCrit?'log-crit':'log-hit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Arcane Torrent'&&(outcomeType==='hit'||outcomeType==='crit')){
 const atDmg=(4+bonusDmg)*(isCrit?2:1);
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,atDmg,ei);});
 log(`⏳ Arcane Torrent: ${atDmg} arcane to ALL enemies!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Time Bomb'&&(outcomeType==='hit'||outcomeType==='crit')){
 const tbStacks=isCrit?5:3;
 if(target&&target.hp>0)target._timeBombs=(target._timeBombs||0)+tbStacks;
 log(`⏳ Time Bomb: ${tbStacks} time bomb counters on ${target?.name||'target'}!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Freeze Time'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.enemies.forEach(e=>{if(e.hp>0){e._noAttackThisTurn=true;e._stunnedTurns=(e._stunnedTurns||0)+(isCrit?2:1);}});
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+2;
 log(`⏳ Freeze Time: ALL enemies stunned ${isCrit?2:1} turn(s)! +2 extra plays!`,'log-crit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Portal'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+(isCrit?4:2);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`⏳ Portal: draw ${isCrit?4:2} cards next turn! Extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Black Hole'&&(outcomeType==='hit'||outcomeType==='crit')){
 const bhDmg=(5+bonusDmg)*(isCrit?2:1);
 C.enemies.forEach((e,ei)=>{if(e.hp>0){dealEnemyDamage(e,bhDmg,ei);e._stunnedTurns=(e._stunnedTurns||0)+1;}});
 log(`⏳ Black Hole: ${bhDmg} arcane to ALL enemies + all stunned!`,'log-crit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Fate of One'&&(outcomeType==='hit'||outcomeType==='crit')){
 // Deal damage = target's current HP / 3
 if(target&&target.hp>0){const foDmg=Math.ceil(target.hp/3)*(isCrit?2:1);dealEnemyDamage(target,foDmg,C.targetIdx);log(`⏳ Fate of One: ${foDmg} damage (⅓ of target's remaining HP)!`,isCrit?'log-crit':'log-hit');}
 C._shredOverrideFired=true;
 }
 if(card.name==='Celerity'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+(isCrit?3:2);
 G.char.rollBonus=(G.char.rollBonus||0)+2;
 log(`⏳ Celerity: +${isCrit?3:2} extra plays, +2 to all rolls this combat!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Insight'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char._luckCharges=(G.char._luckCharges||0)+(isCrit?4:2);
 log(`⏳ Insight: +${isCrit?4:2} lucky rerolls!`,'log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Slow'&&(outcomeType==='hit'||outcomeType==='crit')){
 if(target&&target.hp>0){target._halfAttackNextTurn=true;target.turnCount=Math.max(0,target.turnCount-2);}
 log(`⏳ Slow: ${target?.name||'target'} deals half damage next turn, surge timer slowed!`,'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Daze'&&(outcomeType==='hit'||outcomeType==='crit')){
 if(target&&target.hp>0){target._noAttackThisTurn=true;target.turnCount=Math.max(0,target.turnCount-1);}
 log(`⏳ Daze: ${target?.name||'target'} cannot attack this turn, surge slowed!`,'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Dispel'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.statusEffects=(G.char.statusEffects||[]).filter(s=>s.id!=='seared'&&s.id!=='poison');
 C.activeHoTs=C.activeHoTs||[];
 log('⏳ Dispel: removed all negative status effects (Poison, Seared)!','log-info');
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 C._shredOverrideFired=true;
 }
 if(card.name==='Reversion'&&(outcomeType==='hit'||outcomeType==='crit')){
 // Reset target's debuffs — remove all
 if(target){target.debuffs=[];target._stunnedTurns=0;}
 // Remove enemy DoTs, heal slightly
 const _rvOld=G.char.hp; G.char.hp=Math.min(G.char.maxHP,G.char.hp+(isCrit?6:3));
 log(`⏳ Reversion: target debuffs cleared, healed ${G.char.hp-_rvOld} HP!`,isCrit?'log-crit':'log-hit');
 renderHUD(); C._shredOverrideFired=true;
 }
 if(card.name==='Temporal Abstraction'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._temporalAbstractionActive=true;
 log('⏳ Temporal Abstraction: damage taken this turn is delayed until start of next turn!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Switch Fate'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.bonusRoll=(C.bonusRoll||0)+2;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('⏳ Switch Fate: +2 to all rolls this turn! Extra play!','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Time Shudder'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.preventAttackDamageThisTurn=true;
 C._preventAbilityDmgThisTurn=true;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 C.skipNextPlayerTurn=true;
 log('⏳ Time Shudder: immune all damage this turn! Skip next turn for immunity.','log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Dimension Lock'&&(outcomeType==='hit'||outcomeType==='crit')){
 const dlTargets=C.enemies.filter(e=>e.hp>0&&!e.isBoss);
 if(dlTargets.length>0){const dlT=dlTargets[Math.floor(Math.random()*dlTargets.length)];dlT._stunnedTurns=(dlT._stunnedTurns||0)+99;log(`⏳ Dimension Lock: ${dlT.name} locked out of combat!`,isCrit?'log-crit':'log-hit');}
 else log('⏳ Dimension Lock: no non-boss targets available!','log-miss');
 C._shredOverrideFired=true;
 }
 if(card.name==='Spell Surge'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+(isCrit?4:3);
 C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+1;
 log(`⏳ Spell Surge: ${isCrit?4:3} extra plays (hand + deck + discard)! +1 draw next turn!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Comet'&&(outcomeType==='hit'||outcomeType==='crit')){
 const cometDmg=(10+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,cometDmg,C.targetIdx);
 log(`⏳ Comet: ${cometDmg} arcane damage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 if(card.name==='Accelerate'&&(outcomeType==='hit'||outcomeType==='crit')){
 let accelCount=0;
 C.enemies.forEach(e=>{if(e.hp>0&&(e._timeBombs||0)>0){e._timeBombs=e._timeBombs*(isCrit?3:2);accelCount++;}});
 if(accelCount)log(`⏳ Accelerate: doubled time bomb counters on ${accelCount} target(s)!`,isCrit?'log-crit':'log-hit');
 else log('⏳ Accelerate: no time bomb targets to accelerate.','log-miss');
 C._shredOverrideFired=true;}
 if(card.name==='Time Loop'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+(isCrit?7:5);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+(isCrit?7:5);
 log(`⏳ Time Loop: draw ${isCrit?7:5} extra + play ${isCrit?7:5} more — taking another full turn!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Gravity Beam'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._gravityBeamCounters=(C._gravityBeamCounters||0)+1;
 const gbDmg=(1+C._gravityBeamCounters+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0)dealEnemyDamage(target,gbDmg,C.targetIdx);
 log(`⏳ Gravity Beam: ${gbDmg} arcane damage! (${C._gravityBeamCounters} counter${C._gravityBeamCounters!==1?'s':''}) Grows each turn!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}

 // Aspect triggers (Shaman: fire/nature/ice/restoration persistent bonuses)
 if(C._aspectNatureActive&&_cdt==='nature'&&(outcomeType==='hit'||outcomeType==='crit')){const ar=d20();if(ar>=13){C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;log(`🌿 Aspect of Nature: rolled ${ar} — extra play!`,'log-info');}}
 if(C._aspectFireActive&&_cdt==='fire'&&(outcomeType==='hit'||outcomeType==='crit')){const ar=d20();if(ar>=13){C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;log(`🔥 Aspect of Fire: rolled ${ar} — extra play!`,'log-info');}}
 if(C._aspectIceActive&&_cdt==='ice'&&(outcomeType==='hit'||outcomeType==='crit')){const ar=d20();if(ar>=13){C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;log(`❄️ Aspect of Ice: rolled ${ar} — extra play!`,'log-info');}}
 // Lock and Load trigger (Hunter: on damage, roll 15+ for extra play)
 if(C._lockAndLoadActive&&(outcomeType==='hit'||outcomeType==='crit')&&C._shredOverrideFired){const llR=d20();if(llR>=15){C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;log(`🏹 Lock and Load: rolled ${llR} — extra play!`,'log-info');}}
 // Sweeping Strikes: melee abilities also hit a second target this turn
 if(C._sweepingStrikesActive&&isMelee&&(outcomeType==='hit'||outcomeType==='crit')&&card.name!=='Sweeping Strikes'&&C._shredOverrideFired){
 const swExtra=C.enemies.filter(e=>e.hp>0&&C.enemies.indexOf(e)!==C.targetIdx)[0];
 if(swExtra){const swExIdx=C.enemies.indexOf(swExtra);const swExDmg=Math.max(1,(dmg+bonusDmg)*(isCrit?2:1));dealEnemyDamage(swExtra,swExDmg,swExIdx);log(`⚔️ Sweeping Strikes: also hits ${swExtra.name} for ${swExDmg}!`,'log-hit');}
 }
 // Maelstrom Weapon: elemental hits add charges (fire/ice/nature, max 5)
 if(C._maelstromActive&&_cdt&&['fire','ice','nature'].includes(_cdt)&&(outcomeType==='hit'||outcomeType==='crit')&&card.name!=='Maelstrom Weapon'){C._maelstromCharges=Math.min(5,(C._maelstromCharges||0)+1);log(`⚡ Maelstrom: ${C._maelstromCharges}/5 elemental charges!`,'log-info');}

 // ── SPECIFIC CARD HANDLERS ─────────────────────────────────────
 // ROGUE
 if(card.name==='Stealth'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.statusEffects=G.char.statusEffects||[];G.char.statusEffects.push({id:'stealth',stacks:1});log('You gain STEALTH.','log-info');
 }
 if(card.name==='Cloak of Shadows'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.statusEffects=G.char.statusEffects||[];
 G.char.statusEffects.push({id:'stealth',stacks:1});
 C._preventAbilityDmgThisTurn=true; // no ability damage this turn
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+1);
 if(isCrit){ C._preventAbilityDmgNextTurn=true; log('🌑 Cloak of Shadows CRIT: protection continues next round!','log-crit'); }
 log('🌑 Cloak of Shadows: Stealth, no ability damage this turn, +1 play!','log-info');
 }
 // Sprint: extra play + next card needs 4 less to succeed
 if(card.name==='Sprint'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 if(isCrit){
 C.bonusRoll=(C.bonusRoll||0)+4;
 C.enemies.forEach(e=>{if(e.hp>0)e._halfAttackNextTurn=true;});
 log('⚡ Sprint CRIT: +4 to next roll, all enemies deal half damage this round!','log-crit');
 } else {
 C._sprintRollBonus=4; // applied to next card's DC check only
 log('⚡ Sprint: play another card — it needs 4 less to succeed!','log-info');
 }
 C._shredOverrideFired=true;
 }

 // Pick Pocket: steal gold or an item from the target
 if(card.name==='Pick Pocket'&&(outcomeType==='hit'||outcomeType==='crit')){
 const pp_loot = [
 {type:'gold',min:3,max:8}, {type:'gold',min:5,max:12}, {type:'gold',min:8,max:15},
 {type:'item',id:'pp_antidote', name:'Stolen Antidote', icon:'💊', desc:'Remove all Poison. Use from inventory during combat.'},
 {type:'item',id:'pp_potion', name:'Lifted Potion', icon:'🧪', desc:'Restore 8 HP. Use from inventory during combat.'},
 {type:'item',id:'pp_knife', name:'Sharpening Stone',icon:'🗡️',desc:'+2 damage on next attack. Use from inventory during combat.'},

 {type:'item',id:'pp_luck', name:"Rabbit's Foot", icon:'🍀', desc:'+3 to next 3 rolls. Use from inventory during combat.'},
 {type:'item',id:'pp_smoke', name:'Smoke Bomb', icon:'💨', desc:'Gain Stealth. Use from inventory during combat.'},
 {type:'item',id:'pp_elixir', name:'Stolen Elixir', icon:'🍶', desc:'Restore 25 HP. Use from inventory during combat.'},
 ];
 const rolls = isCrit ? 2 : 1;
 for(let r=0; r<rolls; r++){
 // Always steal gold
 const goldEntry = pp_loot.filter(l=>l.type==='gold');
 const gPick = goldEntry[Math.floor(Math.random()*goldEntry.length)];
 const g = gPick.min + Math.floor(Math.random()*(gPick.max-gPick.min+1));
 G.char.gold = (G.char.gold||0) + g;
 G.char.runGold = (G.char.runGold||0) + g;
 log(`💰 Pick Pocket: stole ${g} gold! (total: ${G.char.gold}g)`,'log-hit');
 toast(`💰 Stolen ${g}g!`,'success');
 // Also steal an item
 const itemPool = pp_loot.filter(l=>l.type==='item');
 const pick = itemPool[Math.floor(Math.random()*itemPool.length)];
 if(pick){
 // Gold coin and luck are auto-applied (no use action needed)
 // All others go to inventory to be used during combat
 {
 // Map pp items to SHOP-compatible entries so useInventoryItem() can handle them
 const ppToShop = {
 'pp_antidote': 'antidote',
 'pp_potion': 'healpotion',
 'pp_knife': 'sharpeningstone',
 'pp_luck': 'luckycharm',
 'pp_smoke': 'smokebomb',
 'pp_elixir': 'greaterpotion',
 };
 const shopId = ppToShop[pick.id] || pick.id;
 const shopItem = SHOP.find(s=>s.id===shopId);
 const inventoryItem = shopItem
 ? {id:shopItem.id, name:shopItem.name, icon:shopItem.icon, desc:shopItem.desc}
 : {id:pick.id, name:pick.name, icon:pick.icon, desc:pick.desc};
 G.char.inventory = G.char.inventory||[];
 G.char.inventory.push(inventoryItem);
 log(`${inventoryItem.icon} Stole ${inventoryItem.name}! Added to inventory.`,'log-hit');
 toast(`${inventoryItem.icon} Stole ${inventoryItem.name}!`,'success');
 }
 }
 }
 G.char.comboPoints = Math.min(5,(G.char.comboPoints||0)+1);
 C._shredOverrideFired = true;
 }

 // Cheap Shot: 3 melee dmg, if stealthed stun target (lose next turn), gain 2 CP
 if(card.name==='Cheap Shot'&&(outcomeType==='hit'||outcomeType==='crit')){
 const stealthed=_wasStealthed; // captured before stealth was consumed
 const csDmg=3+bonusDmg+(stealthed?0:0); // base 3 melee
 if(target&&target.hp>0){
 dealEnemyDamage(target,csDmg*(isCrit?2:1),C.targetIdx);
 }
 // Apply +2 damage taken mark (all attacks deal +2 to this target this turn)
 if(target){
 target.debuffs=target.debuffs||[];
 const existing=target.debuffs.find(d=>d.id==='marked');
 if(existing) existing.stacks+=2; else target.debuffs.push({id:'marked',stacks:2});
 }
 // If stealthed: stun the target (they lose their next action)
 if(stealthed&&target){
 target._stunnedTurns=(target._stunnedTurns||0)+1;
 log(`🤛 Cheap Shot: ${target.name} is STUNNED — loses their next turn!`,isCrit?'log-crit':'log-hit');
 } else {
 log(`🤛 Cheap Shot: ${target&&target.name} takes ${csDmg*(isCrit?2:1)} dmg, attacks deal +2 this turn!`,isCrit?'log-crit':'log-hit');
 }
 if(isCrit) C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+2);
 C._shredOverrideFired=true;
 }

 // Marked for Death: apply mark debuff, stealth bonus, combo point
 if(card.name==='Marked for Death'&&(outcomeType==='hit'||outcomeType==='crit')){
 const markDmg = 2;
 const stealthed = _wasStealthed; // captured before stealth was consumed
 const applyMark = (e) => {
 e.debuffs = e.debuffs||[];
 if(!e.debuffs.find(d=>d.id==='marked'))
 e.debuffs.push({id:'marked', stacks:markDmg});
 log(`🎯 ${e.name} is Marked for Death! Takes +${markDmg} damage from all your attacks this turn.`,'log-info');
 };
 if(isCrit){
 C.enemies.forEach(e=>{ if(e.hp>0) applyMark(e); });
 log('🎯 Marked for Death on ALL enemies!','log-crit');
 } else {
 if(target) applyMark(target);
 }
 // Always grant an extra play
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🎯 Marked for Death: play another card!','log-info');
 // If stealthed: also deal +2 bonus damage immediately
 if(stealthed && target && target.hp>0){
 dealEnemyDamage(target, markDmg, C.targetIdx);
 log(`👤 Stealth bonus: +${markDmg} damage!`,'log-hit');
 }
 G.char.comboPoints = Math.min(5,(G.char.comboPoints||0)+1);
 C._shredOverrideFired = true;
 }

 // Roll the Bones: rolls its own d20 and applies range-based effects
 if(card.name==='Roll the Bones'){
 const rtbRoll = d20();
 const rtbBonus = (G.char.rollBonus||0);
 const rtbTotal = rtbRoll + rtbBonus;
 log(`🎲 Roll the Bones — rolled ${rtbRoll}${rtbBonus?'+'+rtbBonus+' = '+rtbTotal:''}!`,'log-info');

 if(rtbTotal <= 5){
 // 1-5: Lose half your life
 const loss = Math.floor(G.char.hp / 2);
 dealPlayerDamage(loss, 'Roll the Bones (bad luck)', true);
 log(`💀 Bad luck! Lost ${loss} HP.`, 'log-critmiss');
 } else if(rtbTotal <= 10){
 // 6-10: Heal 5
 const heal = 5; const _oldHp1=G.char.hp;
 G.char.hp = Math.min(G.char.maxHP, G.char.hp + heal);
 log(`💚 Fortune smiles! Healed ${G.char.hp-_oldHp1} HP (${G.char.hp}/${G.char.maxHP})`, 'log-hit');
 renderHUD();
 } else if(rtbTotal <= 15){
 // 11-15: Next ability +3 dmg, play another card
 C.nextCardDmgBonus = (C.nextCardDmgBonus||0) + 3;
 C.extraAllowedThisTurn = (C.extraAllowedThisTurn||0) + 1;
 log(`⚡ Lucky! Next ability +3 dmg and play another card!`, 'log-hit');
 } else if(rtbTotal <= 19){
 // 16-19: Play 2 abilities that cannot fail
 C.autoHitCharges = (C.autoHitCharges||0) + 2;
 C.extraAllowedThisTurn = (C.extraAllowedThisTurn||0) + 2;
 log(`⭐ Jackpot! Next 2 abilities auto-succeed! +2 plays!`, 'log-crit');
 } else {
 // 20: Play any ability from hand/discard/deck as a critical
 C.extraAllowedThisTurn = (C.extraAllowedThisTurn||0) + 1;
 C.autoHitCharges = (C.autoHitCharges||0) + 1;
 // Merge discard into hand temporarily for pick
 const allCards = [...new Set([...C.hand, ...C.discard, ...C.deck])];
 log(`👑 NATURAL 20! Choose any card to play as a CRITICAL HIT!`, 'log-crit');
 // Show a picker for any card
 setTimeout(() => showRollTheBonesPicker(allCards), 500);
 }
 C._shredOverrideFired = true; // prevent default damage
 }

 if(card.name==='Shiv'&&(outcomeType==='hit'||outcomeType==='crit')){
 const shivDmg = (1 + bonusDmg) * (isCrit ? 2 : 1);
 if(target && target.hp > 0) dealEnemyDamage(target, shivDmg, C.targetIdx);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 C.bonusRoll=(C.bonusRoll||0)+(isCrit?5:2);
 G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+(isCrit?2:1));
 log(`🗡️ Shiv: ${shivDmg} dmg +${isCrit?5:2} roll bonus + extra play!`,isCrit?'log-crit':'log-hit');
 }
 // Gouge: targeted enemy deals half attack damage (crit = no damage)
 if(card.name==='Gouge'&&(outcomeType==='hit'||outcomeType==='crit')){
 const gougeDmg = 2 + bonusDmg;
 if(target && target.hp > 0) dealEnemyDamage(target, gougeDmg, C.targetIdx);
 if(target){
 if(isCrit){
 target._noAttackThisTurn=true;
 log(`👊 Gouge CRIT: ${gougeDmg} dmg — ${target.name} cannot attack!`,'log-crit');
 G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+2);
 } else {
 target._halfAttackNextTurn=true;
 log(`👊 Gouge: ${gougeDmg} dmg — ${target.name} deals half attack damage!`,'log-hit');
 G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+1);
 }
 }
 }
 // Deadly Poison: apply poison stacks to target, extra play, combo point
 if(card.name==='Deadly Poison'&&(outcomeType==='hit'||outcomeType==='crit')){
 const stacks = isCrit ? 6 : 3;
 if(target && target.hp > 0){
 target.debuffs = target.debuffs||[];
 const existing = target.debuffs.find(d=>d.id==='poison');
 if(existing) existing.stacks += stacks;
 else target.debuffs.push({id:'poison', stacks});
 log(`☠️ Deadly Poison: applied ${stacks} Poison stacks to ${target.name}! (${(target.debuffs.find(d=>d.id==='poison')?.stacks||stacks)} total)`,'log-hit');
 }
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+(isCrit?2:1));
 log(`☠️ Play another card this turn!`,'log-info');
 C._shredOverrideFired=true;
 }

 // MAGE
 // Adrenaline Rush: gain 3 counters, each gives extra draw+play
 if(card.name==='Adrenaline Rush'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char._arCounters=(G.char._arCounters||0)+(isCrit?6:3);
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1; // immediate play
 log(`⚡ Adrenaline Rush: ${isCrit?6:3} counters gained — remove 1/turn for extra play!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // ── ROGUE SIMPLE HANDLERS ──────────────────────────────────
 // Sinister Strike: 4 dmg + 1 CP (damage auto-extracted, just need CP)
 if(card.name==='Sinister Strike'&&(outcomeType==='hit'||outcomeType==='crit')){
 const ssDmg=(4+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0) dealEnemyDamage(target,ssDmg,C.targetIdx);
 G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+(isCrit?2:1));
 log(`⚔️ Sinister Strike: ${ssDmg} dmg +${isCrit?2:1} CP`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Seal Fate: conditional damage, 1 CP
 if(card.name==='Seal Fate'&&(outcomeType==='hit'||outcomeType==='crit')){
 const belowHalf=target&&target.hp<=Math.ceil(target.maxHP/2);
 const sfBase=belowHalf?10:5;
 const sfDmg=(sfBase+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0) dealEnemyDamage(target,sfDmg,C.targetIdx);
 G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+1);
 log(`🗡️ Seal Fate: ${sfDmg} dmg${belowHalf?' (below half HP bonus!)':''}`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Coup de Grâce: crit = double damage + points not consumed
 if(card.name==="Coup de Grâce"&&(outcomeType==='hit'||outcomeType==='crit')){
 const comboSpent=C.comboPointsToSpend||0;
 if(comboSpent>0){
 // Handled in combo spending section — just ensure crit returns points
 if(isCrit){ G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+comboSpent); log("⚡ Coup de Grâce CRIT: Combo Points returned!",'log-crit'); }
 } else {
 const cdDmg=(3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0) dealEnemyDamage(target,cdDmg,C.targetIdx);
 log(`⚡ Coup de Grâce: ${cdDmg} damage`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }
 }

 // Mutilate crit: 2CP per enemy, resolve twice
 if(card.name==='Mutilate'&&(outcomeType==='hit'||outcomeType==='crit')){
 const mutDmg=(3+bonusDmg)*(isCrit?2:1);
 const repeats=isCrit?2:1;
 for(let r=0;r<repeats;r++){
 if(target&&target.hp>0) dealEnemyDamage(target,mutDmg,C.targetIdx);
 }
 const cpPer=isCrit?2:1;
 G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+cpPer);
 log(`🗡️ Mutilate: ${mutDmg}×${repeats} dmg, +${cpPer} CP`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Master of Shadows: gain stealth + extra play; crit = extra play
 if(card.name==='Master of Shadows'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.statusEffects=G.char.statusEffects||[];
 G.char.statusEffects.push({id:'stealth',stacks:1});
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+(isCrit?2:1);
 G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+1);
 log(`👤 Master of Shadows: Stealth +${isCrit?2:1} extra plays!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // ── MAGE SIMPLE HANDLERS ──────────────────────────────────
 // Fireball: fire dmg + ignite
 if(card.name==='Fireball'&&(outcomeType==='hit'||outcomeType==='crit')){
 const fbDmg=(4+bonusDmg+(C._arcanePowerBonus&&CARD_TALENTS['Fireball']==='Fire'?C._arcanePowerBonus:0))*(isCrit?2:1);
 if(target&&target.hp>0){
 dealEnemyDamage(target,fbDmg,C.targetIdx);
 target.debuffs=target.debuffs||[];
 const ig=target.debuffs.find(d=>d.id==='ignite');
 if(ig) ig.stacks++;else target.debuffs.push({id:'ignite',stacks:1});
 }
 C._dealtFireThisTurn=true;
 log(`🔥 Fireball: ${fbDmg} fire damage + 1 Ignite!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Arcane Missiles: 2 dmg repeated up to 3x
 if(card.name==='Arcane Missiles'&&(outcomeType==='hit'||outcomeType==='crit')){
 const arcBonus=C._arcanePowerBonus||0;
 let hits=0; let totalAm=0;
 const maxHits=isCrit?4:3;
 for(let r=0;r<maxHits;r++){
 const amDmg=(2+bonusDmg+arcBonus)*(isCrit&&r===0?2:1);
 if(r===0){
 if(target&&target.hp>0){ dealEnemyDamage(target,amDmg,C.targetIdx); totalAm+=amDmg; hits++; }
 log(`🔮 Missile 1: ${amDmg} arcane damage`,'log-hit');
 } else {
 const roll=d20();
 if(roll>=8){
 if(target&&target.hp>0){ dealEnemyDamage(target,amDmg,C.targetIdx); totalAm+=amDmg; hits++; }
 log(`🔮 Missile ${r+1}: rolled ${roll} ≥ 8 — ${amDmg} damage!`,'log-hit');
 } else {
 log(`🔮 Missile ${r+1}: rolled ${roll} — MISS. Chain breaks.`,'log-miss');
 break;
 }
 }
 }
 log(`🔮 Arcane Missiles: ${hits} hits, ${totalAm} total damage.`,hits>1?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Arcane Explosion: 1 dmg all + extra draw next turn
 if(card.name==='Arcane Explosion'&&(outcomeType==='hit'||outcomeType==='crit')){
 let enemiesHit=0;
 C.enemies.forEach((e,ei)=>{
 if(e.hp>0){ const aeDmg=(1+bonusDmg)*(isCrit?2:1); dealEnemyDamage(e,aeDmg,ei); enemiesHit++; }
 });
 G.char.extraDraw=(G.char.extraDraw||0)+Math.min(3,enemiesHit);
 log(`🔮 Arcane Explosion: ${1*(isCrit?2:1)} to all, +${Math.min(3,enemiesHit)} draw next turn!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Cone of Cold: 3 ice dmg to 2 targets + half attack
 if(card.name==='Cone of Cold'&&(outcomeType==='hit'||outcomeType==='crit')){
 let hits=0;
 C.enemies.forEach((e,ei)=>{
 if(e.hp>0&&hits<2){
 const coDmg=(3+bonusDmg)*(isCrit?2:1);
 dealEnemyDamage(e,coDmg,ei);
 e._halfAttackNextTurn=true;
 e._tookIceDamage=true;
 hits++;
 }
 });
 log(`❄️ Cone of Cold: ${3*(isCrit?2:1)} ice to ${hits} targets, half attack!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Ice Lance: 2 ice, double if already took ice dmg, cast up to 3x (5x crit)
 if(card.name==='Ice Lance'&&(outcomeType==='hit'||outcomeType==='crit')){
 const maxCasts=isCrit?5:3;
 let totalIl=0;
 for(let r=0;r<maxCasts;r++){
 if(!target||target.hp<=0) break;
 const doubled=target._tookIceDamage;
 const ilDmg=(2+bonusDmg)*(doubled?2:1)*(isCrit&&r===0?2:1);
 dealEnemyDamage(target,ilDmg,C.targetIdx);
 target._tookIceDamage=true;
 totalIl+=ilDmg;
 log(`❄️ Ice Lance cast ${r+1}: ${ilDmg} damage${doubled?' (doubled — target was iced)':''}`,isCrit&&r===0?'log-crit':'log-hit');
 if(r<maxCasts-1&&target.hp>0){
 const nextRoll=d20();
 if(nextRoll<8){
 log(`❄️ Ice Lance chain: rolled ${nextRoll} — chain breaks.`,'log-miss');
 break;
 }
 log(`❄️ Ice Lance chain: rolled ${nextRoll} — fires again!`,'log-hit');
 }
 }
 C._shredOverrideFired=true;
 }

 // Frozen Orb: 2 ice all + freeze counters
 if(card.name==='Frozen Orb'&&(outcomeType==='hit'||outcomeType==='crit')){
 const freezeStacks=isCrit?2:1;
 C.enemies.forEach((e,ei)=>{
 if(e.hp>0){
 const foDmg=(2+bonusDmg)*(isCrit?2:1);
 dealEnemyDamage(e,foDmg,ei);
 e.debuffs=e.debuffs||[];
 const fr=e.debuffs.find(d=>d.id==='freeze');
 if(fr) fr.stacks+=freezeStacks; else e.debuffs.push({id:'freeze',stacks:freezeStacks});
 if((fr?fr.stacks:freezeStacks)>=3){ e._noAttackThisTurn=true; log(`❄️ ${e.name} FROZEN — loses next turn!`,'log-crit'); }
 }
 });
 log(`❄️ Frozen Orb: ice to all + ${freezeStacks} Freeze counter${freezeStacks>1?'s':''}!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Mana Agate / Conjure Food / Conjure Water: utility — save a roll
 if(card.name==='Mana Agate'&&(outcomeType==='hit'||outcomeType==='crit')){
 const repeats=isCrit?2:1;
 for(let r=0;r<repeats;r++){
 G.char.inventory=G.char.inventory||[];
 if(G.char.inventory.length<getInventoryMaxSlots()){
  G.char.inventory.push({id:'mana_agate_item',name:'Mana Agate',icon:'💎',desc:'Roll d20 and save the result for any roll this combat.'});
  log(`💎 Mana Agate conjured! Added to inventory (${repeats===2?'×2, ':''}use to save a roll).`,'log-info');
 } else { log('💎 Mana Agate conjured but inventory is full!','log-warn'); }
 }
 C._shredOverrideFired=true;
 }
 if(card.name==='Conjure Water'&&(outcomeType==='hit'||outcomeType==='crit')){
 const repeats=isCrit?2:1;
 for(let r=0;r<repeats;r++){
 G.char.inventory=G.char.inventory||[];
 if(G.char.inventory.length<getInventoryMaxSlots()){
  G.char.inventory.push({id:'conjure_water_item',name:'Conjure Water',icon:'🫙',desc:'Roll d20 — draw extra cards next turn (roll ÷ 5, rounded up).'});
 } else { log('🫙 Conjure Water created but inventory is full!','log-warn'); }
 }
 log(`🫙 Conjure Water: ${repeats} bottle${repeats>1?'s':''} added to inventory! (draw cards on use)`, 'log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Conjure Food'&&(outcomeType==='hit'||outcomeType==='crit')){
 const repeats=isCrit?2:1;
 for(let r=0;r<repeats;r++){
 G.char.inventory=G.char.inventory||[];
 if(G.char.inventory.length<getInventoryMaxSlots()){
  G.char.inventory.push({id:'conjure_food_item',name:'Conjure Food',icon:'🍖',desc:'Roll d20 — heal HP equal to roll ÷ 3 (rounded up).'});
 } else { log('🍖 Conjure Food created but inventory is full!','log-warn'); }
 }
 log(`🍖 Conjure Food: ${repeats} ration${repeats>1?'s':''} added to inventory! (heal on use)`,'log-info');
 renderHUD();
 C._shredOverrideFired=true;
 }

 // ── DRUID SIMPLE HANDLERS ──────────────────────────────────
 // Moonfire: 1 arcane dmg, repeat until fail (+2 DC each)
 if(card.name==='Moonfire'&&(outcomeType==='hit'||outcomeType==='crit')){
 let dc=card.risk; let totalDmg=0;
 for(let r=0;r<6;r++){
 const mfBase=(1+bonusDmg)*(isCrit&&r===0?2:1);
 if(target&&target.hp>0){ dealEnemyDamage(target,mfBase,C.targetIdx); totalDmg+=mfBase; }
 dc+=2;
 const roll=d20();
 if(roll<dc){
 log(`🌙 Moonfire repeat ${r+2}: rolled ${roll} vs DC ${dc} — STOPPED.`,'log-miss');
 break;
 }
 log(`🌙 Moonfire repeat ${r+2}: rolled ${roll} vs DC ${dc} — continues!`,'log-hit');
 }
 log(`🌙 Moonfire total: ${totalDmg} arcane damage!`,totalDmg>3?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Ravage: 3 dmg repeat until fail (+4 DC)
 if(card.name==='Ravage'&&(outcomeType==='hit'||outcomeType==='crit')){
 let dc=4; let totalDmg=0;
 for(let r=0;r<4;r++){
 const rvDmg=(3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){ dealEnemyDamage(target,rvDmg,C.targetIdx); totalDmg+=rvDmg; }
 if(r===0&&isCrit) continue; // crit: no DC on first extra hit
 dc+=4;
 const roll=d20();
 if(roll<dc){
 log(`🐱 Ravage repeat ${r+2}: rolled ${roll} vs DC ${dc} — STOPPED.`,'log-miss');
 break;
 }
 log(`🐱 Ravage repeat ${r+2}: rolled ${roll} vs DC ${dc} — continues!`,'log-hit');
 }
 log(`🐱 Ravage total: ${totalDmg} damage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Strangling Roots: no attack + nature dmg; crit repeat next round
 if(card.name==='Strangling Roots'&&(outcomeType==='hit'||outcomeType==='crit')){
 const srDmg=(2+bonusDmg)*(isCrit?2:1);
 C.enemies.forEach(e=>{ if(e.hp>0) e._noAttackThisTurn=true; });
 if(target&&target.hp>0) dealEnemyDamage(target,srDmg,C.targetIdx);
 log(`🌿 Strangling Roots: ${srDmg} nature dmg — all enemies cannot attack!`,isCrit?'log-crit':'log-hit');
 if(isCrit){ C.nextCardDmgBonus=(C.nextCardDmgBonus||0)+srDmg; log('🌿 Roots CRIT: effect repeats next round!','log-crit'); }
 C._shredOverrideFired=true;
 }

 // Starfall: 3 counters, deal 4 each turn
 if(card.name==='Starfall'&&(outcomeType==='hit'||outcomeType==='crit')){
 const sfCounters=isCrit?6:3;
 G.char._starfallCounters=(G.char._starfallCounters||0)+sfCounters;
 log(`⭐ Starfall: ${sfCounters} counters — ${4} arcane damage per turn!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Savage Roar: form buffs
 if(card.name==='Savage Roar'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.dmgBonus=(G.char.dmgBonus||0)+3;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🦁 Savage Roar: +3 damage this turn, extra play!',isCrit?'log-crit':'log-hit');
 if(isCrit){ G.char.dmgBonus=(G.char.dmgBonus||0)+2; log('🦁 CRIT: form effects stacked!','log-crit'); }
 C._shredOverrideFired=true;
 }

 // Mangle: damage + bleed
 if(card.name==='Mangle'&&(outcomeType==='hit'||outcomeType==='crit')){
 const repeats=isCrit?2:1;
 for(let r=0;r<repeats;r++){
 const mgDmg=(3+bonusDmg)*(isCrit&&r===0?2:1);
 if(target&&target.hp>0) dealEnemyDamage(target,mgDmg,C.targetIdx);
 }
 log(`🗡️ Mangle: damage${isCrit?' (×2 — resolved twice)':''}!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // ── ROGUE CARD HANDLERS ──────────────────────────────────────

 // Backstab: conditional damage (if enemy took damage this turn)
 if(card.name==='Backstab'&&(outcomeType==='hit'||outcomeType==='crit')){
 // Base damage in hit text is 5 if already damaged, 1 if not
 // We need to check if target took damage this turn
 const alreadyDamaged = target && (target._tookDamageThisTurn||false);
 const bsDmg = (alreadyDamaged ? 5 : 1) + bonusDmg;
 const finalBsDmg = bsDmg * (isCrit?2:1);
 if(target && target.hp>0) dealEnemyDamage(target, finalBsDmg, C.targetIdx);
 log(`🗡️ Backstab: ${finalBsDmg} damage${alreadyDamaged?' (bonus — target already hit!)':''}`, isCrit?'log-crit':'log-hit');
 G.char.comboPoints = Math.min(5,(G.char.comboPoints||0)+1);
 C._shredOverrideFired = true;
 }

 // Premeditation crit: next ability auto-crits
 if(card.name==='Premeditation'&&(outcomeType==='hit'||outcomeType==='crit')){
 if(isCrit){
 C._nextCardAutoCrit=true;
 log('⭐ Premeditation CRIT: next ability resolves as a CRITICAL HIT!','log-crit');
 } else {
 C.autoHitCharges=(C.autoHitCharges||0)+1;
 log('✨ Premeditation: next ability auto-succeeds!','log-info');
 }
 G.char.comboPoints = Math.min(5,(G.char.comboPoints||0)+1);
 C._shredOverrideFired = true;
 }

 // Vigor: -2 to all roll requirements this combat
 if(card.name==='Vigor'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.rollBonus=(G.char.rollBonus||0)+2;
 log('⚡ Vigor: +2 to all rolls for the rest of combat!','log-info');
 if(isCrit){ C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1; log('⚡ Vigor CRIT: play another card!','log-crit'); }
 C._shredOverrideFired=true;
 }

 // Shadow Step crit: gain 3 combo points
 if(card.name==='Shadow Step'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.doubleDmgNext=true;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 G.char.statusEffects=G.char.statusEffects||[];
 G.char.statusEffects.push({id:'stealth',stacks:1});
 if(isCrit){
 G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+3);
 log('🗡️ Shadow Step CRIT: +3 Combo Points!','log-crit');
 } else {
 log('🗡️ Shadow Step: next ability double damage + Stealth + extra play!','log-info');
 }
 C._shredOverrideFired=true;
 }

 // Ambush: only deals damage if stealthed
 if(card.name==='Ambush'&&(outcomeType==='hit'||outcomeType==='crit')){
 const isStealthed=_wasStealthed;
 const ambushDmg=(isStealthed?7:2)+bonusDmg;
 const finalAmbush=ambushDmg*(isCrit?2:1);
 if(target&&target.hp>0) dealEnemyDamage(target,finalAmbush,C.targetIdx);
 log(`🗡️ Ambush: ${finalAmbush} damage${isStealthed?' (stealth bonus!)':''}`,isCrit?'log-crit':'log-hit');
 G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+2);
 C._shredOverrideFired=true;
 }

 // Fan of Knives: hits all enemies
 if(card.name==='Fan of Knives'&&(outcomeType==='hit'||outcomeType==='crit')){
 let cpGained=0;
 C.enemies.forEach((e,ei)=>{
 if(e.hp>0){
 const fokDmg=(2+bonusDmg)*(isCrit?2:1);
 dealEnemyDamage(e,fokDmg,ei);
 cpGained++;
 }
 });
 G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+cpGained);
 log(`🗡️ Fan of Knives: hit ${cpGained} enemies, +${cpGained} Combo Points!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // ── DRUID CARD HANDLERS ──────────────────────────────────────

 // Nourish: Heal 2 + X where X = sum of all active HoT heal amounts
 if(card.name==='Nourish'&&(outcomeType==='hit'||outcomeType==='crit')){
 const hotTotal=(C.activeHoTs||[]).reduce((sum,h)=>sum+(h.healPerTurn||0)+(G.char._hotBonus||0),0);
 const nourishAmt=(2+hotTotal)*(isCrit?2:1);
 const _nOld=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,(G.char.hp||0)+nourishAmt);
 log(`🌿 Nourish: healed ${G.char.hp-_nOld} HP → ${G.char.hp}/${G.char.maxHP} (base 2 + ${hotTotal} from HoTs)`,isCrit?'log-crit':'log-hit');
 if(isCrit){
 // Resolve again
 const _nOld2=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,(G.char.hp||0)+nourishAmt);
 log(`🌿 Nourish CRIT: resolved again! +${G.char.hp-_nOld2} HP → ${G.char.hp}/${G.char.maxHP}`,'log-crit');
 }
 renderHUD();
 C._shredOverrideFired=true;
 }

 // Rebirth: cheat death — survive one fatal hit
 if(card.name==='Rebirth'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._rebirthActive=true;
 C._rebirthFullHeal=isCrit;
 if(isCrit){
 C.preventAttackDamageThisTurn=true;
 log('🌿 Rebirth CRIT: Attack damage blocked this round + cheat death (return to FULL HP)!','log-crit');
 } else {
 log('🌿 Rebirth: Cheat death active — next fatal hit returns you to half HP!','log-info');
 }
 C._shredOverrideFired=true;
 }

 // Force of Nature: summon 3 Treant companions (stacks with existing treants)
 if(card.name==='Force of Nature'&&(outcomeType==='hit'||outcomeType==='crit')){
 const treantDef=CLASS_PETS.druidTreant;
 for(let i=0;i<3;i++){
 summonPet(treantDef,{append:true});
 if(isCrit){const newest=C._pets[C._pets.length-1]; if(newest){newest.maxHP+=2; newest.hp=newest.maxHP;}}
 }
 log(isCrit?'🌳 Force of Nature CRIT: 3 Treants summoned (+2 max HP each)!':'🌳 Force of Nature: 3 Treants summoned!',isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Omen of Clarity: apply Clearcasting buff (3 or 5 turns); procs auto-hit on each player hit
 if(card.name==='Omen Of Clarity'&&(outcomeType==='hit'||outcomeType==='crit')){
  C._omenTurns=(isCrit?5:3);
  C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
  log(`🌿 Omen of Clarity! Clearcasting active for ${C._omenTurns} turn${C._omenTurns!==1?'s':''}. Extra play.`,isCrit?'log-crit':'log-hit');
  C._shredOverrideFired=true;
 }

 // Innervate: draw 3 cards now, +2 extra plays, +3 rolls this turn
 if(card.name==='Innervate'&&(outcomeType==='hit'||outcomeType==='crit')){
  const innResult=drawFromDeck(C.deck,C.discard,3);
  C.deck=innResult.deck; C.discard=innResult.discard;
  C.hand=[...C.hand,...innResult.drawn];
  C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+2;
  C.bonusRoll=(C.bonusRoll||0)+3;
  log(`🌿 Innervate! Drew ${innResult.drawn.length} card${innResult.drawn.length!==1?'s':''}. +2 plays, +3 to all rolls this turn!`,'log-crit');
  renderHUD(); renderHand();
  C._shredOverrideFired=true;
 }

 // Healing Touch: heal 8 HP (16 on crit)
 if(card.name==='Healing Touch'&&(outcomeType==='hit'||outcomeType==='crit')){
 const htAmt = isCrit ? 16 : 8;
 const _htOld=G.char.hp; G.char.hp = Math.min(G.char.maxHP, (G.char.hp||0) + htAmt);
 log(`💚 Healing Touch: healed ${G.char.hp-_htOld} HP → ${G.char.hp}/${G.char.maxHP}`, isCrit?'log-crit':'log-hit');
 renderHUD();
 C._shredOverrideFired = true;
 }

 // Wrath: 4 nature damage; crit +2 to next roll
 if(card.name==='Wrath'&&(outcomeType==='hit'||outcomeType==='crit')){
 const wrathDmg = (4 + bonusDmg) * (isCrit ? 2 : 1);
 if(target && target.hp > 0) dealEnemyDamage(target, wrathDmg, C.targetIdx);
 if(isCrit){ C.bonusRoll=(C.bonusRoll||0)+2; log(`⚡ Wrath CRIT: ${wrathDmg} nature dmg + +2 next roll!`,'log-crit'); }
 else log(`⚡ Wrath: ${wrathDmg} nature dmg!`,'log-hit');
 }

 // Prowl crit: take no attack damage this turn
 if(card.name==='Prowl'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.doubleDmgNext=true;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🌙 Prowl: next ability double damage + extra play!','log-info');
 if(isCrit){ C.preventAttackDamageThisTurn=true; log('🌙 Prowl CRIT: no attack damage this turn!','log-crit'); }
 C._shredOverrideFired=true;
 }

 // Bash: stun target (no attack), crit prevents all attack damage
 if(card.name==='Bash'&&(outcomeType==='hit'||outcomeType==='crit')){
 const bashDmg=(2+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0) dealEnemyDamage(target,bashDmg,C.targetIdx);
 if(target) target._noAttackThisTurn=true;
 log(`🐻 Bash: ${bashDmg} damage — ${target&&target.name} cannot attack!`,isCrit?'log-crit':'log-hit');
 if(isCrit){ C.preventAttackDamageThisTurn=true; log('🐻 Bash CRIT: NO attack damage this turn!','log-crit'); }
 C._shredOverrideFired=true;
 }

 // Maul
 if(card.name==='Maul'&&(outcomeType==='hit'||outcomeType==='crit')){
 const maulDmg=(4+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){ dealEnemyDamage(target,maulDmg,C.targetIdx); if(target) target._halfAttackNextTurn=true; }
 log(`🐻 Maul: ${maulDmg} damage — ${target&&target.name} attacks at half!`,isCrit?'log-crit':'log-hit');
 if(isCrit){ C._maulDmgBuff=(C._maulDmgBuff||0)+1; log('🐻 Maul CRIT: +1 damage this round!','log-crit'); }
 C._shredOverrideFired=true;
 }
 if(card.name==='Maul'&&outcomeType==='critmiss'){
 dealPlayerDamage(2,'Maul (critical miss)',false,null,true);
 log(`🐻 Maul CRIT MISS: your strike goes wide — 2 damage taken!`,'log-critmiss');
 C._shredOverrideFired=true;
 }

 // Tranquility: initial heal + channeled HoT that keeps healing until DC roll fails
 if(card.name==='Tranquility'&&(outcomeType==='hit'||outcomeType==='crit')){
 const tranqAmt=4*(isCrit?2:1);
 const _tqOld=G.char.hp; G.char.hp=Math.min(G.char.maxHP,G.char.hp+tranqAmt);
 log(`🌿 Tranquility: healed ${G.char.hp-_tqOld} HP → ${G.char.hp}/${G.char.maxHP}. Channel begins!`,isCrit?'log-crit':'log-hit');
 C.activeHoTs=C.activeHoTs||[];
 C.activeHoTs=C.activeHoTs.filter(h=>h.name!=='Tranquility');
 C.activeHoTs.push({name:'Tranquility',icon:'🌿',channel:true,dc:8,stack:0,baseHeal:4,bonusPerStack:2,healPerTurn:0,turnsLeft:99});
 renderHUD();
 C._shredOverrideFired=true;
 }

 // Bearzerk crit: lifesteal
 if(card.name==='Bearzerk'&&(outcomeType==='hit'||outcomeType==='crit')){
 const bzBonusDmg=G.char.currentForm==='bear'||G.char.currentForm==='both'?0:0; // double handled by isCrit
 log(`🐻 Bearzerk: +2 damage this turn!`,'log-info');
 G.char.dmgBonus=(G.char.dmgBonus||0)+2;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 if(isCrit){ C._bearzerkLifesteal=true; log('🐻 Bearzerk CRIT: lifesteal — healing all damage dealt!','log-crit'); }
 C._shredOverrideFired=true;
 }

 // Feral Charge: conditional damage + form bonuses
 if(card.name==='Feral Charge'&&(outcomeType==='hit'||outcomeType==='crit')){
 const fcDmg=(6+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0) dealEnemyDamage(target,fcDmg,C.targetIdx);
 const isBear=G.char.currentForm==='bear'||G.char.currentForm==='both';
 const isCat=G.char.currentForm==='cat'||G.char.currentForm==='both';
 if(!isBear&&G.char.hp>G.char.maxHP/2){ dealPlayerDamage(3,'Feral Charge self-damage',false); }
 if(isBear){ C.preventAttackDamageThisTurn=true; log('🐻 Bear Form: no attack damage this turn!','log-info'); }
 if(isCat){ C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1; log('🐱 Cat Form: play another card!','log-info'); }
 log(`🐾 Feral Charge: ${fcDmg} damage!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Pounce: +3 melee damage taken to all enemies
 if(card.name==='Pounce'&&(outcomeType==='hit'||outcomeType==='crit')){
 const pounceDmg=(4+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0) dealEnemyDamage(target,pounceDmg,C.targetIdx);
 C.enemies.forEach(e=>{ if(e.hp>0){ e.debuffs=e.debuffs||[]; const mk=e.debuffs.find(d=>d.id==='marked'); if(mk) mk.stacks+=3; else e.debuffs.push({id:'marked',stacks:3}); }});
 log(`🐱 Pounce: ${pounceDmg} damage, all enemies take +3 melee damage this turn!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Hibernate: heal 50% max HP, lose next turn
 if(card.name==='Hibernate'&&(outcomeType==='hit'||outcomeType==='crit')){
 const hibHeal=Math.floor(G.char.maxHP/2);
 const _hibOld=G.char.hp; G.char.hp=Math.min(G.char.maxHP,G.char.hp+hibHeal);
 if(!isCrit) C.skipNextPlayerTurn=true;
 log(`💤 Hibernate: healed ${G.char.hp-_hibOld} HP → ${G.char.hp}/${G.char.maxHP}${isCrit?'':' — lose next turn'}!`,isCrit?'log-crit':'log-hit');
 renderHUD();
 C._shredOverrideFired=true;
 }

 // Ferocious Bite: 6 melee damage; crit = double + +2 damage next round
 if(card.name==='Ferocious Bite'&&(outcomeType==='hit'||outcomeType==='crit')){
 const fbDmg=(6+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0) dealEnemyDamage(target,fbDmg,C.targetIdx);
 log(`🐱 Ferocious Bite: ${fbDmg} melee damage!`,isCrit?'log-crit':'log-hit');
 if(isCrit){
 G.char.dmgBonus=(G.char.dmgBonus||0)+2;
 log('🐱 Ferocious Bite CRIT: +2 damage next round!','log-crit');
 }
 }

 // ── ROGUE MISSING HANDLERS ───────────────────────────────────
 // Skull Crack: 2 melee dmg + half attack damage this turn + 1 CP
 if(card.name==='Skull Crack'&&(outcomeType==='hit'||outcomeType==='crit')){
  const scDmg=(2+bonusDmg)*(isCrit?2:1);
  if(target&&target.hp>0){dealEnemyDamage(target,scDmg,C.targetIdx);target._halfAttackNextTurn=true;}
  G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+1);
  log(`🔨 Skull Crack: ${scDmg} damage, ${target?.name||'target'} halved attack! +1 CP`,isCrit?'log-crit':'log-hit');
  C._shredOverrideFired=true;
 }
 // Slice 'n Dice (reworked single-player): gain 2 CP + play another card
 if(card.name==="Slice 'n Dice"&&(outcomeType==='hit'||outcomeType==='crit')){
  const sndCp=isCrit?3:2;
  G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+sndCp);
  C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
  log(`🗡️ Slice 'n Dice: +${sndCp} Combo Points. Play another card!`,isCrit?'log-crit':'log-hit');
  C._shredOverrideFired=true;
 }
 // Preparation: gain 3 CP + play another card
 if(card.name==='Preparation'&&(outcomeType==='hit'||outcomeType==='crit')){
  const prepCp=isCrit?5:3;
  G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+prepCp);
  C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
  log(`🗡️ Preparation: +${prepCp} Combo Points. Play another card!`,isCrit?'log-crit':'log-hit');
  C._shredOverrideFired=true;
 }
 // Vanish: immune to attacks this turn, gain Stealth, extra play, +1 CP
 if(card.name==='Vanish'&&(outcomeType==='hit'||outcomeType==='crit')){
  C.preventAttackDamageThisTurn=true;
  G.char.statusEffects=G.char.statusEffects||[];
  if(!(G.char.statusEffects).some(s=>s.id==='stealth'))G.char.statusEffects.push({id:'stealth',stacks:1});
  C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
  G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+1);
  log(`👤 Vanish! Immune to attacks this turn — Stealth gained. +1 CP. Play another card!`,isCrit?'log-crit':'log-hit');
  renderHUD(); C._shredOverrideFired=true;
 }
 // Cold Blood: play another card that auto-crits
 if(card.name==='Cold Blood'&&(outcomeType==='hit'||outcomeType==='crit')){
  C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
  C._nextCardAutoCrit=true;
  log(`🩸 Cold Blood: play another card — it AUTO-CRITS!`,isCrit?'log-crit':'log-hit');
  C._shredOverrideFired=true;
 }
 // Shadow Strike: 10 shadow damage if stealthed, 2 if not
 if(card.name==='Shadow Strike'&&(outcomeType==='hit'||outcomeType==='crit')){
  const ssDmg=(_wasStealthed?(10+bonusDmg):(2+bonusDmg))*(isCrit?2:1);
  if(target&&target.hp>0)dealEnemyDamage(target,ssDmg,C.targetIdx);
  log(_wasStealthed?`🌑 Shadow Strike: ${ssDmg} shadow damage from stealth!`:`🌑 Shadow Strike: ${ssDmg} shadow damage (stealth bonus inactive).`,isCrit?'log-crit':'log-hit');
  C._shredOverrideFired=true;
 }

 // ── MAGE CARD HANDLERS ─────────────────────────────────────
 // Frostbolt: damage + half attack damage this round on target
 if(card.name==='Frostbolt'&&(outcomeType==='hit'||outcomeType==='crit')){
 const fbDmg=(2+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){ dealEnemyDamage(target,fbDmg,C.targetIdx); target._halfAttackNextTurn=true; target._tookIceDamage=true; }
 log(`❄️ Frostbolt: ${fbDmg} ice damage — ${target&&target.name} attacks at half!`,isCrit?'log-crit':'log-hit');
 C._dealtFireThisTurn=false; // not fire
 C._shredOverrideFired=true;
 }

 // Frost Nova: damage all + no attack damage this round
 if(card.name==='Frost Nova'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.enemies.forEach((e,ei)=>{
 if(e.hp>0){ const fnDmg=(1+bonusDmg)*(isCrit?2:1); dealEnemyDamage(e,fnDmg,ei); e._noAttackThisTurn=true; e._tookIceDamage=true; }
 });
 log(`❄️ Frost Nova: ice damage to all — no attacks this round!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Polymorph: target heals 5, enemies deal no attack damage
 if(card.name==='Polymorph'&&(outcomeType==='hit'||outcomeType==='crit')){
 if(target) target.hp=Math.min(target.maxHP,target.hp+5);
 C.enemies.forEach(e=>{ if(e.hp>0) e._noAttackThisTurn=true; });
 log(`🐏 Polymorph: target healed 5 HP, all enemies cannot attack!`,isCrit?'log-crit':'log-hit');
 if(isCrit){ C.enemies.forEach(e=>{ if(e.hp>0) e._noAttackThisTurn=true; }); } // repeat = already done
 C._shredOverrideFired=true;
 }

 // Arcane Power: +3 to arcane abilities for 3 turns
 if(card.name==='Arcane Power'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._arcanePowerActive=(isCrit?5:3);
 C._arcanePowerBonus=3;
 log(`🔮 Arcane Power: arcane abilities +3 damage for ${isCrit?5:3} turns!`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 // Time Stop: all enemies lose actions + 2 extra plays
 if(card.name==='Time Stop'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.enemies.forEach(e=>{ if(e.hp>0) e._noAttackThisTurn=true; });
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+2;
 log('⏱️ Time Stop: all enemies frozen, +2 extra plays!',isCrit?'log-crit':'log-hit');
 if(isCrit){ C.enemies.forEach((e,ei)=>{ if(e.hp>0){const tsDmg=3+bonusDmg;dealEnemyDamage(e,tsDmg,ei);} }); log('⏱️ Time Stop CRIT: +3 arcane damage to all!','log-crit'); }
 C._shredOverrideFired=true;
 }

 // Counterspell: roll bonus + block enemy abilities
 if(card.name==='Counterspell'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.bonusRoll=(C.bonusRoll||0)+2;
 C.preventAttackDamageThisTurn=isCrit; // crit = cancel ALL enemy abilities
 log(`🔮 Counterspell: +2 to next roll${isCrit?' — ALL enemy actions cancelled!':''}`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;
 }

 if(card.name==='Combustion'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._nextFireAutoHit=true;if(isCrit)C._nextFireAutoCrit=true;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🔥 Combustion: next Fire auto-succeeds + extra play!','log-info');
 }
 if(card.name==='Pyroblast'&&(outcomeType==='hit'||outcomeType==='crit')){
 dealPlayerDamage(2,'Pyroblast self-damage',true);
 C.enemies.forEach(e=>{if(e.hp>0){e.debuffs=e.debuffs||[];const ig=e.debuffs.find(d=>d.id==='ignite');if(ig)ig.stacks+=2;else e.debuffs.push({id:'ignite',stacks:2});}});
 if(isCrit){const d=extractDamage(card.hit||'')+bonusDmg;dealEnemyDamage(target,d,C.targetIdx);log(`🔥 Pyroblast CRIT: double damage!`,'log-crit');}
 }
 if(card.name==='Hot Streak'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._hotStreakActive=true;if(isCrit)C._hotStreakCounters=3;
 log(`🔥 Hot Streak active! (${C._hotStreakCounters||0}/3 counters)`,'log-info');
 }
 if(card.name==='Blast Wave'&&(outcomeType==='hit'||outcomeType==='crit')){
 let bwHits=0;
 C.enemies.forEach((e,ei)=>{
 if(e.hp>0){
 const bwDmg=(3+bonusDmg)*(isCrit?2:1);
 dealEnemyDamage(e,bwDmg,ei);
 // Apply ignite
 e.debuffs=e.debuffs||[];
 const ig=e.debuffs.find(d=>d.id==='ignite');
 if(ig) ig.stacks++; else e.debuffs.push({id:'ignite',stacks:1});
 bwHits++;
 }
 });
 C._nextFireDmgBonus=(C._nextFireDmgBonus||0)+bwHits;
 C._dealtFireThisTurn=true;
 log(`🔥 Blast Wave: ${3*(isCrit?2:1)} fire to all, next Fire +${bwHits} dmg!`,isCrit?'log-crit':'log-hit');
 }
 if(card.name==='Ice Armor'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char._iceArmorCharges=isCrit?999:2+(G.char._armorExtraCharges||0);
 log(`🛡️ Ice Armor: attack damage halved (${G.char._iceArmorCharges} charges)!`,'log-info');
 }
 if(card.name==='Mage Armor'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char._mageArmorCharges=2+(G.char._armorExtraCharges||0);
 if(isCrit)C.bonusDrawNextTurn=(C.bonusDrawNextTurn||0)+Math.ceil((C._lastTurnDamageTaken||0)/3);
 log('✨ Mage Armor: ability damage halved!','log-info');
 }
 // ── MAGE TIER III/IV HANDLERS ──────────────────────────────────────
 if(card.name==='Water Elemental'&&(outcomeType==='hit'||outcomeType==='crit')){
  summonPetById('mageWaterElemental');
  const newest=C._pets&&C._pets[C._pets.length-1];
  if(isCrit&&newest){ newest.maxHP+=3; newest.hp=newest.maxHP; }
  // On-summon AoE: 2 ice magic damage to all enemies
  const weSummonDmg=2+bonusDmg;
  C.enemies.forEach((e,ei)=>{if(e.hp>0){dealEnemyDamage(e,weSummonDmg,ei);e._tookIceDamage=true;}});
  log(`💧 Water Elemental summoned!${isCrit?' (+3 max HP)':''} Blasted all enemies for ${weSummonDmg} ice.`,isCrit?'log-crit':'log-hit');
  C._shredOverrideFired=true;
 }
 if(card.name==='Blizzard'&&(outcomeType==='hit'||outcomeType==='crit')){
  const bDmg=(2+bonusDmg)*(isCrit?2:1);
  C.enemies.forEach((e,ei)=>{if(e.hp>0){const d=(C._shatterActive&&e._tookIceDamage)?bDmg*2:bDmg;dealEnemyDamage(e,d,ei);e._tookIceDamage=true;}});
  log(`❄️ Blizzard: ${bDmg} ice to all. Channel begins!`,isCrit?'log-crit':'log-hit');
  C.activeHoTs=C.activeHoTs||[];
  C.activeHoTs=C.activeHoTs.filter(h=>h.name!=='Blizzard');
  C.activeHoTs.push({name:'Blizzard',icon:'❄️',channel:true,channelType:'damage',dc:12,stack:0,baseDmg:2,bonusPerStack:1,turnsLeft:99});
  C._shredOverrideFired=true;
 }
 if(card.name==='Blizzard'&&outcomeType==='critmiss'){
  dealPlayerDamage(2,'Blizzard (crit miss)',false,null,true);
  log('❄️ Blizzard CRIT MISS: storm turns inward — 2 damage!','log-critmiss');
  C._shredOverrideFired=true;
 }
 if(card.name==='Flamestrike'&&(outcomeType==='hit'||outcomeType==='crit')){
  const fsDmg=(3+bonusDmg)*(isCrit?2:1);
  C.enemies.forEach((e,ei)=>{if(e.hp>0){dealEnemyDamage(e,fsDmg,ei);e.debuffs=e.debuffs||[];const ig=e.debuffs.find(d=>d.id==='ignite');if(ig)ig.stacks+=2;else e.debuffs.push({id:'ignite',stacks:2});const mk=e.debuffs.find(d=>d.id==='marked');if(mk)mk.stacks=(mk.stacks||0)+1;else e.debuffs.push({id:'marked',stacks:1});}});
  C._dealtFireThisTurn=true;
  log(`🔥 Flamestrike: ${fsDmg} fire to all. +1 dmg taken, 2 ignite each!`,isCrit?'log-crit':'log-hit');
  C._shredOverrideFired=true;
 }
 if(card.name==='Flamestrike'&&outcomeType==='critmiss'){
  dealPlayerDamage(3,'Flamestrike (crit miss)',false,null,true);
  log('🔥 Flamestrike CRIT MISS: backfire — 3 damage!','log-critmiss');
  C._shredOverrideFired=true;
 }
 if(card.name==='Presence of Mind'&&(outcomeType==='hit'||outcomeType==='crit')){
  if(isCrit){C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+2;C.autoHitCharges=(C.autoHitCharges||0)+2;log('✨ Presence of Mind CRIT: 2 extra plays, next 2 abilities auto-succeed!','log-crit');}
  else{C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;C.autoHitCharges=(C.autoHitCharges||0)+1;log('✨ Presence of Mind: extra play + next ability cannot fail!','log-info');}
  C._shredOverrideFired=true;
 }
 if(card.name==='Presence of Mind'&&outcomeType==='critmiss'){
  C.drawPenalty=1;C.bonusRoll=(C.bonusRoll||0)-10;
  log('✨ Presence of Mind CRIT MISS: draw only 1 next turn, -10 to next roll!','log-critmiss');
  C._shredOverrideFired=true;
 }
 if(card.name==='Evocation'&&(outcomeType==='hit'||outcomeType==='crit')){
  if(isCrit){
   const allCards=[...C.deck,...C.discard];C.deck=[];C.discard=[];C.hand=[...C.hand,...allCards];
   const evRoll=d20();const extras=Math.ceil(evRoll/2);C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+extras;
   log(`🔮 Evocation CRIT: drew entire deck (${allCards.length} cards)! Rolled ${evRoll} → +${extras} plays!`,'log-crit');
  } else {
   const evRes=drawFromDeck(C.deck,C.discard,3);C.deck=evRes.deck;C.discard=evRes.discard;C.hand=[...C.hand,...evRes.drawn];
   const evRoll=d20();const extras=Math.ceil(evRoll/4);C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+extras;
   log(`🔮 Evocation: drew ${evRes.drawn.length} cards! Rolled ${evRoll} → +${extras} plays!`,'log-info');
  }
  C._shredOverrideFired=true;
 }
 if(card.name==="Dragon's Breath"&&(outcomeType==='hit'||outcomeType==='crit')){
  const dbDmg=(4+bonusDmg)*(isCrit?2:1);
  C.enemies.forEach((e,ei)=>{if(e.hp>0){dealEnemyDamage(e,dbDmg,ei);e._halfAttackNextTurn=true;e.debuffs=e.debuffs||[];const ig=e.debuffs.find(d=>d.id==='ignite');if(ig)ig.stacks++;else e.debuffs.push({id:'ignite',stacks:1});}});
  C._dealtFireThisTurn=true;
  log(`🐉 Dragon's Breath: ${dbDmg} fire to all. Half attack, 1 ignite each!`,isCrit?'log-crit':'log-hit');
  C._shredOverrideFired=true;
 }
 if(card.name==="Dragon's Breath"&&outcomeType==='critmiss'){
  dealPlayerDamage(2,"Dragon's Breath (crit miss)",false,null,true);
  log("🐉 Dragon's Breath CRIT MISS: scorched — 2 damage!",'log-critmiss');
  C._shredOverrideFired=true;
 }
 if(card.name==='Cold Snap'&&(outcomeType==='hit'||outcomeType==='crit')){
  C._nextIceDmgBonus=(C._nextIceDmgBonus||0)+5;
  C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
  if(isCrit){C._nextCardAutoCrit=true;log('❄️ Cold Snap CRIT: +5 next ice + extra play + next ability auto-crits!','log-crit');}
  else log('❄️ Cold Snap: +5 damage to next ice ability + extra play!','log-info');
  C._shredOverrideFired=true;
 }
 if(card.name==='Cold Snap'&&outcomeType==='critmiss'){
  dealPlayerDamage(3,'Cold Snap (crit miss)',false,null,true);
  log('❄️ Cold Snap CRIT MISS: frost rebound — 3 damage!','log-critmiss');
  C._shredOverrideFired=true;
 }
 if(card.name==='Pyroclasm'&&(outcomeType==='hit'||outcomeType==='crit')){
  let pcTotal=0;
  C.enemies.forEach((e,ei)=>{
   if(e.hp<=0)return;
   const ig=(e.debuffs||[]).find(d=>d.id==='ignite');
   const stacks=ig?ig.stacks:0;
   if(stacks>0){const pcDmg=(stacks+3)*(isCrit?2:1);dealEnemyDamage(e,pcDmg,ei);pcTotal+=pcDmg;ig.stacks=0;}
   if(isCrit){e.debuffs=e.debuffs||[];const ig2=e.debuffs.find(d=>d.id==='ignite');if(ig2)ig2.stacks++;else e.debuffs.push({id:'ignite',stacks:1});}
  });
  if(pcTotal>0)C._dealtFireThisTurn=true;
  log(`🌋 Pyroclasm: ignite consumed — ${pcTotal} fire damage!${isCrit?' Reapplied 1 ignite each.':''}`,isCrit?'log-crit':'log-hit');
  C._shredOverrideFired=true;
 }
 if(card.name==='Icy Veins'&&(outcomeType==='hit'||outcomeType==='crit')){
  C._icyVeinsActive=true;
  log('❄️ Icy Veins: first ice ability each turn grants an extra play!','log-info');
  C._shredOverrideFired=true;
 }
 if(card.name==='Phoenix Flames'&&(outcomeType==='hit'||outcomeType==='crit')){
  const srcIg=target?(target.debuffs||[]).find(d=>d.id==='ignite'):null;
  const spread=srcIg?srcIg.stacks:0;
  if(spread>0&&srcIg)srcIg.stacks=0;
  let pfTotal=0;
  C.enemies.forEach((e,ei)=>{
   if(e.hp<=0||e===target)return;
   if(spread>0){e.debuffs=e.debuffs||[];const ig=e.debuffs.find(d=>d.id==='ignite');if(ig)ig.stacks+=spread;else e.debuffs.push({id:'ignite',stacks:spread});dealEnemyDamage(e,spread,ei);pfTotal+=spread;}
   if(isCrit){e.debuffs=e.debuffs||[];const ig2=e.debuffs.find(d=>d.id==='ignite');if(ig2)ig2.stacks+=3;else e.debuffs.push({id:'ignite',stacks:3});}
  });
  if(pfTotal>0)C._dealtFireThisTurn=true;
  log(`🔥 Phoenix Flames: ${spread} ignite spread to all. ${pfTotal} fire dealt!${isCrit?' +3 ignite each!':''}`,isCrit?'log-crit':'log-hit');
  C._shredOverrideFired=true;
 }
 if(card.name==='Phoenix Flames'&&outcomeType==='critmiss'){
  dealPlayerDamage(1,'Phoenix Flames (crit miss)',false,null,true);
  log('🔥 Phoenix Flames CRIT MISS: flames turn inward — 1 damage!','log-critmiss');
  C._shredOverrideFired=true;
 }
 if(card.name==='Meteor'&&(outcomeType==='hit'||outcomeType==='crit')){
  const mtDmg=(7+bonusDmg)*(isCrit?2:1);
  if(target&&target.hp>0)dealEnemyDamage(target,mtDmg,C.targetIdx);
  C.enemies.forEach((e,ei)=>{if(e.hp>0){e.debuffs=e.debuffs||[];const ig=e.debuffs.find(d=>d.id==='ignite');if(ig)ig.stacks+=2;else e.debuffs.push({id:'ignite',stacks:2});}});
  if(isCrit)C._meteorRepeat=true;
  C._dealtFireThisTurn=true;
  log(`☄️ Meteor: ${mtDmg} fire damage + 2 ignite to all!${isCrit?' Repeats at end of next turn!':''}`,isCrit?'log-crit':'log-hit');
  C._shredOverrideFired=true;
 }
 if(card.name==='Meteor'&&outcomeType==='critmiss'){
  dealPlayerDamage(5,'Meteor (crit miss)',false,null,true);
  C.skipNextPlayerTurn=true;
  log('☄️ Meteor CRIT MISS: meteor falls on you — 5 damage + lose next turn!','log-critmiss');
  C._shredOverrideFired=true;
 }
 if(card.name==='Arcane Blast'&&(outcomeType==='hit'||outcomeType==='crit')){
  const abDmg=12+3*C.hand.length;
  if(target&&target.hp>0)dealEnemyDamage(target,abDmg,C.targetIdx);
  if(isCrit){
   const abOthers=C.enemies.filter((e,ei)=>e.hp>0&&ei!==C.targetIdx);
   if(abOthers.length>0){const t2=abOthers[0];dealEnemyDamage(t2,abDmg,C.enemies.indexOf(t2));log(`🔮 Arcane Blast CRIT: ${abDmg} arcane to 2 targets!`,'log-crit');}
   else log(`🔮 Arcane Blast CRIT: ${abDmg} arcane damage!`,'log-crit');
  } else log(`🔮 Arcane Blast: ${abDmg} arcane damage (12 + 3×${C.hand.length})!`,'log-hit');
  C._shredOverrideFired=true;
 }
 if(card.name==='Arcane Blast'&&outcomeType==='critmiss'){
  dealPlayerDamage(3,'Arcane Blast (crit miss)',false,null,true);
  C.drawPenalty=1;C.skipNextPlayerTurn=true;
  log('🔮 Arcane Blast CRIT MISS: arcane backfire — 3 damage, draw 1 next turn, lose next turn!','log-critmiss');
  C._shredOverrideFired=true;
 }
 if(card.name==='Shatter'&&(outcomeType==='hit'||outcomeType==='crit')){
  C._shatterActive=true;
  log('❄️ Shatter: ice abilities deal double to ice-touched targets for the rest of combat!','log-info');
  C._shredOverrideFired=true;
 }

 // DRUID FORMS
 if(card.name==='Shapeshift: Cat'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.currentForm='cat';
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🐱 Cat Form: Melee +2 damage. Extra play!','log-info');
 if(isCrit){ C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1; log('🐱 Cat Form CRIT: +2 extra plays!','log-crit'); }
 }
 if(card.name==='Shapeshift: Bear'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.currentForm='bear';
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🐻 Bear Form: Take half damage. Extra play!','log-info');
 if(isCrit){ C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1; log('🐻 Bear Form CRIT: +2 extra plays!','log-crit'); }
 }
 if(card.name==="Shapeshift: Cat"&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.currentForm='cat';
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🐱 Shapeshift: Cat Form. Melee +2 damage. Extra play!','log-info');
 if(isCrit){ C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1; }
 }
 if(card.name==='Shapeshift: Bear'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.currentForm='bear';
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🐻 Shapeshift: Bear Form. Take half damage. Extra play!','log-info');
 if(isCrit){ C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1; }
 }
 if(card.name==='Shapeshift: Astral'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.currentForm='astral'; // excludes Shapeshift: Astral (d37) from draws
 G.char._astralBonusDmg=(G.char._astralBonusDmg||0)+1; // +1 nature & arcane damage
 G.char.critThreshold=Math.min(G.char.critThreshold||20, 18); // Balance crits on 18+
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🌟 Shapeshift: Astral Form. +1 nature/arcane damage, Balance crits on 18+!','log-info');
 if(isCrit){ C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1; }
 }
 if(card.name==='Shapeshift: Tree of Life'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.currentForm='tree'; G.char._treeOfLifeActive=true;
 G.char._hotBonus=(G.char._hotBonus||0)+1; // +1 to all healing
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🌳 Shapeshift: Tree of Life. +1 to all healing effects. Extra play!','log-info');
 if(isCrit){ C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1; }
 }
 if(card.name==="King of the Jungle"&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.currentForm='both';
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🐾 King of the Jungle: Cat + Bear dual form! Extra play!','log-crit');
 }
 // Swift Mend: instantly apply all HoT healing + clear them + extra play
 if(card.name==='Swift Mend'&&(outcomeType==='hit'||outcomeType==='crit')){
  if(isCrit){
   C.activeHoTs=C.activeHoTs.map(h=>({...h,turnsLeft:4}));
   log(`🌿 Swift Mend CRIT: all HoTs refreshed to 4 turns!`,'log-crit');
  } else {
   let smTotal=0;
   C.activeHoTs.forEach(h=>{const heal=h.turnsLeft*(h.healPerTurn+(G.char._hotBonus||0))+(h.bloomAmt||0);smTotal+=heal;});
   if(smTotal>0){const oldHp=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+smTotal);log(`🌿 Swift Mend: instantly resolved all HoTs — healed ${G.char.hp-oldHp} HP!`,'log-hit');}
   else log('🌿 Swift Mend: no active HoTs to resolve.','log-info');
   C.activeHoTs=[];
  }
  C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
  C._shredOverrideFired=true;
 }
 // Gaia's Bounty: refresh all HoT durations + draw 1
 if(card.name==="Gaia's Bounty"&&(outcomeType==='hit'||outcomeType==='crit')){
  const refresh=isCrit?6:4;
  C.activeHoTs=C.activeHoTs.map(h=>({...h,turnsLeft:h.turnsLeft+refresh}));
  const gbRes=drawFromDeck(C.deck,C.discard,1);C.deck=gbRes.deck;C.discard=gbRes.discard;C.hand=[...C.hand,...gbRes.drawn];
  log(`🌿 Gaia's Bounty: all HoTs extended by ${refresh} turns! Drew ${gbRes.drawn.length} card.`,isCrit?'log-crit':'log-hit');
  renderHand();
  C._shredOverrideFired=true;
 }
 // Astral Alignment: while in astral form, each hit deals 2 damage (max 3/turn)
 if(card.name==='Astral Alignment'&&(outcomeType==='hit'||outcomeType==='crit')){
  C._astralAlignActive=true;
  log('🌟 Astral Alignment: each successful roll deals 2 arcane damage (max 3/turn)!','log-info');
  C._shredOverrideFired=true;
 }
 if(card.name==="Tiger's Fury"&&(outcomeType==='hit'||outcomeType==='crit')){
 const tfBonus=(G.char.currentForm==='cat'||G.char.currentForm==='both')?2:1;
 G.char.dmgBonus=(G.char.dmgBonus||0)+tfBonus;C._tigersRuryActive=true;
 if(isCrit)C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`🐯 Tiger's Fury: +${tfBonus} melee damage (persistent)!${isCrit?' Extra play!':''}`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 if(card.name==='Iron Hide'&&(outcomeType==='hit'||outcomeType==='crit')){
 C._ironHideActive=true;
 if(isCrit)C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`🐻 Iron Hide: persistent! Each attack roll >8 — take -1 damage (bear form: auto-success)!${isCrit?' Extra play!':''}`,isCrit?'log-crit':'log-hit');
 C._shredOverrideFired=true;}
 // Swipe: 3 melee damage to ALL enemies + extra play
 if(card.name==='Swipe'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.enemies.forEach((e,ei)=>{
 if(e.hp>0){
 const sw=(3+bonusDmg)*(isCrit?2:1);
 dealEnemyDamage(e,sw,ei);
 }
 });
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log(`🐾 Swipe: ${(3+bonusDmg)*(isCrit?2:1)} melee damage to all enemies! Extra play!`,isCrit?'log-crit':'log-hit');
 }
 // Starfire: 6 arcane magic damage to target
 if(card.name==='Starfire'&&(outcomeType==='hit'||outcomeType==='crit')){
 const strDmg=(6+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0) dealEnemyDamage(target,strDmg,C.targetIdx);
 log(`⭐ Starfire: ${strDmg} arcane damage!${isCrit?' (CRIT +2 next roll)':''}`,isCrit?'log-crit':'log-hit');
 if(isCrit){ C.bonusRoll=(C.bonusRoll||0)+2; }
 }

 // Solar Flare: 3 nature magic damage to ALL living enemies
 if(card.name==='Solar Flare'&&(outcomeType==='hit'||outcomeType==='crit')){
 const sfBase = 3 * (isCrit?2:1);
 const sfAmt = sfBase + bonusDmg;
 const living = C.enemies.filter(e=>e.hp>0);
 living.forEach((e,_)=>{ dealEnemyDamage(e, sfAmt, C.enemies.indexOf(e)); });
 log(`☀️ Solar Flare: ${sfAmt} nature damage to ${living.length} enemies (base ${sfBase} + ${bonusDmg} bonus)`,isCrit?'log-crit':'log-hit');
 }

 // Sunfire: 1 nature dmg to ALL enemies, repeating
 if(card.name==='Sunfire'&&(outcomeType==='hit'||outcomeType==='crit')){
 let dc=card.risk; let totalSun=0; let wave=0;
 for(let r=0;r<6;r++){
 const sd=(1+bonusDmg)*(isCrit&&r===0?2:1);
 const living=C.enemies.filter(e=>e.hp>0);
 if(!living.length) break;
 living.forEach(e=>{ dealEnemyDamage(e,sd,C.enemies.indexOf(e)); totalSun+=sd; });
 wave++;
 dc+=2;
 const roll=d20();
 if(roll<dc){
 log(`☀️ Sunfire wave ${wave}: rolled ${roll} vs DC ${dc} — STOPPED.`,'log-miss');
 break;
 }
 log(`☀️ Sunfire wave ${wave}: rolled ${roll} vs DC ${dc} — continues!`,'log-hit');
 }
 log(`☀️ Sunfire: ${wave} wave${wave!==1?'s':''}, ${totalSun} total nature damage!`,totalSun>3?'log-crit':'log-hit');
 }
 // Maim: 3 melee + target takes +2 melee damage from all sources this turn
 if(card.name==='Maim'&&(outcomeType==='hit'||outcomeType==='crit')){
 const maimDmg=(3+bonusDmg)*(isCrit?2:1);
 if(target&&target.hp>0){ dealEnemyDamage(target,maimDmg,C.targetIdx); }
 if(target){ target.debuffs=target.debuffs||[]; const mk=target.debuffs.find(d=>d.id==='marked'); if(mk) mk.stacks+=2; else target.debuffs.push({id:'marked',stacks:2}); }
 log(`🐱 Maim: ${maimDmg} damage, target takes +2 melee damage this turn!`,isCrit?'log-crit':'log-hit');
 }
 // Nature's Might: target ally deals +3 melee damage + extra play
 if(card.name==="Nature's Might"&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.dmgBonus=(G.char.dmgBonus||0)+3;
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log("🌿 Nature's Might: +3 melee damage this turn! Extra play!",'log-info');
 if(isCrit){ G.char.dmgBonus=(G.char.dmgBonus||0)+2; log("🌿 CRIT: +5 total!",'log-crit'); }
 }
 // Overrun: +3 to next roll, +2 damage this turn
 if(card.name==='Overrun'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.bonusRoll=(C.bonusRoll||0)+3;
 G.char.dmgBonus=(G.char.dmgBonus||0)+2;
 log('🐻 Overrun: +3 to next roll, +2 damage this turn!','log-info');
 if(isCrit){ C.bonusRoll=(C.bonusRoll||0)+2; }
 }
 // Provoke: reset surge timer on all enemies + take half damage this turn
 if(card.name==='Provoke'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.enemies.forEach(e=>{
 if(e.hp>0 && e.turnCount>0){
 // Reset turnCount to 1 so surge counter resets (surge triggers on turnCount%4===0)
 e.turnCount=1;
 }
 });
 C._provokeDmgReduction=true; // take half damage from attacks this turn
 C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;
 log('🐻 Provoke: surge timers reset on all enemies! Attack damage halved this turn. Extra play!','log-info');
 if(isCrit){
 C.preventAttackDamageThisTurn=true;
 log('🐻 Provoke CRIT: ALL attack damage blocked this turn!','log-crit');
 }
 C._shredOverrideFired=true;
 }
 if(card.name==='Growl'&&(outcomeType==='hit'||outcomeType==='crit')){
 const growlAmt=isCrit?3:2, growlTurns=isCrit?3:2;
 C._growlDebuff={amount:growlAmt,turns:growlTurns};
 const bearMsg=(G.char.currentForm==='bear'||G.char.currentForm==='both')?'+1 armor. ':'';
 if(G.char.currentForm==='bear'||G.char.currentForm==='both') G.char.dmgReduction=(G.char.dmgReduction||0)+1;
 log(`🐻 Growl: all enemy attacks -${growlAmt} damage for ${growlTurns} turns! ${bearMsg}`,isCrit?'log-crit':'log-hit');
 if(isCrit){C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1;}
 C._shredOverrideFired=true;
 }
 if(card.name==='Thorns'&&(outcomeType==='hit'||outcomeType==='crit')){
 C.thornsActive={targetIdx:C.targetIdx};log('🌿 Thorns: attack damage will be reflected!','log-info');
 }
 // Obfuscate: play a card from discard
 if(card.name==='Obfuscate'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char.statusEffects=G.char.statusEffects||[];
 G.char.statusEffects.push({id:'stealth',stacks:1});
 G.char.comboPoints=Math.min(5,(G.char.comboPoints||0)+1);
 log('👤 Obfuscate: Gained Stealth + 1 Combo Point. Choose a card from discard.','log-info');
 if(C.discard.length>0){
 C._waitingForPicker=true;
 showDiscardPicker(isCrit?'crit':'hit');
 } else {
 log('Discard is empty — nothing to retrieve.','log-miss');
 }
 C._shredOverrideFired=true; // prevent normal damage
 }

 if(card.name==='Claw'&&(outcomeType==='hit'||outcomeType==='crit')){
 const clawMult = isCrit ? 3 : 1;
 const clawDmg = (4 + bonusDmg) * clawMult;
 if(target && target.hp > 0) dealEnemyDamage(target, clawDmg, C.targetIdx);
 C.extraAllowedThisTurn = (C.extraAllowedThisTurn||0) + 1;
 log(`🐾 Claw: ${clawDmg} melee damage${isCrit?' (TRIPLE!)':''} + play another card!`, isCrit?'log-crit':'log-hit');
 }
 if(card.name==='Shred'&&(outcomeType==='hit'||outcomeType==='crit')&&target){
 const belowHalf=target.hp<=Math.ceil(target.maxHP/2);
 const shredBase=belowHalf?8:4;
 const sd=(shredBase+bonusDmg)*(isCrit?2:1);
 dealEnemyDamage(target,sd,C.targetIdx);
 log(`🐾 Shred: ${sd} damage${belowHalf?' (below half HP bonus!)':''}`,isCrit?'log-crit':'log-hit');
 }
 if(card.name==='Rejuvenation'&&(outcomeType==='hit'||outcomeType==='crit')){
 const h=isCrit?4:2;const _rjOld=G.char.hp; G.char.hp=Math.min(G.char.maxHP,G.char.hp+h);
 log(`💚 Rejuvenation: healed ${G.char.hp-_rjOld} HP → ${G.char.hp}/${G.char.maxHP}`,'log-hit');
 C.activeHoTs=C.activeHoTs||[];
 C.activeHoTs.push({name:'Rejuvenation',icon:'💚',healPerTurn:isCrit?6:3,turnsLeft:3});
 C._shredOverrideFired=true;
 }
 if(card.name==='Regrowth'&&(outcomeType==='hit'||outcomeType==='crit')){
 const h=isCrit?10:5;const _rgOld=G.char.hp; G.char.hp=Math.min(G.char.maxHP,G.char.hp+h);
 log(`🌿 Regrowth: healed ${G.char.hp-_rgOld} HP → ${G.char.hp}/${G.char.maxHP}`,'log-hit');
 C.activeHoTs=C.activeHoTs||[];
 C.activeHoTs.push({name:'Regrowth',icon:'🌿',healPerTurn:isCrit?4:2,turnsLeft:4});
 C._shredOverrideFired=true;
 }
 if(card.name==='Wild Growth'&&(outcomeType==='hit'||outcomeType==='crit')){
 const h=isCrit?6:3;const _wgOld=G.char.hp; G.char.hp=Math.min(G.char.maxHP,G.char.hp+h);
 log(`🌿 Wild Growth: healed ${G.char.hp-_wgOld} HP → ${G.char.hp}/${G.char.maxHP}`,'log-hit');
 C.activeHoTs=C.activeHoTs||[];
 const wgEx=C.activeHoTs.findIndex(h=>h.name==='Wild Growth');if(wgEx>=0)C.activeHoTs.splice(wgEx,1);
 C.activeHoTs.push({name:'Wild Growth',icon:'🌿',healPerTurn:isCrit?3:2,turnsLeft:4});
 log(`🌿 Wild Growth HoT: +${isCrit?3:2}/turn for 4 turns.`,'log-info');
 C._shredOverrideFired=true;
 }
 if(card.name==='Lifebloom'&&(outcomeType==='hit'||outcomeType==='crit')){
 let s=1;G.char.hp=Math.min(G.char.maxHP,G.char.hp+1);
 if(isCrit){for(let r=0;r<3;r++){s++;G.char.hp=Math.min(G.char.maxHP,G.char.hp+1);}log(`🌸 Lifebloom crit! ${s}×`,'log-crit');}
 else{let dc=card.risk+4;for(let r=0;r<3;r++){const roll=d20()+(G.char.rollBonus||0);if(roll>=dc){s++;G.char.hp=Math.min(G.char.maxHP,G.char.hp+1);log(`🌸 Lifebloom repeats (${roll}≥${dc}) — ${s}×`,'log-hit');dc+=4;}else{log(`🌸 Lifebloom stops at ${s}×. (${roll}<${dc})`,'log-miss');break;}}}
 const lbHot=s,lbBloom=s*3+(G.char._lifeboomBonus||0);
 C.activeHoTs=C.activeHoTs||[];
 const ex=C.activeHoTs.find(h=>h.name==='Lifebloom');
 if(ex){G.char.hp=Math.min(G.char.maxHP,G.char.hp+ex.bloomAmt);log(`🌸 Lifebloom BLOOMS! +${ex.bloomAmt} HP!`,'log-crit');ex.healPerTurn=lbHot;ex.bloomAmt=lbBloom;ex.turnsLeft=3;}
 else{C.activeHoTs.push({name:'Lifebloom',icon:s>=3?'🌺':'🌸',healPerTurn:lbHot,turnsLeft:3,bloomAmt:lbBloom});log(`🌸 Lifebloom ${s}× — HoT +${lbHot}/T for 3 turns, blooms +${lbBloom}`,'log-info');}
 C._shredOverrideFired=true;
 }
 if(card.name==='Molten Armor'&&(outcomeType==='hit'||outcomeType==='crit')){
 G.char._moltenArmorActive=true;G.char._moltenArmorCharges=2;G.char._moltenArmorFireBonus=1;
 log('🌋 Molten Armor: Fire +1, retaliate on hits (2 charges).','log-info');
 }
 C._dmgDoubleActive=false; // reset double after card resolves
 // Gaia's Blessing: replay Restoration/Balance card without extra play cost
 if(C._doubleNextRestoBalance){
 const cardTalent = CARD_TALENTS[card.name];
 if(cardTalent==='Restoration'||cardTalent==='Balance'){
 C._doubleNextRestoBalance=false;
 log(`🌿 Gaia's Blessing: ${card.name} resolves TWICE!`,'log-crit');
 // Replay at same outcome, doesn't cost an extra play
 applyCombatEffect(card, outcomeType, target, doubleDmg);
 return; // return after recursion to avoid double-resetting
 }
 }
 // Omen of Clarity proc: on any hit/crit while buff is active, 50% chance to grant auto-hit + draw 1
 if((outcomeType==='hit'||outcomeType==='crit')&&(C._omenTurns||0)>0&&card.name!=='Omen Of Clarity'){
  if(d20()>=11){
   C.autoHitCharges=(C.autoHitCharges||0)+1;
   const procDraw=drawFromDeck(C.deck,C.discard,1);
   C.deck=procDraw.deck; C.discard=procDraw.discard;
   C.hand=[...C.hand,...procDraw.drawn];
   showProcAlert('🌿','CLEARCASTING','Next ability auto-succeeds · Drew 1 card');
   log(`🌿 Clearcasting procs! Next ability auto-succeeds. Drew 1 card. (${C._omenTurns} turn${C._omenTurns!==1?'s':''} left)`,'log-info');
   renderHand();
  }
 }
 // Astral Alignment: each hit/crit deals 2 arcane damage (max 3/turn), while in astral form
 if(C._astralAlignActive&&G.char.currentForm==='astral'&&(outcomeType==='hit'||outcomeType==='crit')){
  C._astralAlignHits=(C._astralAlignHits||0);
  if(C._astralAlignHits<3){
   const aaTarget=C.enemies.find(e=>e.hp>0);
   if(aaTarget){dealEnemyDamage(aaTarget,2,C.enemies.indexOf(aaTarget));log(`🌟 Astral Alignment: 2 arcane damage!`,'log-hit');}
   C._astralAlignHits++;
  }
 }
 // Miner's Pick: 5% crit stun proc
 if(isCrit&&(G.char._critStunChance||0)>0&&target&&target.hp>0){
  if(Math.random()*100<G.char._critStunChance){
   target._stunnedTurns=(target._stunnedTurns||0)+1;
   log(`⛏️ Critical blow! ${target.name} is stunned!`,'log-crit');
  }
 }
 C._shredOverrideFired=false;
}

// ── SURGE ALERT ───────────────────────────────────────────────────
function showSurgeAlert(enemyName, portrait) {
 const el=document.createElement('div');
 el.className='surge-alert';
 el.innerHTML=`<div class="surge-alert-inner">
 <div class="surge-alert-portrait">${portrait||'⚡'}</div>
 <div class="surge-alert-label">SURGE!</div>
 <div class="surge-alert-name">${enemyName}</div>
 </div>`;
 document.body.appendChild(el);
 el.addEventListener('animationend',()=>el.remove(),{once:true});
}

function showProcAlert(icon, label, sub) {
 const el=document.createElement('div');
 el.className='proc-alert';
 el.innerHTML=`<div class="proc-alert-inner">
  <div class="proc-alert-icon">${icon}</div>
  <div class="proc-alert-label">${label}</div>
  ${sub?`<div class="proc-alert-sub">${sub}</div>`:''}
 </div>`;
 document.body.appendChild(el);
 el.addEventListener('animationend',()=>el.remove(),{once:true});
}

// ── FLOATING COMBAT TEXT ──────────────────────────────────────────
function spawnFloatText(text, el, type) {
 if(!el) return;
 const rect=el.getBoundingClientRect();
 if(!rect.width&&!rect.height) return;
 const d=document.createElement('div');
 d.className=`float-text float-text-${type}`;
 d.textContent=text;
 const ox=(Math.random()-0.5)*(rect.width*0.5);
 d.style.left=(rect.left+rect.width/2+ox)+'px';
 d.style.top=(rect.top+rect.height*0.25)+'px';
 document.body.appendChild(d);
 d.addEventListener('animationend',()=>d.remove(),{once:true});
}
function spawnEnemyFloat(text,idx,type){
 const el=document.querySelector(`[data-enemy-idx="${idx}"]`);
 spawnFloatText(text,el,type);
}
function spawnPlayerFloat(text,type){
 spawnFloatText(text,$('player-hp-center'),type);
}

// ── PETS ──────────────────────────────────────────────────────────
const HUNTER_PETS = [
 { id:'harou',      name:'Harou the Wolf',         icon:'🐺', species:'Wolf',    maxHP:6,  cls:'Hunter', range:[1,3],
   rollTable:[['1-5','1 melee dmg; +1 your dmg this turn'],['6-10','2 melee dmg; +1 your dmg this turn'],['11-19','3 melee dmg; +1 your dmg this turn'],['20','3 melee dmg; +2 your dmg this turn']] },
 { id:'kuma',       name:'Kuma the Bear',          icon:'🐻', species:'Bear',    maxHP:10, cls:'Hunter', range:[4,7],
   rollTable:[['1-5','Kuma heals 3 HP'],['6-10','2 melee to 2 enemies'],['11-19','5 melee to 1 enemy'],['20','5 melee to all; enemies deal half dmg this turn']] },
 { id:'siku',       name:'Siku the Hawk',          icon:'🦅', species:'Hawk',    maxHP:5,  cls:'Hunter', range:[8,10],
   rollTable:[['1-5','Fetch tier 1 loot'],['6-10','1 melee dmg + fetch tier 2 loot'],['11-19','3 melee dmg; target takes +2 dmg this turn'],['20','Sacrifice Siku: 10 melee to 1 enemy']] },
 { id:'bhengalesh', name:'Bhengalesh the Tiger',   icon:'🐅', species:'Tiger',   maxHP:8,  cls:'Hunter', range:[11,14],
   rollTable:[['1-5',"Double Bhengalesh's next damage (no stack)"],['6-10','3 melee dmg'],['11-19','5 melee dmg'],['20','8 melee dmg; roll again']] },
 { id:'chichwa',    name:'Chichwa the Gorilla',    icon:'🦍', species:'Gorilla', maxHP:7,  cls:'Hunter', range:[15,17],
   rollTable:[['1-5','Heal Chichwa 2 HP; play another card'],['6-10','3 melee dmg'],['11-19','3 melee to all enemies'],['20','6 melee dmg; play another card']] },
 { id:'moonui',     name:"Mo'o Nui the Turtle",    icon:'🐢', species:'Turtle',  maxHP:6,  cls:'Hunter', range:[18,20],
   rollTable:[['1-5','Shell: pet damage capped at 1 per source this turn'],['6-10','3 melee dmg'],['11-19','Prevent attack dmg to you; reflect it back'],['20','3 melee dmg; next ability auto-crits']] },
];
const CLASS_PETS = {
 druidTreant:       { id:'druidTreant',        name:'Treant',          icon:'🌳', species:'Treant',    maxHP:4, cls:'Druid',
   fixedAction:'Start of each turn: 2 melee damage to a random enemy. Taunts attacks.' },
 mageWaterElemental:{ id:'mageWaterElemental', name:'Water Elemental', icon:'💧', species:'Elemental', maxHP:6, cls:'Mage',
   fixedAction:'Start of each turn: 2 ice magic damage to ALL enemies. Taunts attacks.' },
 priestShadowFiend: { id:'priestShadowFiend',  name:'Shadow Fiend',    icon:'🌑', species:'Spirit',    maxHP:6, cls:'Priest', noTaunt:true,
   fixedAction:'Starts with 1 shadow counter (max 5). Gains a counter each time you deal shadow magic damage. Start of each turn: deals counter-value shadow magic to a random enemy. Does not taunt attacks.' },
 warlockImp:         { id:'warlockImp',         name:'Imp',             icon:'🔴', species:'Demon',     maxHP:2,  cls:'Warlock', canToggleRedirect:true,
   passiveBuffs:{maxHP:3},
   fixedAction:'Grants +3 max HP while alive. Start of each turn: roll. On >5 deal 1 fire magic to a random enemy. You may redirect incoming damage to the Imp (toggle).' },
 warlockFelHunter:   { id:'warlockFelHunter',   name:'Fel Hunter',      icon:'🔵', species:'Demon',     maxHP:3,  cls:'Warlock', canToggleRedirect:true,
   fixedAction:'Start of each turn: roll. On >7 you deal +2 shadow magic damage this turn. You may redirect incoming damage to the Fel Hunter (toggle).' },
 warlockFelGuard:    { id:'warlockFelGuard',    name:'Fel Guard',       icon:'🟢', species:'Demon',     maxHP:6,  cls:'Warlock', canToggleRedirect:true, dmgReduction:2,
   fixedAction:'Takes -2 damage from all sources. Start of each turn: roll. On >7 Fel Guard heals 2 HP. You may redirect incoming damage to the Fel Guard (toggle).' },
 warlockVoidWalker:  { id:'warlockVoidWalker',  name:'Void Walker',     icon:'🟣', species:'Demon',     maxHP:4,  cls:'Warlock', canToggleRedirect:true, canSacrifice:true,
   passiveBuffs:{extraDraw:1, rollBonus:1},
   fixedAction:'Grants +1 card draw and +1 to rolls while alive. Start of each turn: roll. On >10 gain +3 to rolls this turn. Sacrifice: heal you for 2× its current HP. You may redirect incoming damage to the Void Walker (toggle).' },
 warlockInfernal:    { id:'warlockInfernal',    name:'Infernal',        icon:'🔥', species:'Demon',     maxHP:15, cls:'Warlock', canToggleRedirect:true,
   fixedAction:'Start of each turn: 1 fire magic to you AND all enemies, then roll. On >8 deal 5 fire magic to all enemies. After 3 turns it breaks control and leaves (a hostile Infernal remains).' },
 shamanHealingSpring:{ id:'shamanHealingSpring',name:'Healing Spring Totem', icon:'💧', species:'Totem', maxHP:1,  cls:'Shaman', canToggleRedirect:true, defaultRedirect:false, stackable:true,
   fixedAction:'Start of each turn: heal you for 1 HP. Taunt toggle (default off).' },
 shamanManaSpring:   { id:'shamanManaSpring',   name:'Mana Spring Totem',    icon:'💠', species:'Totem', maxHP:1,  cls:'Shaman', canToggleRedirect:true, defaultRedirect:false, stackable:true,
   passiveBuffs:{extraDraw:1},
   fixedAction:'Passive: +1 card draw while alive. Taunt toggle (default off).' },
 shamanSearing:      { id:'shamanSearing',      name:'Searing Totem',        icon:'🔥', species:'Totem', maxHP:1,  cls:'Shaman', canToggleRedirect:true, defaultRedirect:false, stackable:true,
   fixedAction:'Start of each turn: deal 1 fire magic to a random enemy. Taunt toggle (default off).' },
 shamanFireNova:     { id:'shamanFireNova',     name:'Fire Nova Totem',      icon:'💥', species:'Totem', maxHP:1,  cls:'Shaman', canToggleRedirect:true, defaultRedirect:false, stackable:true,
   fixedAction:'At end of your turn: self-destruct and deal 3 fire magic to every enemy. Taunt toggle (default off).' },
 shamanStoneSkin:    { id:'shamanStoneSkin',    name:'Stone Skin Totem',     icon:'🪨', species:'Totem', maxHP:4,  cls:'Shaman', stackable:true, dmgReduction:1,
   fixedAction:'Always taunts attacks. Takes -1 damage from all sources (minimum 1).' },
 shamanGraceOfAir:   { id:'shamanGraceOfAir',   name:'Grace of Air Totem',   icon:'💨', species:'Totem', maxHP:1,  cls:'Shaman', canToggleRedirect:true, defaultRedirect:false, stackable:true,
   passiveBuffs:{rollBonus:2},
   fixedAction:'Passive: +2 to all rolls while alive. Taunt toggle (default off).' },
 shamanCloudBurst:   { id:'shamanCloudBurst',   name:'Cloud Burst Totem',    icon:'☁️', species:'Totem', maxHP:1,  cls:'Shaman', canToggleRedirect:true, defaultRedirect:false, stackable:true, canSacrifice:true,
   fixedAction:'Each time you heal, gain a counter. On death or sacrifice: heal you for 1 HP per counter. Sacrifice available on your turn. Taunt toggle (default off).' },
};
function getPetDef(petId){ return HUNTER_PETS.find(p=>p.id===petId)||CLASS_PETS[petId]||null; }
function summonPetById(petId,opts={}){ const def=getPetDef(petId); if(!def)return; if(!opts.append){ const replaced=(C._pets||[]).filter(p=>p.hp>0).map(p=>p.name); if(replaced.length) log(`💨 ${replaced.join(' & ')} replaced by ${def.name}.`,'log-system'); } summonPet(def,opts); }
function pickHunterPetByRoll(roll){
 const clamped=Math.max(1,Math.min(20,roll));
 return HUNTER_PETS.find(p=>clamped>=p.range[0]&&clamped<=p.range[1])||HUNTER_PETS[0];
}
function firstLivingPet(){ return (C._pets||[]).find(p=>p.hp>0)||null; }
function hasLivingPet(){ return (C._pets||[]).some(p=>p.hp>0); }
function _petTaunts(p){
 if(!p||p.hp<=0) return false;
 const def=getPetDef(p.id)||{};
 if(def.noTaunt) return false;
 if(def.canToggleRedirect) return p._redirectActive!==false;
 return true;
}
function firstTauntingPet(){ return (C._pets||[]).find(_petTaunts)||null; }
function hasTauntingPet(){ return (C._pets||[]).some(_petTaunts); }
function _makePetInstance(petDef){
 const inst={id:petDef.id,name:petDef.name,icon:petDef.icon,species:petDef.species,hp:petDef.maxHP,maxHP:petDef.maxHP,cls:petDef.cls};
 if(petDef.id==='priestShadowFiend') inst.counters=1;
 if(petDef.canToggleRedirect) inst._redirectActive=petDef.defaultRedirect!==false;
 inst._turnCount=0;
 inst._buffsApplied=null;
 return inst;
}
function _applyPetPassive(pet){
 const def=getPetDef(pet.id); if(!def||!def.passiveBuffs) return;
 const applied={};
 if(def.passiveBuffs.maxHP){ G.char.maxHP+=def.passiveBuffs.maxHP; G.char.hp=Math.min(G.char.maxHP,G.char.hp+def.passiveBuffs.maxHP); applied.maxHP=def.passiveBuffs.maxHP; }
 if(def.passiveBuffs.rollBonus){ G.char.rollBonus=(G.char.rollBonus||0)+def.passiveBuffs.rollBonus; applied.rollBonus=def.passiveBuffs.rollBonus; }
 if(def.passiveBuffs.extraDraw){ G.char.extraDraw=(G.char.extraDraw||0)+def.passiveBuffs.extraDraw; applied.extraDraw=def.passiveBuffs.extraDraw; }
 pet._buffsApplied=applied;
 const parts=Object.entries(applied).map(([k,v])=>`+${v} ${k}`).join(', ');
 if(parts) log(`${pet.icon} ${pet.name} grants: ${parts}.`,'log-info');
}
function _removePetPassive(pet){
 if(!pet||!pet._buffsApplied) return;
 const a=pet._buffsApplied;
 if(a.maxHP){ G.char.maxHP=Math.max(1,G.char.maxHP-a.maxHP); G.char.hp=Math.min(G.char.hp,G.char.maxHP); }
 if(a.rollBonus) G.char.rollBonus=Math.max(0,(G.char.rollBonus||0)-a.rollBonus);
 if(a.extraDraw) G.char.extraDraw=Math.max(0,(G.char.extraDraw||0)-a.extraDraw);
 pet._buffsApplied=null;
}
function summonPet(petDef,opts={}){
 C._pets=C._pets||[];
 if(!opts.append){
 // Non-stackable summon: revert existing pets' passives, then clear
 (C._pets||[]).forEach(p=>_removePetPassive(p));
 C._pets=[];
 C._tigerDoubleNext=false; C._petShellActive=false; C._petReflectActive=false;
 }
 const inst=_makePetInstance(petDef);
 C._pets.push(inst);
 _applyPetPassive(inst);
 // legacy mirror (used by Kill Command + a few checks)
 G.char._petActive=petDef.species;
 G.char._petBonus=petDef.name;
}
function dealPetDamage(amount,source,petRef){
 C._pets=C._pets||[];
 const pet=petRef||firstLivingPet();
 if(!pet) return;
 const def=getPetDef(pet.id)||{};
 // Mo'o Nui 1-5 shell: clamp incoming damage to 1 per source this turn
 if(C._petShellActive&&pet.id==='moonui') amount=Math.min(amount,1);
 // Fel Guard / generic pet damage reduction
 if(def.dmgReduction) amount=Math.max(0,amount-def.dmgReduction);
 if(amount<=0){ log(`💢 ${pet.name} absorbs the hit from ${source}!`,'log-info'); renderCombat(); return; }
 pet.hp=Math.max(0,pet.hp-amount);
 log(`💢 ${pet.name} takes ${amount} from ${source}! (${pet.hp}/${pet.maxHP} HP)`,'log-dmg');
 if(pet.hp<=0){
 log(`💀 ${pet.name} has fallen!`,'log-critmiss');
 // Cloud Burst Totem: heal on death by counter value
 if(pet.id==='shamanCloudBurst'&&(pet.counters||0)>0){
 const _o=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+pet.counters);
 log(`☁️ Cloud Burst bursts: healed ${G.char.hp-_o} HP (${pet.counters} counters).`,'log-crit');
 }
 _removePetPassive(pet);
 C._pets=C._pets.filter(p=>p.hp>0);
 if(!hasLivingPet()){
 G.char._petActive=null; G.char._petBonus=null;
 C._tigerDoubleNext=false; C._petShellActive=false; C._petReflectActive=false;
 }
 }
 renderCombat();
}
function _petTargetRandomLiving(){
 const living=C.enemies.filter(e=>e.hp>0);
 if(!living.length)return {tgt:null,idx:-1};
 const tgt=living[Math.floor(Math.random()*living.length)];
 return {tgt,idx:C.enemies.indexOf(tgt)};
}
function _petDealDamage(tgt,idx,amt,consumeTigerDouble){
 if(!tgt||tgt.hp<=0)return 0;
 let finalAmt=amt;
 if(consumeTigerDouble&&C._tigerDoubleNext){finalAmt*=2;C._tigerDoubleNext=false;log(`🐅 Bhengalesh's ferocity doubles damage!`,'log-crit');}
 dealEnemyDamage(tgt,finalAmt,idx);
 return finalAmt;
}
function doPetTurn(){
 const pets=(C._pets||[]).filter(p=>p.hp>0);
 if(!pets.length) return;
 pets.forEach(p=>{ if(p.hp>0) doPetAction(p); });
}
function doPetAction(p){
 if(!p||p.hp<=0) return;
 p._turnCount=(p._turnCount||0)+1;
 // Warlock demons
 if(p.id==='warlockImp'){
 const r=d20();
 if(r>5){const {tgt,idx}=_petTargetRandomLiving(); if(tgt)dealEnemyDamage(tgt,1,idx); log(`🔴 Imp (${r}): 1 fire magic${tgt?' to '+tgt.name:''}.`,'log-hit');}
 else log(`🔴 Imp (${r}) fizzles.`,'log-miss');
 renderCombat(); return;
 }
 if(p.id==='warlockFelHunter'){
 const r=d20();
 if(r>7){C._felHunterShadowBuff=2; log(`🔵 Fel Hunter (${r}): +2 shadow magic damage this turn.`,'log-info');}
 else log(`🔵 Fel Hunter (${r}) finds no edge.`,'log-miss');
 renderCombat(); return;
 }
 if(p.id==='warlockFelGuard'){
 const r=d20();
 if(r>7){const heal=Math.min(p.maxHP,p.hp+2); log(`🟢 Fel Guard (${r}) heals ${heal-p.hp} HP.`,'log-hit'); p.hp=heal;}
 else log(`🟢 Fel Guard (${r}) stands watch.`,'log-info');
 renderCombat(); return;
 }
 if(p.id==='warlockVoidWalker'){
 const r=d20();
 if(r>10){C.bonusRoll=(C.bonusRoll||0)+3; C._voidWalkerRollBuff=3; log(`🟣 Void Walker (${r}): +3 rolls this turn.`,'log-info');}
 else log(`🟣 Void Walker (${r}) watches the void.`,'log-info');
 renderCombat(); return;
 }
 if(p.id==='warlockInfernal'){
 // Each turn: 1 fire to player + all enemies
 dealPlayerDamage(1,'Infernal',true);
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,1,ei);});
 log('🔥 Infernal burns all sides for 1 fire magic.','log-info');
 const r=d20();
 if(r>8){ C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,5,ei);}); log(`🔥 Infernal (${r}): 5 fire magic to ALL enemies!`,'log-crit'); }
 else log(`🔥 Infernal (${r}) seethes.`,'log-info');
 // After 3 turns: break free and leave (hostile conversion planned)
 if(p._turnCount>=3){
 log('🔥 Infernal breaks free of your binding and escapes!','log-critmiss');
 _removePetPassive(p); p.hp=0;
 C._pets=(C._pets||[]).filter(x=>x.hp>0);
 if(!hasLivingPet()){G.char._petActive=null;G.char._petBonus=null;}
 }
 renderCombat(); return;
 }
 // Shaman totems
 if(p.id==='shamanHealingSpring'){
 const _o=G.char.hp; G.char.hp=Math.min(G.char.maxHP,G.char.hp+1);
 if(G.char.hp>_o) log(`💧 Healing Spring Totem heals you for ${G.char.hp-_o} HP.`,'log-hit');
 renderCombat(); return;
 }
 if(p.id==='shamanSearing'){
 const {tgt,idx}=_petTargetRandomLiving();
 if(tgt){dealEnemyDamage(tgt,1,idx); log(`🔥 Searing Totem: 1 fire magic to ${tgt.name}.`,'log-hit');}
 renderCombat(); return;
 }
 if(p.id==='shamanStoneSkin'){
 renderCombat(); return; // passive only
 }
 if(p.id==='shamanGraceOfAir'||p.id==='shamanManaSpring'){
 renderCombat(); return; // passive only
 }
 if(p.id==='shamanFireNova'||p.id==='shamanCloudBurst'){
 renderCombat(); return; // acts at end of turn / on sacrifice
 }
 // Fixed-action pets (Druid Treant, Mage Water Elemental)
 if(p.id==='druidTreant'){
 const {tgt,idx}=_petTargetRandomLiving();
 if(tgt){dealEnemyDamage(tgt,2,idx); log(`🌳 Treant strikes ${tgt.name} for 2 nature damage.`,'log-hit');}
 else log('🌳 Treant has no targets.','log-info');
 renderCombat();
 return;
 }
 if(p.id==='priestShadowFiend'){
 const {tgt,idx}=_petTargetRandomLiving();
 const dmg=p.counters||1;
 if(tgt){dealEnemyDamage(tgt,dmg,idx); log(`🌑 Shadow Fiend: ${dmg} shadow magic to ${tgt.name} (${p.counters||0} counters).`,'log-hit');}
 else log('🌑 Shadow Fiend has no targets.','log-info');
 renderCombat();
 return;
 }
 if(p.id==='mageWaterElemental'){
 const living=C.enemies.filter(e=>e.hp>0);
 if(living.length){
 C.enemies.forEach((e,ei)=>{if(e.hp>0){dealEnemyDamage(e,2,ei); e._tookIceDamage=true;}});
 log(`💧 Water Elemental: 2 frost to all enemies.`,'log-hit');
 } else log('💧 Water Elemental has no targets.','log-info');
 renderCombat();
 return;
 }
 const roll=d20();
 log(`🎲 ${p.name} acts (rolled ${roll})…`,'log-system');
 if(p.id==='harou'){
 const {tgt,idx}=_petTargetRandomLiving();
 if(roll<=5){ if(tgt)dealEnemyDamage(tgt,1,idx); C._petPlayerDmgBuff=(C._petPlayerDmgBuff||0)+1; log(`🐺 Harou snaps: 1 melee${tgt?' to '+tgt.name:''}, +1 your damage this turn.`,'log-hit'); }
 else if(roll<=10){ if(tgt)dealEnemyDamage(tgt,2,idx); C._petPlayerDmgBuff=(C._petPlayerDmgBuff||0)+1; log(`🐺 Harou bites: 2 melee${tgt?' to '+tgt.name:''}, +1 your damage this turn.`,'log-hit'); }
 else if(roll<=19){ if(tgt)dealEnemyDamage(tgt,3,idx); C._petPlayerDmgBuff=(C._petPlayerDmgBuff||0)+1; log(`🐺 Harou tears: 3 melee${tgt?' to '+tgt.name:''}, allies +1 damage this turn.`,'log-hit'); }
 else { if(tgt)dealEnemyDamage(tgt,3,idx); C._petPlayerDmgBuff=(C._petPlayerDmgBuff||0)+2; log(`🐺 Harou (NAT 20): 3 melee${tgt?' to '+tgt.name:''}, allies +2 damage this turn!`,'log-crit'); }
 }
 else if(p.id==='kuma'){
 if(roll<=5){ const h=Math.min(p.maxHP,p.hp+3); log(`🐻 Kuma heals ${h-p.hp} HP (${h}/${p.maxHP}).`,'log-hit'); p.hp=h; }
 else if(roll<=10){ const liv=C.enemies.filter(e=>e.hp>0); const tgs=[]; for(let i=0;i<2&&liv.length;i++){const e=liv.splice(Math.floor(Math.random()*liv.length),1)[0]; dealEnemyDamage(e,2,C.enemies.indexOf(e)); tgs.push(e.name);} log(`🐻 Kuma mauls: 2 melee to ${tgs.join(' & ')||'-'}.`,'log-hit'); }
 else if(roll<=19){ const {tgt,idx}=_petTargetRandomLiving(); if(tgt)dealEnemyDamage(tgt,5,idx); log(`🐻 Kuma crushes: 5 melee${tgt?' to '+tgt.name:''}.`,'log-hit'); }
 else { C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,5,ei);}); C._petEnemiesHalfDmg=true; log(`🐻 Kuma (NAT 20): 5 melee to ALL. Enemies deal half damage this turn!`,'log-crit'); }
 }
 else if(p.id==='siku'){
 if(roll<=5){ _sikuDrawLoot(1); }
 else if(roll<=10){ const {tgt,idx}=_petTargetRandomLiving(); if(tgt)dealEnemyDamage(tgt,1,idx); _sikuDrawLoot(2); log(`🦅 Siku dives: 1 melee${tgt?' to '+tgt.name:''}.`,'log-hit'); }
 else if(roll<=19){ const {tgt,idx}=_petTargetRandomLiving(); if(tgt){dealEnemyDamage(tgt,3,idx); tgt._petBonusDmgThisTurn=(tgt._petBonusDmgThisTurn||0)+2;} log(`🦅 Siku strikes: 3 melee${tgt?' to '+tgt.name+' (+2 dmg taken this turn)':''}.`,'log-hit'); }
 else { const {tgt,idx}=_petTargetRandomLiving(); if(tgt)dealEnemyDamage(tgt,10,idx); log(`🦅 Siku SACRIFICES itself: 10 melee${tgt?' to '+tgt.name:''}!`,'log-crit'); p.hp=0; C._pets=(C._pets||[]).filter(x=>x.hp>0); if(!hasLivingPet()){G.char._petActive=null;G.char._petBonus=null;} }
 }
 else if(p.id==='bhengalesh'){
 if(roll<=5){ C._tigerDoubleNext=true; log(`🐅 Bhengalesh coils: next damage he deals is doubled (does not stack).`,'log-info'); }
 else if(roll<=10){ const {tgt,idx}=_petTargetRandomLiving(); _petDealDamage(tgt,idx,3,true); log(`🐅 Bhengalesh strikes${tgt?' '+tgt.name:''}.`,'log-hit'); }
 else if(roll<=19){ const {tgt,idx}=_petTargetRandomLiving(); _petDealDamage(tgt,idx,5,true); log(`🐅 Bhengalesh rips${tgt?' '+tgt.name:''}.`,'log-hit'); }
 else { const {tgt,idx}=_petTargetRandomLiving(); _petDealDamage(tgt,idx,8,true); log(`🐅 Bhengalesh (NAT 20): 8 melee${tgt?' to '+tgt.name:''}. Rolls again!`,'log-crit'); if(p&&p.hp>0) doPetAction(p); }
 }
 else if(p.id==='chichwa'){
 if(roll<=5){ const h=Math.min(p.maxHP,p.hp+2); log(`🦍 Chichwa heals ${h-p.hp} HP. You may play another card.`,'log-hit'); p.hp=h; C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1; }
 else if(roll<=10){ const {tgt,idx}=_petTargetRandomLiving(); if(tgt)dealEnemyDamage(tgt,3,idx); log(`🦍 Chichwa pummels${tgt?' '+tgt.name:''}: 3 melee.`,'log-hit'); }
 else if(roll<=19){ C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,3,ei);}); log(`🦍 Chichwa sweeps: 3 melee to ALL enemies.`,'log-hit'); }
 else { const {tgt,idx}=_petTargetRandomLiving(); if(tgt)dealEnemyDamage(tgt,6,idx); C.extraAllowedThisTurn=(C.extraAllowedThisTurn||0)+1; log(`🦍 Chichwa (NAT 20): 6 melee${tgt?' to '+tgt.name:''}. You may play another card.`,'log-crit'); }
 }
 else if(p.id==='moonui'){
 if(roll<=5){ C._petShellActive=true; log(`🐢 Mo'o Nui shells up: incoming damage to it is capped at 1 per source this turn.`,'log-info'); }
 else if(roll<=10){ const {tgt,idx}=_petTargetRandomLiving(); if(tgt)dealEnemyDamage(tgt,3,idx); log(`🐢 Mo'o Nui slams${tgt?' '+tgt.name:''}: 3 melee.`,'log-hit'); }
 else if(roll<=19){ C._petReflectActive=true; log(`🐢 Mo'o Nui prepares to reflect: attack damage to you is prevented and returned this turn.`,'log-info'); }
 else { const {tgt,idx}=_petTargetRandomLiving(); if(tgt)dealEnemyDamage(tgt,3,idx); C._nextCardAutoCrit=true; log(`🐢 Mo'o Nui (NAT 20): 3 melee${tgt?' to '+tgt.name:''}. Your next ability auto-crits!`,'log-crit'); }
 }
 renderCombat();
}
function togglePetRedirect(petId){
 const pet=(C._pets||[]).find(p=>p.id===petId);
 if(!pet) return;
 pet._redirectActive=!pet._redirectActive;
 log(`${pet.icon} ${pet.name} redirect: ${pet._redirectActive?'ON':'OFF'}`,'log-info');
 renderCombat();
}
function sacrificeVoidWalker(){
 const pet=(C._pets||[]).find(p=>p.id==='warlockVoidWalker'&&p.hp>0);
 if(!pet) return;
 const heal=pet.hp*2; const _old=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+heal);
 log(`🟣 Sacrificed ${pet.name}! Healed ${G.char.hp-_old} HP (${heal} potential).`,'log-crit');
 _removePetPassive(pet); pet.hp=0;
 C._pets=(C._pets||[]).filter(p=>p.hp>0);
 if(!hasLivingPet()){G.char._petActive=null;G.char._petBonus=null;}
 renderCombat(); renderHUD();
}
function sacrificeCloudBurst(){
 const pet=(C._pets||[]).find(p=>p.id==='shamanCloudBurst'&&p.hp>0);
 if(!pet) return;
 triggerCloudBurst(pet,'sacrificed');
}
function triggerCloudBurst(pet,reason){
 const count=pet.counters||0;
 if(count>0){
 const _o=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+count);
 log(`☁️ Cloud Burst Totem ${reason}: healed ${G.char.hp-_o} HP (${count} counters).`,'log-crit');
 } else log(`☁️ Cloud Burst Totem ${reason}: no counters to release.`,'log-info');
 pet.hp=0;
 C._pets=(C._pets||[]).filter(p=>p.hp>0);
 if(!hasLivingPet()){G.char._petActive=null;G.char._petBonus=null;}
 renderCombat(); renderHUD();
}
function _sikuDrawLoot(tier){
 const tier1=[{id:'antidote'},{id:'healpotion'},{id:'sharpeningstone'}];
 const tier2=[{id:'luckycharm'},{id:'smokebomb'},{id:'greaterpotion'}];
 const pool=tier===1?tier1:tier2;
 const pick=pool[Math.floor(Math.random()*pool.length)];
 const shopItem=SHOP&&SHOP.find?SHOP.find(s=>s.id===pick.id):null;
 const inventoryItem=shopItem?{id:shopItem.id,name:shopItem.name,icon:shopItem.icon,desc:shopItem.desc}:{id:pick.id,name:pick.id,icon:'📦',desc:''};
 G.char.inventory=G.char.inventory||[];
 G.char.inventory.push(inventoryItem);
 log(`🦅 Siku drops loot: ${inventoryItem.icon} ${inventoryItem.name}!`,'log-hit');
 toast(`${inventoryItem.icon} Siku fetched ${inventoryItem.name}!`,'success');
}

// ── DEAL DAMAGE ───────────────────────────────────────────────────
function dealEnemyDamage(enemy, amount, idx) {
 // Apply Prowl/Shadow Step/Stealth double damage flag
 if(C._dmgDoubleActive) amount=amount*2;
 // Devastate: target takes double melee damage this turn
 if(enemy._devastated){amount=amount*2;enemy._devastated=false;}
 if(enemy.statusEffects?.includes('shield'))amount=Math.ceil(amount/2);
 // Marked for Death: +stacks bonus damage
 const mark=(enemy.debuffs||[]).find(d=>d.id==='marked');
 if(mark&&mark.stacks>0) amount+=mark.stacks;
 // Siku pet: bonus damage this turn to marked enemy
 if((enemy._petBonusDmgThisTurn||0)>0) amount+=enemy._petBonusDmgThisTurn;
 // Sneed's damage reduction: -2 from player abilities (DoTs bypass this via direct hp manipulation)
 if(enemy.id==='sneed') amount=Math.max(1,amount-2);
 // Sneed's Shredder ongoing: takes -1 damage (DoTs bypass via direct hp manipulation)
 if(enemy.id==='sneedShredder') amount=Math.max(1,amount-1);
 const dmg=Math.max(1,amount);
 enemy.hp=Math.max(0,enemy.hp-dmg);
 G.char.runDmgDealt=(G.char.runDmgDealt||0)+dmg;
 if(dmg>(G.char.runHighestHit||0))G.char.runHighestHit=dmg;
 spawnEnemyFloat(C._dmgDoubleActive?`💥 ${dmg}`:`-${dmg}`, idx, C._dmgDoubleActive?'crit':'dmg');
 log(`💥 ${enemy.name} takes ${dmg} damage! (${enemy.hp}/${enemy.maxHP} HP)`,'log-hit');
 enemy._tookDamageThisTurn=true; // tracked for Backstab
 // Havoc: mirror damage to linked target
 if((C._havocTargetIdx||0)>=0&&C._havocTargetIdx!==idx&&!C._havocInProgress){
 const hEnemy=C.enemies[C._havocTargetIdx];
 if(hEnemy&&hEnemy.hp>0){C._havocInProgress=true;dealEnemyDamage(hEnemy,Math.max(1,Math.floor(dmg/2)),C._havocTargetIdx);C._havocInProgress=false;log(`💀 Havoc: mirrored ${Math.max(1,Math.floor(dmg/2))} to ${hEnemy.name}!`,'log-hit');}
 }
 // Enrage
 if(enemy.id==='rhahkZor'&&enemy.hp<=30&&!enemy.statusEffects?.includes('enrage')){
 enemy.statusEffects=enemy.statusEffects||[];enemy.statusEffects.push('enrage');
 log("😡 Rhahk'Zor ENRAGES! Double damage!",'log-surge');
 }
 // VanCleef phases
 if(enemy.id==='edwinVanCleef'&&enemy.hp>0){
 [90,60,30].forEach(t=>{if(enemy.hp<=t&&!(enemy._vcPhasesFired||[]).includes(t)){
 enemy._vcPhasesFired=enemy._vcPhasesFired||[];enemy._vcPhasesFired.push(t);
 spawnEnemy('shadowGuard');spawnEnemy('shadowGuard');
 log(`⚡ VanCleef summons Shadow Guards! (${enemy.hp} HP)`,'log-surge');
 }});
 }
 // Equipment: Poisoned Kris — melee attacks apply poison
 if(G.char._eqPoisonOnMelee && amount > 0 && enemy.hp > 0){
 enemy.debuffs=enemy.debuffs||[];
 const px=enemy.debuffs.find(d=>d.id==='poison');
 if(px) px.stacks++; else enemy.debuffs.push({id:'poison',stacks:1});
 }
 if(enemy.hp<=0){
 G.char.runKills=(G.char.runKills||0)+1;
 log(`☠️ ${enemy.name} defeated!`,'log-crit');
 // Soul Harvest: gain a charge per kill
 if(C._soulHarvestActive){C._soulHarvestCharges=(C._soulHarvestCharges||0)+1;G.char.dmgBonus=(G.char.dmgBonus||0)+1;log(`💀 Soul Harvest: ${enemy.name} dies — +1 charge! (${C._soulHarvestCharges} total, +${C._soulHarvestCharges} dmg)`,'log-info');}
 // Award XP and LP per kill
 const killXP = ENEMIES[enemy.id]?.xp || 15;
 const killGold = ENEMIES[enemy.id]?.gold || 5;
 const killLP = Math.ceil(killXP/10);
 G.char.xp = (G.char.xp||0) + killXP;
 G.char.gold = (G.char.gold||0) + killGold;
 G.char.runGold = (G.char.runGold||0) + killGold;
 const co = loadCarryover();
 co.legacyPoints = (co.legacyPoints||0) + killLP;
 co.lifetimeLP = (co.lifetimeLP||0) + killLP;
 saveCarryover(co);
 G.char.runLP = (G.char.runLP||0) + killLP;
 log(`+${killXP} XP · +${killGold}g · +${killLP} LP`,'log-info');
 // Notify if ready to level up
 const xpNeeded=xpToNextLevel(G.char.level);
 if(xpNeeded!==null&&G.char.xp>=xpNeeded){
 log(`⬆️ READY TO LEVEL UP! (Lv${G.char.level} → Lv${G.char.level+1})`, 'log-crit');
 }
 renderHUD();
 if(enemy.id==='sneedShredder'&&!enemy._sneedSpawned){
 enemy._sneedSpawned=true;spawnEnemy('sneed');
 log('🔧 Sneed crawls out of the wreckage!','log-surge');
 }
 }
}

function dealPlayerDamage(amount, source, isAbilityDmg=false, sourceEnemy=null, bypassMitigation=false) {
 if(amount<=0)return;
 // Pet: enemies deal half damage this turn (Kuma NAT 20)
 if(!bypassMitigation&&!isAbilityDmg&&C._petEnemiesHalfDmg) amount=Math.ceil(amount/2);
 // Stone Skin Totem: -1 damage to you (min 1) while alive
 if(!bypassMitigation&&amount>0&&(C._pets||[]).some(p=>p.id==='shamanStoneSkin'&&p.hp>0)) amount=Math.max(1,amount-1);
 // Pet: Mo'o Nui reflect — prevent attack damage to player, reflect back to attacker
 if(!bypassMitigation&&!isAbilityDmg&&C._petReflectActive){
 if(sourceEnemy&&sourceEnemy.hp>0){
 dealEnemyDamage(sourceEnemy,amount,C.enemies.indexOf(sourceEnemy));
 log(`🐢 Mo'o Nui reflects ${amount} back to ${sourceEnemy.name}!`,'log-hit');
 } else {
 log(`🐢 Mo'o Nui absorbs ${amount} (no attacker to reflect).`,'log-info');
 }
 return;
 }
 // Pet: taunt — attack damage is redirected to the first living *taunting* pet
 if(!bypassMitigation&&!isAbilityDmg&&hasTauntingPet()){
 dealPetDamage(amount,source,firstTauntingPet());
 return;
 }
 // Temporal Abstraction: buffer damage until next turn (not for critmiss self-damage)
 if(!bypassMitigation&&C._temporalAbstractionActive){C._temporalDmgBuffer=(C._temporalDmgBuffer||0)+amount;log(`⏳ Temporal Abstraction: ${amount} damage from ${source} delayed!`,'log-info');return;}
 // Iron Hide: each physical attack, roll >8 → -1 damage (bear form auto-success)
 if(!bypassMitigation&&!isAbilityDmg&&C._ironHideActive){const irRoll=(G.char.currentForm==='bear'||G.char.currentForm==='both')?20:d20();if(irRoll>8){amount=Math.max(0,amount-1);if(amount>0)log(`🐻 Iron Hide: rolled ${irRoll} — -1 damage!`,'log-info');else{log(`🐻 Iron Hide: rolled ${irRoll} — attack negated!`,'log-info');return;}}}
 // Frost Trap: absorb the triggering attack and prevent further attacks
 if(!bypassMitigation&&!isAbilityDmg&&C._frostTrapActive){C._frostTrapActive=false;C.preventAttackDamageThisTurn=true;log('🪤 Frost Trap springs! This attack negated + no more attack damage this turn!','log-hit');if(C._frostTrapPersists){C.preventAttackDamageThisTurn=true;C._frostTrapPersists=false;}return;}
 // Explosive Trap: fire 5 (or 10) fire to all enemies, but attack still lands
 if(!bypassMitigation&&!isAbilityDmg&&C._explosiveTrapActive){C._explosiveTrapActive=false;const etDmg=C._explosiveTrapDoubleDmg?10:5;C._explosiveTrapDoubleDmg=false;C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,etDmg,ei);});log(`💥 Explosive Trap springs! ${etDmg} fire to ALL enemies!`,'log-hit');}
 // Inner Fire: spend charge to block all incoming attacks (not critmiss)
 if(!bypassMitigation&&!isAbilityDmg&&(C._innerFireCharges||0)>0){C._innerFireCharges--;log(`✨ Inner Fire: blocked ${source}'s attack! (${C._innerFireCharges} charges left)`,'log-info');return;}
 // Rogue Evasion: chance to dodge incoming physical attacks (not critmiss)
 if(!bypassMitigation&&!isAbilityDmg && (G.char._evasionChance||0)>0){
 const evRoll=Math.random()*100;
 if(evRoll<G.char._evasionChance){
 log(`💨 Evaded ${source}'s attack! (${Math.round(evRoll)}% < ${G.char._evasionChance}% evasion)`,'log-info');
 return;
 }
 }
 // Divine Shield / Shield Wall counters (not critmiss)
 if(!bypassMitigation&&!isAbilityDmg&&(C._shieldWallCounters||0)>0){
 C._shieldWallCounters--;
 log(`🛡️ Shield Wall blocks ${source}'s attack! (${C._shieldWallCounters} counters left)`,'log-info');
 return;
 }
 // Earth Shield: heal on taking damage (applies even to critmiss)
 if((C._earthShieldCharges||0)>0&&amount>0){
 C._earthShieldCharges--;
 const _esOld=G.char.hp; G.char.hp=Math.min(G.char.maxHP,G.char.hp+3);
 log(`⚡ Earth Shield heals ${G.char.hp-_esOld} HP! (${C._earthShieldCharges} charges left)`,'log-info');
 }
 // Fire Shield: retaliate
 if(!bypassMitigation&&!isAbilityDmg&&(C._fireShieldActive||0)>0&&amount>0&&sourceEnemy){
 C._fireShieldActive--;
 dealEnemyDamage(sourceEnemy,3,C.enemies.indexOf(sourceEnemy));
 log(`🔥 Fire Shield retaliates for 3 fire damage! (${C._fireShieldActive} charges left)`,'log-hit');
 }
 // Aspect of the Monkey: roll to halve damage (not critmiss)
 if(!bypassMitigation&&!isAbilityDmg&&G.char._aspectMonkey&&amount>0){
 const monkRoll=d20();
 if(monkRoll>=11){amount=Math.ceil(amount/2);log(`🐒 Aspect of the Monkey: rolled ${monkRoll} — half damage!`,'log-info');}
 }
 if(!bypassMitigation&&!isAbilityDmg&&C._aspectCheetahActive&&amount>0){amount+=1;}
 if(!bypassMitigation&&(G.char.currentForm==='bear'||G.char.currentForm==='both'))amount=Math.ceil(amount/2);
 if(!bypassMitigation&&C._camouflageHalfDmg)amount=Math.ceil(amount/2);
 if(!bypassMitigation&&!isAbilityDmg && C._provokeDmgReduction) amount=Math.ceil(amount/2);
 if(!bypassMitigation&&!isAbilityDmg&&(G.char._iceArmorCharges||0)>0){
 amount=Math.ceil(amount/2);G.char._iceArmorCharges--;
 log(`🛡️ Ice Armor! Damage halved. (${G.char._iceArmorCharges} left)`,'log-info');
 if(G.char._iceArmorCharges<=0)log('🛡️ Ice Armor fades.','log-system');
 }
 if(!bypassMitigation&&isAbilityDmg&&(G.char._mageArmorCharges||0)>0){
 amount=Math.ceil(amount/2);G.char._mageArmorCharges--;
 log(`✨ Mage Armor! Ability damage halved. (${G.char._mageArmorCharges} left)`,'log-info');
 if(G.char._mageArmorCharges<=0)log('✨ Mage Armor fades.','log-system');
 }
 const _armorReduction=(bypassMitigation||isAbilityDmg)?0:Math.max(0,(G.char._eqArmor||0)+(C._angerMgmtArmor||0)-(C._shredderArmorDebuff||0));
 const dmg=bypassMitigation?Math.max(1,amount):Math.max(1,amount-(G.char.dmgReduction||0)-_armorReduction);
 // Indomitable: HP can't drop below floor
 if(C._indomitableActive){G.char.hp=Math.max(C._indomitableMinHP||1,G.char.hp-dmg);spawnPlayerFloat(`-${dmg}`,'dmg');log(`💪 Indomitable: ${dmg} damage — HP floored at ${C._indomitableMinHP||1}! (${G.char.hp}/${G.char.maxHP})`, 'log-info');C._lastTurnDamageTaken=(C._lastTurnDamageTaken||0)+dmg;G.char.runDmgTaken=(G.char.runDmgTaken||0)+dmg;renderHUD();return;}
 // Die By the Sword: can't be killed by damage less than current HP
 if(C._dieBySwordActive&&dmg<G.char.hp){G.char.hp=Math.max(1,G.char.hp-dmg);spawnPlayerFloat(`-${dmg}`,'dmg');log(`⚔️ Die By the Sword: ${dmg} damage absorbed — can't be killed! (${G.char.hp}/${G.char.maxHP})`,'log-info');C._lastTurnDamageTaken=(C._lastTurnDamageTaken||0)+dmg;G.char.runDmgTaken=(G.char.runDmgTaken||0)+dmg;renderHUD();return;}
 C._lastTurnDamageTaken=(C._lastTurnDamageTaken||0)+dmg;
 G.char.runDmgTaken=(G.char.runDmgTaken||0)+dmg;
 const _preDmgHp = G.char.hp;
 G.char.hp=Math.max(0,G.char.hp-dmg);
 spawnPlayerFloat(`-${dmg}`, isAbilityDmg?'ability':'dmg');
 // Rebirth: cheat death — survive fatal hit
 if(G.char.hp<=0 && C._rebirthActive){
 C._rebirthActive=false;
 const rebornHp = C._rebirthFullHeal ? G.char.maxHP : Math.ceil(G.char.maxHP/2);
 C._rebirthFullHeal=false;
 G.char.hp=rebornHp;
 log(`🌿 REBIRTH! Fatal blow survived — returned to ${rebornHp}/${G.char.maxHP} HP!`,'log-crit');
 renderHUD();
 }
 // Soul Stone: cheat death (Warlock)
 if(G.char.hp<=0 && C._soulStoneActive){
 C._soulStoneActive=false;
 G.char.hp=Math.ceil(G.char.maxHP/2);
 log(`💀 SOUL STONE! Death averted — returned to ${G.char.hp}/${G.char.maxHP} HP!`,'log-crit');
 renderHUD();
 }
 // Nature's Guardian: heal 20% max HP when dropping below 50% (Shaman, once)
 if(C._naturesGuardianArmed&&!C._naturesGuardianFired&&G.char.hp>0&&G.char.hp<=Math.ceil(G.char.maxHP/2)){
 C._naturesGuardianFired=true;
 const ngHeal=Math.ceil(G.char.maxHP*0.2); const _ngOld=G.char.hp;
 G.char.hp=Math.min(G.char.maxHP,G.char.hp+ngHeal);
 log(`🌿 Nature's Guardian triggers! Healed ${G.char.hp-_ngOld} HP!`,'log-crit');
 renderHUD();
 }
 if(!isAbilityDmg&&C.thornsActive){
 const rTgt=sourceEnemy||C.enemies[C.thornsActive.targetIdx];
 const rIdx=rTgt?C.enemies.indexOf(rTgt):-1;
 if(rTgt&&rTgt.hp>0&&rIdx!==-1){dealEnemyDamage(rTgt,dmg,rIdx);log(`🌿 Thorns reflects ${dmg} to ${rTgt.name}!`,'log-hit');}
 }
 if(!isAbilityDmg&&G.char._moltenArmorActive&&(G.char._moltenArmorCharges||0)>0){
 G.char._moltenArmorCharges--;
 const rt=sourceEnemy||C.enemies.find(e=>e.hp>0);
 if(rt){dealEnemyDamage(rt,1,C.enemies.indexOf(rt));log('🌋 Molten Armor retaliates!','log-hit');}
 if(G.char._moltenArmorCharges<=0){G.char._moltenArmorActive=false;G.char._moltenArmorFireBonus=0;log('🌋 Molten Armor fades.','log-system');}
 }
 // Warrior: gain 1 Rage when taking damage (capped at 3)
 if(G.char.className==='Warrior'&&dmg>0&&G.char.hp>0){G.char._rageCounters=Math.min(3,(G.char._rageCounters||0)+1);log(`💢 Rage! Gained 1 Rage from damage (${G.char._rageCounters}/3)`,'log-info');}
 // Stealth is NOT broken by taking damage — only by attacking
 log(`💔 You take ${dmg} from ${source}! (${G.char.hp}/${G.char.maxHP} HP)`,'log-dmg');
 renderHUD();
 if(G.char.hp<=0){G.char.killedBy=source;setTimeout(onPlayerDeath,500);}
}

function spawnEnemy(enemyId) {
 const def=ENEMIES[enemyId];if(!def)return;
 C.enemies.push({...def,hp:def.maxHP,turnCount:0,debuffs:[],statusEffects:[],phaseTriggered:false});
 log(`💀 ${def.name} enters the fight!`,'log-surge');
 renderCombat();
}

// ── ENEMY TURN ────────────────────────────────────────────────────
function doEnemyTurn() {
 G.char.runTurns=(G.char.runTurns||0)+1;
 C.turn++;
 log(`--- Round ${C.turn} ---`,'log-system');
 C._lastTurnDamageTaken=0;
 C._provokeDmgReduction=false;
 C._dealtFireLastTurn=C._dealtFireThisTurn||false;
 C._dealtFireThisTurn=false;
 C._indomitableActive=false;
 C._sweepingStrikesActive=false;
 C._beastialWrathActive=false;
 C._eruptionHitThisTurn=false;
 C._camouflageHalfDmg=false;
 // Fire Nova Totem: at end of player turn, self-destruct and AoE fire
 (C._pets||[]).filter(p=>p.id==='shamanFireNova'&&p.hp>0).forEach(p=>{
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,3,ei);});
 log('💥 Fire Nova Totem detonates: 3 fire magic to all enemies.','log-crit');
 _removePetPassive(p); p.hp=0;
 });
 C._pets=(C._pets||[]).filter(p=>p.hp>0);
 if(!hasLivingPet()){G.char._petActive=null;G.char._petBonus=null;}
 // Pet per-turn buffs fall off at end of player turn
 C._petPlayerDmgBuff=0;
 C._petEnemiesHalfDmg=false;
 C._petShellActive=false;
 C._petReflectActive=false;
 C._felHunterShadowBuff=0;
 C._voidWalkerRollBuff=0;
 C.enemies.forEach(e=>{e._petBonusDmgThisTurn=0;});
 // Hot Streak auto-counter
 if(C._hotStreakActive&&C._dealtFireLastTurn){
 C._hotStreakCounters=Math.min(3,(C._hotStreakCounters||0)+1);
 log(`🔥 Hot Streak counter! (${C._hotStreakCounters}/3)`,'log-info');
 }
 // Enemy per-turn reset
 C.enemies.forEach(e=>{
 e._noTakeDamageThisTurn=false;
 e._tookDamageThisTurn=false; // reset for Backstab
 e._tookIceDamage=false;
 e._devastated=false;
 // NOTE: _noAttackThisTurn is NOT reset here — it's consumed in the attack step
 // NOTE: _stunnedTurns is consumed/decremented in the attack step
 // Clear Marked for Death (lasts one player turn)
 e.debuffs=(e.debuffs||[]).filter(d=>d.id!=='marked');
 });
 // living is computed AFTER DoT ticks so dead enemies don't attack
 // (defined below after poison/hemorrhage)

 // Ignite damage (use current alive list at this point)
 const livingForIgnite=C.enemies.filter(e=>e.hp>0);
 if(G.char.className==='Mage'&&livingForIgnite.length>0){
 livingForIgnite.forEach(e=>{
 const ig=(e.debuffs||[]).find(d=>d.id==='ignite');
 if(ig&&ig.stacks>0){
 e.hp=Math.max(0,e.hp-(ig.stacks+(G.char._igniteBonus||0)));
 log(`🔥 Ignite burns ${e.name} for ${ig.stacks}!`,'log-hit');
 ig.stacks=Math.max(0,ig.stacks-1);
 }
 });
 }

 // Time Bomb detonation — player can use a card to detonate (we auto-detonate if counters reach 0)
 C.enemies.forEach((e,ei)=>{
 if(e.hp>0&&(e._timeBombs||0)>0){
 e._timeBombs--;
 if(e._timeBombs<=0){
 const tbDmg=8+(G.char.dmgBonus||0);
 dealEnemyDamage(e,tbDmg,ei);
 log(`💥 TIME BOMB detonates on ${e.name} for ${tbDmg} damage!`,'log-crit');
 e._timeBombs=0;
 }
 }
 });

 // Shield wall: blocks attack damage
 // (handled in dealPlayerDamage below via _shieldWallCounters)

 // Treant allies attack each round
 if((C._treants||0)>0){
 const living_enemies=C.enemies.filter(e=>e.hp>0);
 if(living_enemies.length>0){
 const treantTarget=living_enemies[0]; // attack lowest-index living enemy
 const treantDmg=3*C._treants;
 const tIdx=C.enemies.indexOf(treantTarget);
 dealEnemyDamage(treantTarget,treantDmg,tIdx);
 log(`🌳 ${C._treants} Treant${C._treants>1?'s':''} attack ${treantTarget.name} for ${treantDmg} nature damage!`,'log-hit');
 }
 }

 // Water Elemental now handled via C._pets (see doPetTurn)

 // Meteor crit: repeat effect at end of next turn
 if(C._meteorRepeat){
 C._meteorRepeat=false;
 const mtTarget=C.enemies.find(e=>e.hp>0);
 if(mtTarget){const mtIdx=C.enemies.indexOf(mtTarget);dealEnemyDamage(mtTarget,7,mtIdx);C.enemies.forEach((e,ei)=>{if(e.hp>0){e.debuffs=e.debuffs||[];const ig=e.debuffs.find(d=>d.id==='ignite');if(ig)ig.stacks+=2;else e.debuffs.push({id:'ignite',stacks:2});}});log(`☄️ Meteor echo: 7 fire + 2 ignite to all!`,'log-crit');}
 }

 // Blade Storm AoE ticks
 if((C._bladeStormTurns||0)>0){
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,3,ei);});
 log(`⚔️ Blade Storm: 3 melee to ALL enemies! (${C._bladeStormTurns} turns left)`,'log-hit');
 C._bladeStormTurns--;
 if(C._bladeStormTurns===0)log('⚔️ Blade Storm fades.','log-system');
 }
 // Summon: Infernal attacks
 if((C._infernoTurns||0)>0){
 const infT=C.enemies.find(e=>e.hp>0);
 if(infT){dealEnemyDamage(infT,5,C.enemies.indexOf(infT));log(`🔥 Infernal: 5 fire damage to ${infT.name}!`,'log-hit');}
 C._infernoTurns--;
 if(C._infernoTurns===0)log('🔥 Infernal dissipates.','log-system');
 }
 // Ancestral Spirit attacks
 if((C._ancestralSpiritTurns||0)>0){
 const asT=C.enemies.find(e=>e.hp>0);
 if(asT){dealEnemyDamage(asT,2,C.enemies.indexOf(asT));log(`👻 Ancestral Spirit: 2 nature damage to ${asT.name}!`,'log-hit');}
 C._ancestralSpiritTurns--;
 if(C._ancestralSpiritTurns===0)log('👻 Ancestral Spirit fades.','log-system');
 }
 // Soul Siphon drain
 if((C._soulSiphonTargetIdx||0)>=0&&C._soulSiphonTargetIdx!==-1){
 const ssE=C.enemies[C._soulSiphonTargetIdx];
 if(ssE&&ssE.hp>0){dealEnemyDamage(ssE,1,C._soulSiphonTargetIdx);const _ssOld=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+1);log(`💀 Soul Siphon: drained 1 HP from ${ssE.name}!`,'log-hit');renderHUD();if(ssE.hp<=0)C._soulSiphonTargetIdx=-1;}
 else C._soulSiphonTargetIdx=-1;
 }
 // Fel Armor HP regen
 if(C._felArmorActive){const _faOld=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+1);if(G.char.hp>_faOld)log('🟢 Fel Armor: +1 HP regenerated!','log-info');renderHUD();}
 // Reign Of Fire tick
 if(C._reignOfFireActive){
 C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,3,ei);});
 log('🔥 Reign Of Fire: 3 fire to ALL enemies!','log-hit');
 const rofR=d20();
 if(rofR<10){C._reignOfFireActive=false;log(`🔥 Reign Of Fire ends (rolled ${rofR}, need 10+).`,'log-system');}
 }
 // Lightwell healing
 if(C._lightwellActive){const lwR=d20();if(lwR>=13){const _lwOld=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+2);log(`✨ Lightwell: rolled ${lwR} — healed ${G.char.hp-_lwOld} HP!`,'log-hit');renderHUD();}}
 // Mana Spring / Grace of Air now handled as pets (see CLASS_PETS)
 // Temporal Abstraction: deal buffered damage at end of turn
 if((C._temporalDmgBuffer||0)>0){const td=C._temporalDmgBuffer;C._temporalDmgBuffer=0;C._temporalAbstractionActive=false;dealPlayerDamage(td,'Temporal Abstraction (delayed)',true);log(`⏳ Temporal Abstraction: ${td} delayed damage resolved!`,'log-hit');}
 else C._temporalAbstractionActive=false;
 // Unstable Power self-damage
 if(C._unstablePowerActive){const upR=d20();const upDmg=Math.max(1,Math.ceil(upR/5));dealPlayerDamage(upDmg,'Unstable Power',true);log(`💀 Unstable Power: rolled ${upR} — ${upDmg} self-damage!`,'log-hit');}
 // Consecration: 1 holy damage to all enemies each round
 if(C._consecrationActive){C.enemies.forEach((e,ei)=>{if(e.hp>0)dealEnemyDamage(e,1,ei);});log('✨ Consecration: 1 holy damage to all enemies!','log-hit');}
 // Shadow Fiend now handled via C._pets (see doPetTurn)
 // Siphon Life: repeat on roll 8+
 if(C._siphonLifeActive){const slR=d20();if(slR>=8){const slLiving=C.enemies.filter(e=>e.hp>0);slLiving.forEach(e=>{dealEnemyDamage(e,1,C.enemies.indexOf(e));});log(`💀 Siphon Life: rolled ${slR} — 1 shadow to all enemies!`,'log-hit');}else{C._siphonLifeActive=false;log(`💀 Siphon Life fades (rolled ${slR}, need 8+).`,'log-system');}}
 // Unstable Affliction: 5 shadow/turn, jumps on roll 7 or less
 if(C._unstableAfflictionTargetIdx>=0){const uaE=C.enemies[C._unstableAfflictionTargetIdx];if(uaE&&uaE.hp>0){dealEnemyDamage(uaE,5,C._unstableAfflictionTargetIdx);log(`💀 Unstable Affliction: 5 shadow to ${uaE.name}!`,'log-hit');const uaR=d20();if(uaR<=7){const uaNew=C.enemies.filter((e,i)=>e.hp>0&&i!==C._unstableAfflictionTargetIdx);if(uaNew.length>0){const uaNT=uaNew[Math.floor(Math.random()*uaNew.length)];C._unstableAfflictionTargetIdx=C.enemies.indexOf(uaNT);log(`💀 Unstable Affliction jumps to ${uaNT.name}! (rolled ${uaR})`,'log-system');}else{C._unstableAfflictionTargetIdx=-1;log('💀 Unstable Affliction: no new target.','log-system');}}}else C._unstableAfflictionTargetIdx=-1;}
 // Gravity Beam: auto-fires and grows each turn
 if((C._gravityBeamCounters||0)>0){const gbAutoT=C.enemies.find(e=>e.hp>0);if(gbAutoT){const gbAutoDmg=1+C._gravityBeamCounters;dealEnemyDamage(gbAutoT,gbAutoDmg,C.enemies.indexOf(gbAutoT));log(`⏳ Gravity Beam: ${gbAutoDmg} arcane! (${C._gravityBeamCounters} counters → ${C._gravityBeamCounters+1})`,'log-hit');}C._gravityBeamCounters=Math.min(C._gravityBeamCounters+1,12);}
 // Ritual of Doom: clear at end of turn
 if(C._ritualOfDoomActive)C._ritualOfDoomActive=false;

 // Starfall ticks
 if((G.char._starfallCounters||0)>0){
 C.enemies.forEach((e,ei)=>{ if(e.hp>0){ dealEnemyDamage(e,4,ei); log(`⭐ Starfall: 4 arcane damage to ${e.name}!`,'log-hit'); }});
 G.char._starfallCounters--;
 if(G.char._starfallCounters===0) log('⭐ Starfall fades.','log-system');
 }

 // Enemy Poison ticks (Deadly Poison applied to enemies)
 C.enemies.forEach(e=>{
 if(e.hp<=0)return;
 const pois=(e.debuffs||[]).find(d=>d.id==='poison');
 if(pois&&pois.stacks>0){
 e.hp=Math.max(0,e.hp-pois.stacks);
 log(`☠️ Poison deals ${pois.stacks} damage to ${e.name}! (${e.hp}/${e.maxHP} HP)`,'log-hit');
 pois.stacks=Math.max(0,pois.stacks-1);
 if(pois.stacks===0){
 e.debuffs=e.debuffs.filter(d=>d.id!=='poison');
 log(`☠️ Poison fades on ${e.name}.`,'log-system');
 }
 if(e.hp<=0){
 G.char.runKills=(G.char.runKills||0)+1;
 log(`☠️ ${e.name} dies from Poison!`,'log-crit');
 if(e.id==='sneedShredder'&&!e._sneedSpawned){
 e._sneedSpawned=true;spawnEnemy('sneed');
 log('🔧 Sneed crawls out of the wreckage!','log-surge');
 }
 }
 }
 });

 // Hemorrhage damage on enemies (stacks deal damage to enemy per turn, reduce by 1)
 C.enemies.forEach(e=>{
 if(e.hp<=0)return;
 const hem=(e.debuffs||[]).find(d=>d.id==='hemorrhage');
 if(hem&&hem.stacks>0){
 e.hp=Math.max(0,e.hp-hem.stacks);
 log(`🩸 Hemorrhage deals ${hem.stacks} damage to ${e.name}! (${e.hp}/${e.maxHP} HP)`,'log-hit');
 hem.stacks=Math.max(0,hem.stacks-1);
 if(hem.stacks===0){
 e.debuffs=e.debuffs.filter(d=>d.id!=='hemorrhage');
 log(`🩸 Hemorrhage fades on ${e.name}.`,'log-system');
 }
 if(e.hp<=0){
 G.char.runKills=(G.char.runKills||0)+1;
 log(`☠️ ${e.name} defeated by Hemorrhage!`,'log-crit');
 if(e.id==='sneedShredder'&&!e._sneedSpawned){
 e._sneedSpawned=true;spawnEnemy('sneed');
 log('🔧 Sneed crawls out of the wreckage!','log-surge');
 }
 }
 }
 });

 // Status damage (skip if already ticked during a player turn skip)
 if(!C._skipTurnEffectsApplied){
 (G.char.statusEffects||[]).find(s=>s.id==='seared')&&dealPlayerDamage(2,'Seared',true);
 (G.char.statusEffects||[]).filter(s=>s.id==='poison').forEach(s=>dealPlayerDamage(s.stacks||1,'Poison',true));
 G.char.statusEffects=(G.char.statusEffects||[]).filter(s=>{
 if(s.id==='poison'){const r=d20();if(r>15){log(`💊 Poison resisted! (${r})`,'log-hit');return false;}}
 return true;
 });
 }
 if(G.char.hp<=0)return;

 // Recompute living AFTER all DoT damage — enemies killed by DoT don't attack
 const living=C.enemies.filter(e=>e.hp>0);

 // Per-enemy action logic extracted so sequential setTimeout chain can call it
 function doOneEnemy(enemy){
 enemy.turnCount=(enemy.turnCount||0)+1;
 if((enemy._stunnedTurns||0)>0){
 enemy._stunnedTurns--;
 log(`💤 ${enemy.name} is STUNNED and loses their turn!`,'log-system');
 return;
 }
 const isSurge=enemy.turnCount%4===0&&!!enemy.surge;
 if(isSurge){
 showSurgeAlert(enemy.name, enemy.portrait);
 log(`⚡ ${enemy.name} SURGES! ${enemy.surge}`,'log-surge');
 if(enemy.id==='edwinVanCleef'){
 G.char.statusEffects=G.char.statusEffects||[];
 G.char.statusEffects.push({id:'poison',stacks:2},{id:'poison',stacks:1});
 log(`⚔️ VanCleef applies 2 Poison counters!`,'log-surge');
 dealPlayerDamage(Math.ceil(enemy.atk*1.5),`VanCleef surge`,false,enemy);
 } else if(enemy.id==='captainGreenskin'){
 C._greenskinCritFail=true;
 spawnEnemy('defiastRogue'); spawnEnemy('defiastRogue');
 log(`🏴‍☠️ Greenskin: your next ability critically fails! 2 crewmates board!`,'log-surge');
 } else if(enemy.id==='mechanoguard'&&enemy.hp>0){
 const selfDestructDmg=Math.ceil(enemy.hp/2);
 dealPlayerDamage(selfDestructDmg,`${enemy.name} SELF-DESTRUCT`,false,enemy);
 enemy.hp=0;
 log(`💥 MECHANOGUARD SELF-DESTRUCTS for ${selfDestructDmg} damage!`,'log-crit');
 } else if(enemy.id==='mrSmite'){
 const lockedWeapon=enemy.currentWeapon||(enemy.weaponRotation||[])[0];
 enemy._permWeapon=lockedWeapon;
 const lockedWe=enemy.weaponEffects?.[lockedWeapon];
 if(lockedWe) enemy.statusEffects=lockedWe.modifier==='shield'?['shield']:[];
 dealPlayerDamage(2,'Mr. Smite surge',false,enemy);
 C.skipNextPlayerTurn=true;
 log(`⚓ Smite SURGES! Permanently equips ${lockedWeapon}${lockedWe?' — '+lockedWe.desc:''}! You take 2 damage and lose your next turn!`,'log-surge');
 } else if(enemy.id==='sneed'){
 C.skipNextPlayerTurn=true;
 log(`🔧 Sneed grabs you and slams you into the machinery — you lose your next turn!`,'log-surge');
 } else if(enemy.id==='sneedShredder'){
 dealPlayerDamage(5,`${enemy.name} surge`,false,enemy);
 C._shredderArmorDebuff=(C._shredderArmorDebuff||0)+2;
 log(`⚙️ Shredder SURGES — 5 damage + armor shredded (-2 armor)!`,'log-surge');
 } else if(enemy.id==='rhahkZor'){
 dealPlayerDamage(5,`${enemy.name} surge`,true,enemy);
 C.skipNextPlayerTurn=true;
 log(`👹 Rhahk'Zor's Surge smashes you for 5 ability damage — you lose your next turn!`,'log-surge');
 const rhkAtk=enemy.atk+(enemy.statusEffects?.includes('enrage')?enemy.atk:0);
 dealPlayerDamage(rhkAtk,enemy.name,false,enemy);
 log(`👹 Rhahk'Zor also attacks for ${rhkAtk}!`,'log-dmg');
 return;
 } else {
 const sm=enemy.surge.match(/Deal (\d+)/i);
 dealPlayerDamage(sm?parseInt(sm[1])*1.5|0:Math.ceil(enemy.atk*1.5),`${enemy.name} surge`,false,enemy);
 }
 } else {
 let atk=enemy.atk+(enemy.statusEffects?.includes('enrage')?enemy.atk:0);
 if(enemy.id==='sneedShredder') atk+=1; // Sneed's Shredder ongoing: +1 damage
 if(C._growlDebuff&&C._growlDebuff.turns>0) atk=Math.max(1,atk-C._growlDebuff.amount);
 if(enemy.id==='mrSmite'){
 const wpns=enemy.weaponRotation||[];
 enemy.currentWeapon=wpns[enemy.turnCount%wpns.length]; // always rotate
 const we=enemy.weaponEffects?.[enemy.currentWeapon];
 const permWe=enemy._permWeapon?enemy.weaponEffects?.[enemy._permWeapon]:null;
 const hasShield=(we?.modifier==='shield')||(permWe?.modifier==='shield');
 const hasMaul=(we?.modifier==='maul')||(permWe?.modifier==='maul');
 const hasDoubleHit=(we?.modifier==='double_hit')||(permWe?.modifier==='double_hit');
 enemy.statusEffects=hasShield?['shield']:[];
 if(hasMaul) atk+=10;
 const permNote=permWe&&enemy._permWeapon!==enemy.currentWeapon?` | 🔒 ${enemy._permWeapon}: ${permWe.desc}`:'';
 if(we) log(`⚓ Smite: ${enemy.currentWeapon} — ${we.desc}${permNote}`,'log-info');
 if(hasDoubleHit){
 dealPlayerDamage(atk,`${enemy.name} (Hit 1)`,false,enemy);
 dealPlayerDamage(atk,`${enemy.name} (Hit 2)`,false,enemy);
 return;
 }
 }
 if(enemy.id==='cookie'){
 const br=d20();
 const entry=enemy.brewTable?.find(b=>br>=b.lo&&br<=b.hi);
 if(entry){
 log(`🍳 Cookie's Brew (${br}): ${entry.effect}`,'log-info');
 const bm=entry.effect.match(/Deal (\d+)/i);
 if(bm)dealPlayerDamage(parseInt(bm[1]),"Cookie's Brew",false,enemy);
 }
 }
 if(enemy.id==='edwinVanCleef'){
 const vcPoison=Math.floor((G.char.statusEffects||[]).filter(s=>s.id==='poison').reduce((s,p)=>s+(p.stacks||1),0));
 if(vcPoison>0){
 const vcBonus=Math.ceil(vcPoison/1);
 enemy._ongoingDmgBonus=(enemy._ongoingDmgBonus||0);
 log(`⚔️ VanCleef: +${vcBonus} damage bonus from ${vcPoison} Poison counters!`,'log-surge');
 atk+=vcBonus;
 }
 }
 if(enemy.id==='shadowGuard'){
 enemy.statusEffects=enemy.statusEffects||[];
 if(!enemy.statusEffects.includes('shield')) enemy.statusEffects.push('shield');
 G.char.statusEffects=G.char.statusEffects||[];
 G.char.statusEffects.push({id:'poison',stacks:1});
 log(`👤 Shadow Guard applies 1 Poison counter!`,'log-info');
 }
 if(enemy.id==='defiastWizard'&&enemy.hp>0){
 dealPlayerDamage(2,'Defias Wizard (fire)',true,enemy);
 log(`🧙 Defias Wizard conjures flames — 2 fire damage!`,'log-hit');
 }
 if(enemy.id==='gilnid'&&enemy.turnCount>0&&enemy.turnCount%2===0&&enemy.hp>0){
 spawnEnemy('mechanoguard');
 log(`💣 Gilnid deploys a Mechanoguard!`,'log-surge');
 }
 if(enemy.id==='mechanoguard'&&enemy.hp>0){
 const mgRoll=d20();
 if(mgRoll<=5){ dealPlayerDamage(3,`${enemy.name} (system jolt)`,true,enemy); log(`🤖 Mechanoguard system jolt! (${mgRoll}) — 3 damage!`,'log-hit'); }
 else if(mgRoll<=10){ dealPlayerDamage(2,`${enemy.name} (strike 1)`,false,enemy); dealPlayerDamage(2,`${enemy.name} (strike 2)`,false,enemy); log(`🤖 Mechanoguard double strike! (${mgRoll}) — 2×2 damage!`,'log-hit'); }
 else if(mgRoll<=15){ enemy.hp=Math.min(enemy.maxHP,enemy.hp+5); log(`🤖 Mechanoguard self-repairs! (${mgRoll}) +5 HP → ${enemy.hp}/${enemy.maxHP}`,'log-info'); }
 else { enemy._noTakeDamageThisTurn=true; log(`🤖 Mechanoguard shields up! (${mgRoll}) — no damage this turn!`,'log-info'); }
 }
 if(enemy.id==='minerJohn'&&enemy.turnCount>0&&enemy.turnCount%2===0&&enemy.hp>0){
 spawnEnemy('stripMiner');
 log(`⛏️ Miner John calls for backup! Strip Miner summoned!`,'log-surge');
 }
 if(enemy.spawnsMinion&&enemy.turnCount%enemy.spawnRate===0)spawnEnemy(enemy.spawnsMinion);
 if(C.preventAttackDamageThisTurn||enemy._noAttackThisTurn){
 enemy._noAttackThisTurn=false;
 log(`${enemy.name}'s attack is blocked!`,'log-info');
 } else {
 const half=enemy._halfAttackNextTurn;
 if(half){enemy._halfAttackNextTurn=false;atk=Math.ceil(atk/2);}
 dealPlayerDamage(atk,enemy.name,false,enemy);
 if(enemy.id==='cookie'){
 const sr=d20();
 if(sr<8&&!(G.char.statusEffects||[]).find(s=>s.id==='seared')){
 (G.char.statusEffects=G.char.statusEffects||[]).push({id:'seared',stacks:1});
 log(`🔥 Cookie Sears you! (${sr}) — 2 fire dmg/turn`,'log-dmg');
 }
 }
 if(enemy.poisonOnHit){
 G.char.statusEffects=G.char.statusEffects||[];
 const px=G.char.statusEffects.find(s=>s.id==='poison');
 if(px)px.stacks=Math.min(10,px.stacks+1);else G.char.statusEffects.push({id:'poison',stacks:1});
 }
 }
 }
 }

 function _finishEnemyTurn(){
 if(G.char.hp<=0)return;
 if(C.enemies.every(e=>e.hp<=0)){setTimeout(onCombatWin,400);return;}
 if(!C._skipTurnEffectsApplied&&(C.activeHoTs||[]).length>0){
 C.activeHoTs=C.activeHoTs.filter(h=>{
 if(h.channel){
 const tRoll=d20()+(G.char.rollBonus||0);
 if(tRoll<h.dc){log(`${h.icon} ${h.name} channel breaks! (rolled ${tRoll} vs DC ${h.dc})`,'log-miss');return false;}
 h.stack=(h.stack||0)+1;
 if(h.channelType==='damage'){
 const dmg=(h.baseDmg||0)+h.bonusPerStack*h.stack;
 C.enemies.forEach((e,ei)=>{if(e.hp>0){dealEnemyDamage(e,dmg,ei);e._tookIceDamage=true;}});
 log(`${h.icon} ${h.name} channels: ${dmg} ice to all (rolled ${tRoll}, tick ${h.stack})`,'log-hit');
 return true;
 }
 const amt=h.baseHeal+h.bonusPerStack*h.stack+(G.char._hotBonus||0);
 const _co=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+amt);
 log(`${h.icon} ${h.name} channels: +${G.char.hp-_co} HP (rolled ${tRoll}, tick ${h.stack}) → ${G.char.hp}/${G.char.maxHP}`,'log-hit');
 return true;
 }
 if(h.turnsLeft<=0){
 if(h.bloomAmt){const _blmOld=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+h.bloomAmt);log(`${h.icon} ${h.name} BLOOMS! Healed ${G.char.hp-_blmOld} HP → ${G.char.hp}/${G.char.maxHP}`,'log-crit');}
 return false;
 }
 const _hotOld=G.char.hp;G.char.hp=Math.min(G.char.maxHP,G.char.hp+(h.healPerTurn+(G.char._hotBonus||0)));
 log(`${h.icon} ${h.name} healed ${G.char.hp-_hotOld} HP → ${G.char.hp}/${G.char.maxHP} (${h.healPerTurn+(G.char._hotBonus||0)} HP · ${h.turnsLeft-1} left)`,'log-hit');
 h.turnsLeft--;
 return h.turnsLeft>0;
 });
 }
 C._skipTurnEffectsApplied=false; // clear flag after guarded enemy turn
 if(C.enemies.every(e=>e.hp<=0)){setTimeout(onCombatWin,400);return;}
 // Tick down growl debuff
 if(C._growlDebuff&&C._growlDebuff.turns>0){
 C._growlDebuff.turns--;
 if(C._growlDebuff.turns===0){
 delete C._growlDebuff;
 log('🐻 Growl fades — enemy attacks return to normal.','log-system');
 }
 }
 C.phase='draw';
 renderCombat();
 setTimeout(doDraw,400);
 }

 // Process enemies one at a time with a 3-second pause between each
 let _eti=0;
 function _nextEnemy(){
 if(G.char.hp<=0)return;
 if(_eti>=living.length){_finishEnemyTurn();return;}
 const enemy=living[_eti++];
 log(`— ${enemy.portrait} ${enemy.name} acts —`,'log-system');
 doOneEnemy(enemy);
 renderCombat();
 if(G.char.hp<=0)return;
 setTimeout(_nextEnemy,3000);
 }
 _nextEnemy();
}

// ── COMBAT WIN ────────────────────────────────────────────────────
function showBossLootScreen(lootArray, onClose) {
 // Add all loot to inventory first; unlock for future runs
 G.char.inventory=G.char.inventory||[];
 const maxSlots=getInventoryMaxSlots();
 const added=[], lost=[];
 const co=loadCarryover();
 co.unlockedEquipment=co.unlockedEquipment||[];
 lootArray.forEach(loot=>{
  if(G.char.inventory.length<maxSlots){
   G.char.inventory.push({id:loot.id,name:loot.name,icon:loot.icon,desc:loot.desc,slot:loot.slot,stats:loot.stats||{},rarity:loot.rarity||null});
   if(!co.unlockedEquipment.includes(loot.id)) co.unlockedEquipment.push(loot.id);
   added.push(loot);
  } else {
   lost.push(loot);
  }
 });
 saveCarryover(co);
 saveRun(G.char);

 const overlay=document.createElement('div');
 overlay.style.cssText='position:fixed;inset:0;z-index:450;background:rgba(0,0,0,0.88);display:flex;align-items:center;justify-content:center;pointer-events:all;overflow-y:auto;padding:20px 0';

 const box=document.createElement('div');
 box.style.cssText='background:var(--parch-dark);border:2px solid var(--chrome-gold);border-radius:6px;padding:28px 24px;display:flex;flex-direction:column;align-items:center;gap:16px;max-width:640px;width:96%;text-align:center;animation:boss-loot-in 0.3s ease-out';

 const hdr=document.createElement('div');
 hdr.innerHTML=`
  <div style="font-family:var(--font-pixel);font-size:11px;color:var(--crit-col);letter-spacing:0.15em;text-shadow:0 0 16px rgba(240,80,80,0.5);margin-bottom:6px">⚔ BOSS LOOT ⚔</div>
  <div style="font-family:var(--font-pixel);font-size:7px;color:${lost.length?'rgba(255,120,120,0.8)':'var(--parch-text-dim)'};letter-spacing:0.1em">${added.length} item${added.length!==1?'s':''} added to inventory${lost.length?` · ${lost.length} lost (inventory full)`:' — equip now or manage in the shop'}</div>`;
 box.appendChild(hdr);

 const grid=document.createElement('div');
 grid.style.cssText='display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%';
 const slotLabels={weapon:'WEAPON',offhand:'OFF-HAND',armor:'ARMOR',trinket:'TRINKET'};

 lootArray.forEach(loot=>{
  const inInv=added.includes(loot);
  const rar=RARITY[loot.rarity]||{label:'Common',color:'#ccc',border:'rgba(200,200,200,0.4)',glow:'rgba(200,200,200,0.1)'};
  const card=document.createElement('div');
  card.style.cssText=`background:rgba(0,0,0,${inInv?'0.4':'0.15'});border:1px solid ${inInv?rar.border:'rgba(80,80,80,0.3)'};border-radius:5px;padding:14px 10px;display:flex;flex-direction:column;align-items:center;gap:6px;opacity:${inInv?'1':'0.4'}`;
  const statsStr=Object.entries(loot.stats||{}).filter(([k,v])=>v&&typeof v==='number').map(([k,v])=>`${v>0?'+':''}${v} ${k}`).join(' · ');
  const equipBtnId=`bloot-${loot.id.replace(/[^a-z0-9]/gi,'_')}`;
  const isEquipped=()=>G.char.equipment?.[loot.slot]?.id===loot.id;
  card.innerHTML=`
   <div style="font-family:var(--font-pixel);font-size:5px;color:var(--parch-text-dim);letter-spacing:0.1em">${slotLabels[loot.slot]||loot.slot.toUpperCase()}</div>
   <div style="font-size:32px;line-height:1;filter:drop-shadow(0 0 8px ${rar.color}${inInv?'88':'44'})">${loot.icon}</div>
   <div style="font-family:var(--font-pixel);font-size:5px;color:${rar.color};letter-spacing:0.12em">${rar.label.toUpperCase()}</div>
   <div style="font-family:var(--font-pixel);font-size:8px;color:${rar.color};margin-bottom:2px">${loot.name}</div>
   <div style="font-size:11px;color:var(--parch-text-dim);line-height:1.4;max-width:210px">${loot.desc}</div>
   ${statsStr?`<div style="font-family:var(--font-pixel);font-size:5px;color:${rar.color};opacity:0.85">${statsStr}</div>`:''}
   ${inInv
    ?`<button id="${equipBtnId}" class="btn btn-sm btn-primary" style="margin-top:4px;width:100%;font-size:7px;border-color:${rar.border}">Equip Now</button>`
    :`<div style="font-family:var(--font-pixel);font-size:5px;color:rgba(255,100,100,0.7);margin-top:4px">INVENTORY FULL</div>`}`;

  if(inInv){
   card.querySelector(`#${equipBtnId}`).onclick=()=>{
    if(isEquipped()){ return; }
    const invIdx=G.char.inventory.findIndex(i=>i.id===loot.id);
    if(invIdx===-1) return;
    const existing=G.char.equipment?.[loot.slot];
    if(existing){
     const old=EQUIPMENT_SHOP.find(e=>e.id===existing.id)||BOSS_LOOT_LIST.find(e=>e.id===existing.id);
     if(old&&old.stats){
      if(old.stats.dmg) G.char._eqDmg=(G.char._eqDmg||0)-old.stats.dmg;
      if(old.stats.dmgAll) G.char._eqDmgAll=(G.char._eqDmgAll||0)-old.stats.dmgAll;
      if(old.stats.dmgMagic) G.char._eqDmgMagic=(G.char._eqDmgMagic||0)-old.stats.dmgMagic;
      Object.keys(DMG_TYPE_PROP).forEach(t=>{const sk='dmg'+t[0].toUpperCase()+t.slice(1);if(old.stats[sk])G.char[DMG_TYPE_PROP[t]]=(G.char[DMG_TYPE_PROP[t]]||0)-old.stats[sk];});
      if(old.stats.roll) G.char._eqRoll=(G.char._eqRoll||0)-old.stats.roll;
      if(old.stats.armor) G.char._eqArmor=(G.char._eqArmor||0)-old.stats.armor;
      if(old.stats.draw) G.char._eqDraw=(G.char._eqDraw||0)-old.stats.draw;
      if(old.stats.hp){ G.char.maxHP=Math.max(1,G.char.maxHP-old.stats.hp); G.char.hp=Math.min(G.char.hp,G.char.maxHP); }
      if(old.stats.critStunChance) G.char._critStunChance=Math.max(0,(G.char._critStunChance||0)-old.stats.critStunChance);
     }
     G.char.inventory[invIdx]={id:existing.id,name:existing.name,icon:existing.icon,desc:existing.desc,slot:existing.slot,stats:existing.stats||{},rarity:existing.rarity||null};
    } else {
     G.char.inventory.splice(invIdx,1);
    }
    loot.apply(G.char);
    G.char.equipment=G.char.equipment||{weapon:null,offhand:null,armor:null,trinket:null};
    G.char.equipment[loot.slot]={id:loot.id,name:loot.name,icon:loot.icon,desc:loot.desc,stats:loot.stats||{},rarity:loot.rarity||null};
    saveRun(G.char);
    const btn=card.querySelector(`#${equipBtnId}`);
    btn.textContent='✔ Equipped';
    btn.classList.remove('btn-primary');
    btn.style.cssText='margin-top:4px;width:100%;font-size:7px;border-color:var(--chrome-gold);color:var(--chrome-gold)';
    toast(`${loot.icon} ${loot.name} equipped!`,'success');
   };
  }
  grid.appendChild(card);
 });
 box.appendChild(grid);

 const doneBtn=document.createElement('button');
 doneBtn.className='btn btn-primary';
 doneBtn.style.cssText='margin-top:8px;min-width:180px';
 doneBtn.textContent='Continue →';
 doneBtn.onclick=()=>{ overlay.remove(); onClose(); };
 box.appendChild(doneBtn);

 overlay.appendChild(box);
 document.body.appendChild(overlay);
}

// Flat list of all boss loot for reverse-stat lookup
const BOSS_LOOT_LIST=Object.values(BOSS_LOOT).flat();

// Register boss loot in EQUIPMENT_SHOP so the loadout system can find them
BOSS_LOOT_LIST.forEach(item=>{ if(!EQUIPMENT_SHOP.find(e=>e.id===item.id)) EQUIPMENT_SHOP.push(item); });

// ── DUNGEONS ──────────────────────────────────────────────────────
const DUNGEONS = [
 { id:'deadmines', name:'The Deadmines', icon:'⛏️', bosses:[
  { key:'minerJohn',      name:'Miner John',         icon:'⛏️' },
  { key:'sneed',          name:'Sneed',               icon:'🪚' },
  { key:'rhahkZor',       name:"Rhahk'Zor",           icon:'👹' },
  { key:'sneedShredder',  name:"Sneed's Shredder",    icon:'🤖' },
  { key:'gilnid',         name:'Gilnid',              icon:'🔥' },
  { key:'cookie',         name:'Cookie',              icon:'🍳' },
  { key:'captainGreenskin',name:'Captain Greenskin',  icon:'🏴‍☠️' },
  { key:'mrSmite',        name:'Mr. Smite',            icon:'⚓' },
  { key:'edwinVanCleef',  name:'Edwin VanCleef',      icon:'🗡️' },
 ]},
];

function getBossNameForItem(itemId) {
 for(const dg of DUNGEONS){
  for(const boss of dg.bosses){
   const items=BOSS_LOOT[boss.key];
   if(items&&items.find(i=>i.id===itemId)) return boss.name;
  }
 }
 return 'a boss';
}

function onCombatWin() {
 const enc=C.enc;
 log(enc.onWin||'Victory!','log-crit');
 G.char.deck=[...C.deck,...C.discard,...C.hand];
 G.char.currentForm=null;G.char.statusEffects=[];
 G.char._stance=null; // stances expire at end of combat
 // Hunter aspects: rollback per-combat stat deltas, clear flags
 if(C._aspectHawkDmgDelta) G.char.dmgBonus=Math.max(0,(G.char.dmgBonus||0)-C._aspectHawkDmgDelta);
 if(C._aspectCheetahRollDelta) G.char.rollBonus=Math.max(0,(G.char.rollBonus||0)-C._aspectCheetahRollDelta);
 if(C._aspectCheetahDrawDelta) G.char.extraDraw=Math.max(0,(G.char.extraDraw||0)-C._aspectCheetahDrawDelta);
 if(C._aspectMonkeyFromCombat) G.char._aspectMonkey=false;
 // Pets fade at combat end — revert passives, clear list
 (C._pets||[]).forEach(p=>_removePetPassive(p));
 C._pets=[]; G.char._petActive=null; G.char._petBonus=null;
 C._tigerDoubleNext=false; C._petShellActive=false; C._petReflectActive=false;
 C._petPlayerDmgBuff=0; C._petEnemiesHalfDmg=false;
 C._felHunterShadowBuff=0; C._voidWalkerRollBuff=0;
 // Per-kill XP/gold already awarded in dealEnemyDamage — just add encounter bonus here
 const xp=enc.xpBonus||0;
 const gold=(G.char.goldBonus||0);
 const lp=Math.ceil(xp/10);
 if(xp>0){ G.char.xp=(G.char.xp||0)+xp; const co2=loadCarryover();co2.legacyPoints=(co2.legacyPoints||0)+lp;co2.lifetimeLP=(co2.lifetimeLP||0)+lp;saveCarryover(co2); }
 if(gold>0){ G.char.gold=(G.char.gold||0)+gold; G.char.runGold=(G.char.runGold||0)+gold; }
 if(xp>0||gold>0) log(`Encounter bonus: +${xp} XP · +${gold}g`,'log-info');
 // Check for boss loot drops — pick 1 random item from the boss's loot table
 const bossLootDrops=C.enemies
  .filter(e=>e.hp<=0&&BOSS_LOOT[e.id])
  .map(e=>{ const t=BOSS_LOOT[e.id]; return [t[Math.floor(Math.random()*t.length)]]; });

 if(enc.isFinalBoss){
  saveRun(G.char);
  if(bossLootDrops.length){
   setTimeout(()=>showBossLootScreen(bossLootDrops[0],()=>setTimeout(endVictory,400)),600);
  } else {
   setTimeout(endVictory,1500);
  }
  return;
 }
 saveRun(G.char);
 if(bossLootDrops.length){
  setTimeout(()=>showBossLootScreen(bossLootDrops[0],()=>showCombatVictoryOverlay(enc)),600);
 } else {
  setTimeout(()=>showCombatVictoryOverlay(enc),600);
 }
}

function showCombatVictoryOverlay(enc) {
 const overlay=document.createElement('div');
 overlay.id='combat-victory-overlay';
 overlay.style.cssText='position:fixed;inset:0;z-index:400;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;pointer-events:all';

 const box=document.createElement('div');
 box.style.cssText='background:var(--parch-dark);border:2px solid var(--chrome-gold);border-radius:4px;padding:28px 36px;display:flex;flex-direction:column;align-items:center;gap:12px;max-width:420px;width:90%;text-align:center';
 overlay.appendChild(box);

 const title=document.createElement('div');
 title.style.cssText='font-family:var(--font-pixel);font-size:14px;color:var(--crit-col);text-shadow:0 0 20px rgba(240,208,96,0.4);letter-spacing:0.1em';
 title.textContent='⚔️ VICTORY';
 box.appendChild(title);

 const sub=document.createElement('div');
 sub.style.cssText='font-family:var(--font-body);font-size:13px;color:var(--parch-text-dim);font-style:italic;max-width:340px;line-height:1.6';
 sub.textContent=enc.onWin||'The enemy has been defeated.';
 box.appendChild(sub);

 const continueBtn=document.createElement('button');
 continueBtn.className='btn btn-primary btn-lg';
 let nextLabel='Continue →';
 if(isReadyToLevel(G.char)) nextLabel='Level Up! →';
 else if((G.encounterIdx+1)%3===0) nextLabel='Visit Shop →';
 else nextLabel='Draft a Card →';
 continueBtn.textContent=nextLabel;
 continueBtn.onclick=()=>{
 overlay.remove();
 if(isReadyToLevel(G.char)){showLevelUp();}
 else{
 draftIsInitial=false;
 draftCallback=()=>{G.char.deck=shuffle(G.char.deck);saveRun(G.char);
 if((G.encounterIdx+1)%3===0)showShop();else runEncounter(G.encounterIdx+1);
 };
 showDraftScreen();
 }
 };
 box.appendChild(continueBtn);
 document.body.appendChild(overlay);
}

// ── DEATH ─────────────────────────────────────────────────────────
function onPlayerDeath() {
 log('💀 You have been slain.','log-critmiss');
 stopAllMusic(); // stop battle music on death
 playGameoverMusic();
 const char=G.char;
 recordRunResult(char,false);
 clearRun();
 show('screen-dead');
 $('dead-title').textContent=`${char.name} Has Fallen`;
 $('dead-msg').textContent=`${char.name} was defeated in Fate of the Fallen at Level ${char.level}.`;
 const co=loadCarryover();
 $('dead-stats').innerHTML=`
 <div class="run-stat"><span class="run-stat-label">LEVEL</span><span class="run-stat-val">${char.level}</span></div>
 <div class="run-stat"><span class="run-stat-label">ENEMIES SLAIN</span><span class="run-stat-val">${char.runKills||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">GOLD EARNED</span><span class="run-stat-val">${char.runGold||0}g</span></div>
 <div class="run-stat"><span class="run-stat-label">LEGACY POINTS EARNED</span><span class="run-stat-val run-stat-crit">⚡${char.runLP||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">KILLED BY</span><span class="run-stat-val run-stat-taken">${char.killedBy||'unknown'}</span></div>
 <div class="run-stat"><span class="run-stat-label">TOTAL RUNS</span><span class="run-stat-val">${co.totalRuns||1}</span></div>
 <div class="run-stat run-stat-divider"></div>
 <div class="run-stat"><span class="run-stat-label">DAMAGE DEALT</span><span class="run-stat-val run-stat-dmg">${char.runDmgDealt||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">DAMAGE TAKEN</span><span class="run-stat-val run-stat-taken">${char.runDmgTaken||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">HEALING DONE</span><span class="run-stat-val run-stat-heal">${char.runHealingDone||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">HIGHEST HIT</span><span class="run-stat-val run-stat-crit">${char.runHighestHit||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">CARDS PLAYED</span><span class="run-stat-val">${char.runCardsPlayed||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">CRITICAL HITS</span><span class="run-stat-val run-stat-crit">${char.runCrits||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">CRITICAL FAILS</span><span class="run-stat-val run-stat-taken">${char.runCritFails||0}</span></div>
 `;
 $('dead-unlock').textContent='';
 $('btn-dead-new').onclick=()=>{G={char:null,encounterIdx:0,phase:'title',currentAdventure:null};initTitle();};
}

// ── LEVEL UP ──────────────────────────────────────────────────────
function showLevelUp() {
 G.char.level++;G.char.xp=0;saveRun(G.char);
 show('screen-levelup');
 $('lvlup-title').textContent=`LEVEL UP! — LEVEL ${G.char.level}`;
 $('lvlup-tier').textContent=`Card tier unlocked: ${TIER_ROMAN[getLevelTier(G.char.level)]}`;
 const perks=getRandomPerks(3);
 const pg=$('perk-grid');pg.innerHTML='';
 perks.forEach(perk=>{
 const div=document.createElement('div');div.className='perk-tile';
 div.innerHTML=`<div class="perk-icon">${perk.icon}</div><div class="perk-name">${perk.name}</div><div class="perk-desc">${typeof perk.desc==='function'?perk.desc(G.char):perk.desc}</div>`;
 div.onclick=()=>choosePerk(perk);pg.appendChild(div);
 });
 const cg=$('cull-grid');cg.innerHTML='';
 G.char.deck.forEach(id=>{
 const card=getCardById(id);if(!card)return;
 const div=document.createElement('div');div.className='cull-tile';
 div.innerHTML=`<div class="cull-tile-name">${card.name}</div><div class="cull-tile-tier">Tier ${TIER_ROMAN[card.tier]}</div>`;
 div.onclick=()=>{G.char.deck=G.char.deck.filter(i=>i!==id);toast(`Removed: ${card.name}`,'success');afterLevelUp();};
 cg.appendChild(div);
 });
 $('btn-skip-lvlup').onclick=afterLevelUp;
}
function choosePerk(perk) {
 perk.apply(G.char);G.char.perks.push({id:perk.id,name:perk.name});
 toast(`${perk.icon} ${perk.name}!`,'success');afterLevelUp();
}
function afterLevelUp() {
 draftIsInitial=false;
 draftCallback=()=>{G.char.deck=shuffle(G.char.deck);saveRun(G.char);showShop();};
 showDraftScreen();
}

function getInventoryMaxSlots() {
 const co=loadCarryover();
 const levels=co.legacyLevels||{};
 let slots=10;
 if((levels['lg_inventory_1']||0)>=1) slots+=2;
 if((levels['lg_inventory_2']||0)>=1) slots+=2;
 if((levels['lg_inventory_3']||0)>=1) slots+=2;
 return slots;
}

function getSellPrice(itemId) {
 const shopRef=SHOP.find(s=>s.id===itemId);
 if(shopRef&&shopRef.cost>0) return Math.floor(shopRef.cost*0.5);
 const eqRef=EQUIPMENT_SHOP.find(e=>e.id===itemId);
 if(eqRef&&eqRef.cost>0) return Math.floor(eqRef.cost*0.5);
 const bossRef=BOSS_LOOT_LIST.find(b=>b.id===itemId);
 if(bossRef){const p={uncommon:15,rare:25,epic:40,legendary:60};return p[bossRef.rarity]||10;}
 return 5;
}

// ── SHOP ──────────────────────────────────────────────────────────
function showShop() {
 show('screen-shop');renderSidebar();
 const shopEl=$('screen-shop'); if(shopEl) shopEl.scrollTop=0;
 $('shop-gold').textContent=G.char.gold;
 // Ensure header leave button works
 const leaveTop=$('btn-shop-leave-top');
 if(leaveTop) leaveTop.onclick=()=>runEncounter(G.encounterIdx+1);
 const grid=$('shop-grid');grid.innerHTML='';
 // Remove any previously appended equipment/inventory sections
 const shopFrame=grid.parentElement;
 Array.from(shopFrame.querySelectorAll('.shop-extra-section')).forEach(el=>el.remove());
 SHOP.filter(item=>!item.conjured).forEach(item=>{
 const canBuy=G.char.gold>=item.cost;
 const el=document.createElement('div');el.className='shop-item';
 el.innerHTML=`<div style="font-size:28px;margin-bottom:6px">${item.icon}</div><div class="shop-item-name">${item.name}</div><div class="shop-item-desc">${item.desc}</div><div class="shop-item-cost">🪙 ${item.cost}g</div><button class="btn btn-sm${canBuy?'':' btn-ghost'}" ${canBuy?'':'disabled'} onclick="buyItem('${item.id}',${item.cost})">${canBuy?'Buy':'Too Expensive'}</button>`;
 grid.appendChild(el);
 });
 // Equipment section
 const eqSection=document.createElement('div');
 eqSection.style.cssText='width:100%;border-top:1px solid var(--chrome-mid);padding-top:20px;margin-top:8px';
 eqSection.className='shop-extra-section';
 eqSection.innerHTML=`<div style="font-family:var(--font-pixel);font-size:8px;color:var(--chrome-gold-hi);text-align:center;margin-bottom:14px">⚔️ EQUIPMENT</div>`;
 const eqGrid=document.createElement('div');
 eqGrid.style.cssText='display:flex;gap:10px;flex-wrap:wrap;justify-content:center';

 const slots=['weapon','offhand','armor','trinket'];
 const slotLabels={weapon:'WEAPON',offhand:'OFF-HAND',armor:'ARMOR',trinket:'TRINKET'};
 slots.forEach(slot=>{
 const header=document.createElement('div');
 header.style.cssText='width:100%;font-family:var(--font-pixel);font-size:6px;color:var(--parch-text-dim);letter-spacing:0.1em;margin:8px 0 4px';
 header.textContent='── '+slotLabels[slot]+' ──';
 eqGrid.appendChild(header);
 const currentEq=G.char.equipment?.[slot];
 EQUIPMENT_SHOP.filter(e=>e.slot===slot&&!e.bossLoot).forEach(item=>{
 const canBuy=G.char.gold>=item.cost;
 const isEquipped=currentEq?.id===item.id;
 const el=document.createElement('div');
 el.className='shop-item';
 el.style.cssText=isEquipped?'border-color:var(--chrome-gold);background:rgba(200,160,40,0.08)':'';
 const _sl={dmg:'dmg',dmgAll:'✦all',dmgMagic:'🌀magic',dmgMelee:'⚔️melee',dmgRanged:'🏹ranged',dmgFire:'🔥fire',dmgFrost:'❄️frost',dmgNature:'🌿nature',dmgArcane:'🔮arcane',dmgShadow:'🌑shadow',dmgHoly:'✨holy',roll:'roll',armor:'armor',draw:'draw',hp:'HP',crit:'crit',critStunChance:'⛏️crit stun%'};
 const statsStr=Object.entries(item.stats).map(([k,v])=>`${v>0?'+':''}${v} ${_sl[k]||k}`).join(' · ');
 el.innerHTML=`
 <div style="font-size:24px;margin-bottom:6px">${item.icon}</div>
 <div class="shop-item-name">${item.name}</div>
 ${isEquipped?'<div style="font-family:var(--font-pixel);font-size:5px;color:var(--chrome-gold);margin-bottom:4px">✔ EQUIPPED</div>':''}
 <div class="shop-item-desc">${item.desc}</div>
 ${statsStr?`<div style="font-family:var(--font-pixel);font-size:5px;color:var(--chrome-gold);margin-bottom:6px">${statsStr}</div>`:''}
 <div class="shop-item-cost">🪙 ${item.cost}g</div>
 <button class="btn btn-sm${canBuy&&!isEquipped?'':' btn-ghost'}" ${canBuy&&!isEquipped?'':'disabled'} onclick="equipItem('${item.id}')">
 ${isEquipped?'Equipped':canBuy?'Equip':'Too Expensive'}
 </button>`;
 eqGrid.appendChild(el);
 });
 });
 eqSection.appendChild(eqGrid);
 grid.parentElement.appendChild(eqSection);

 // Inventory section (always shown)
 const inv=G.char.inventory||[];
 const maxInvSlots=getInventoryMaxSlots();
 const invSection=document.createElement('div');
 invSection.style.cssText='width:100%;border-top:1px solid var(--chrome-mid);padding-top:20px;margin-top:4px';
 invSection.className='shop-extra-section';
 const invHdr=document.createElement('div');
 invHdr.innerHTML=`<div style="font-family:var(--font-pixel);font-size:8px;color:var(--chrome-gold-hi);text-align:center;margin-bottom:4px">🎒 YOUR INVENTORY</div>
 <div style="font-family:var(--font-pixel);font-size:6px;color:var(--parch-text-dim);text-align:center;margin-bottom:14px">${inv.length} / ${maxInvSlots} slots used</div>`;
 invSection.appendChild(invHdr);
 if(inv.length>0){
  const invGrid=document.createElement('div');
  invGrid.style.cssText='display:flex;gap:10px;flex-wrap:wrap;justify-content:center';
  inv.forEach((item,idx)=>{
   const isEquip=!!item.slot;
   const rar=item.rarity&&RARITY[item.rarity]?RARITY[item.rarity]:null;
   const sellPrice=getSellPrice(item.id);
   const currentEq=isEquip?G.char.equipment?.[item.slot]:null;
   const isEquipped=isEquip&&currentEq?.id===item.id;
   const el=document.createElement('div');
   el.className='shop-item';
   el.style.cssText=`border-color:${rar?rar.border:'rgba(249,148,40,0.4)'}`;
   const statsStr=isEquip&&item.stats?Object.entries(item.stats).filter(([k,v])=>v&&typeof v==='number').map(([k,v])=>`${v>0?'+':''}${v} ${k}`).join(' · '):'';
   const slotLabels={weapon:'WEAPON',offhand:'OFF-HAND',armor:'ARMOR',trinket:'TRINKET'};
   el.innerHTML=`
    <div style="font-size:24px;margin-bottom:6px">${item.icon}</div>
    ${rar?`<div style="font-family:var(--font-pixel);font-size:5px;color:${rar.color};margin-bottom:2px">${rar.label.toUpperCase()}</div>`:''}
    <div class="shop-item-name"${rar?` style="color:${rar.color}"`:''}>${item.name}</div>
    <div class="shop-item-desc">${item.desc}</div>
    ${statsStr?`<div style="font-family:var(--font-pixel);font-size:5px;color:var(--chrome-gold);margin-bottom:4px">${statsStr}</div>`:''}
    ${isEquip?`<div style="font-family:var(--font-pixel);font-size:5px;color:var(--parch-text-dim);margin-bottom:6px">${slotLabels[item.slot]||item.slot.toUpperCase()} SLOT</div>`:`<div style="font-family:var(--font-pixel);font-size:5px;color:var(--parch-text-dim);margin-bottom:6px">USE DURING COMBAT</div>`}
    <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center">
     ${isEquip&&!isEquipped?`<button class="btn btn-sm btn-primary" onclick="equipFromInventory(${idx})" style="font-size:6px">⚔ Equip</button>`:''}
     ${isEquipped?`<div style="font-family:var(--font-pixel);font-size:5px;color:var(--chrome-gold);margin-bottom:4px">✔ EQUIPPED</div>`:''}
     <button class="btn btn-ghost btn-sm" onclick="sellInventoryItem('${item.id}',${idx})" style="color:#f88;border-color:rgba(200,80,80,0.4);font-size:6px">🪙 Sell ${sellPrice}g</button>
    </div>`;
   invGrid.appendChild(el);
  });
  invSection.appendChild(invGrid);
 } else {
  const empty=document.createElement('div');
  empty.style.cssText='font-family:var(--font-pixel);font-size:6px;color:var(--parch-text-dim);text-align:center';
  empty.textContent='Empty — find boss loot or buy items below';
  invSection.appendChild(empty);
 }
 grid.parentElement.appendChild(invSection);

 $('btn-shop-leave').onclick=()=>runEncounter(G.encounterIdx+1);
}
function sellInventoryItem(itemId, invIndex) {
 G.char.inventory=G.char.inventory||[];
 const sellPrice=getSellPrice(itemId);
 G.char.inventory.splice(invIndex,1);
 G.char.gold=(G.char.gold||0)+sellPrice;
 G.char.runGold=(G.char.runGold||0)+sellPrice;
 toast(`Sold for ${sellPrice}g!`,'success');
 saveRun(G.char);
 showShop();
}

function equipItem(itemId) {
 const eq=EQUIPMENT_SHOP.find(e=>e.id===itemId);
 if(!eq){toast('Item not found','danger');return;}
 if(G.char.gold<eq.cost){toast('Not enough gold!','danger');return;}
 G.char.gold-=eq.cost;
 G.char.equipment=G.char.equipment||{weapon:null,offhand:null,armor:null,trinket:null};
 G.char.inventory=G.char.inventory||[];
 const maxSlots=getInventoryMaxSlots();
 // Unequip existing item in same slot — reverse stats and stash in inventory
 const current=G.char.equipment[eq.slot];
 if(current){
  const old=EQUIPMENT_SHOP.find(e=>e.id===current.id)||BOSS_LOOT_LIST.find(e=>e.id===current.id);
  if(old&&old.stats){
   if(old.stats.dmg) G.char._eqDmg=(G.char._eqDmg||0)-old.stats.dmg;
   if(old.stats.dmgAll) G.char._eqDmgAll=(G.char._eqDmgAll||0)-old.stats.dmgAll;
   if(old.stats.dmgMagic) G.char._eqDmgMagic=(G.char._eqDmgMagic||0)-old.stats.dmgMagic;
   Object.keys(DMG_TYPE_PROP).forEach(t=>{const sk='dmg'+t[0].toUpperCase()+t.slice(1);if(old.stats[sk])G.char[DMG_TYPE_PROP[t]]=(G.char[DMG_TYPE_PROP[t]]||0)-old.stats[sk];});
   if(old.stats.roll) G.char._eqRoll=(G.char._eqRoll||0)-old.stats.roll;
   if(old.stats.armor) G.char._eqArmor=(G.char._eqArmor||0)-old.stats.armor;
   if(old.stats.draw) G.char._eqDraw=(G.char._eqDraw||0)-old.stats.draw;
   if(old.stats.hp){ G.char.maxHP=Math.max(1,G.char.maxHP-old.stats.hp); G.char.hp=Math.min(G.char.hp,G.char.maxHP); }
   if(old.stats.critStunChance) G.char._critStunChance=Math.max(0,(G.char._critStunChance||0)-old.stats.critStunChance);
  }
  if(G.char.inventory.length<maxSlots){
   G.char.inventory.push({id:current.id,name:current.name,icon:current.icon,desc:current.desc,slot:current.slot,stats:current.stats||{},rarity:current.rarity||null});
   toast(`${current.icon} ${current.name} moved to inventory.`,'');
  } else {
   toast(`${current.icon} ${current.name} lost — inventory full!`,'danger');
  }
 }
 // Equip new item
 eq.apply(G.char);
 G.char.equipment[eq.slot]={id:eq.id,name:eq.name,icon:eq.icon,desc:eq.desc,stats:eq.stats,rarity:eq.rarity||null};
 toast(`${eq.icon} Equipped: ${eq.name}!`,'success');
 saveRun(G.char);
 showShop();
}

function buyItem(itemId,cost){
 if(G.char.gold<cost){toast('Not enough gold!','danger');return;}
 G.char.inventory=G.char.inventory||[];
 const maxSlots=getInventoryMaxSlots();
 if(G.char.inventory.length>=maxSlots){toast(`Inventory full! (${maxSlots}/${maxSlots} slots)`,'danger');return;}
 G.char.gold-=cost;
 const item=SHOP.find(i=>i.id===itemId);
 if(!item)return;
 G.char.inventory.push({id:item.id,name:item.name,icon:item.icon,desc:item.desc});
 toast(`${item.icon} ${item.name} added to inventory!`,'success');
 saveRun(G.char);showShop();
}

function equipFromInventory(invIndex) {
 G.char.inventory=G.char.inventory||[];
 const invItem=G.char.inventory[invIndex];
 if(!invItem||!invItem.slot){toast('Cannot equip this item','danger');return;}
 const eq=EQUIPMENT_SHOP.find(e=>e.id===invItem.id)||BOSS_LOOT_LIST.find(e=>e.id===invItem.id);
 if(!eq){toast('Item data not found','danger');return;}
 const current=G.char.equipment?.[eq.slot];
 if(current){
  const old=EQUIPMENT_SHOP.find(e=>e.id===current.id)||BOSS_LOOT_LIST.find(e=>e.id===current.id);
  if(old&&old.stats){
   if(old.stats.dmg) G.char._eqDmg=(G.char._eqDmg||0)-old.stats.dmg;
   if(old.stats.dmgAll) G.char._eqDmgAll=(G.char._eqDmgAll||0)-old.stats.dmgAll;
   if(old.stats.dmgMagic) G.char._eqDmgMagic=(G.char._eqDmgMagic||0)-old.stats.dmgMagic;
   Object.keys(DMG_TYPE_PROP).forEach(t=>{const sk='dmg'+t[0].toUpperCase()+t.slice(1);if(old.stats[sk])G.char[DMG_TYPE_PROP[t]]=(G.char[DMG_TYPE_PROP[t]]||0)-old.stats[sk];});
   if(old.stats.roll) G.char._eqRoll=(G.char._eqRoll||0)-old.stats.roll;
   if(old.stats.armor) G.char._eqArmor=(G.char._eqArmor||0)-old.stats.armor;
   if(old.stats.draw) G.char._eqDraw=(G.char._eqDraw||0)-old.stats.draw;
   if(old.stats.hp){ G.char.maxHP=Math.max(1,G.char.maxHP-old.stats.hp); G.char.hp=Math.min(G.char.hp,G.char.maxHP); }
   if(old.stats.critStunChance) G.char._critStunChance=Math.max(0,(G.char._critStunChance||0)-old.stats.critStunChance);
  }
  // Swap old item into the same inventory slot
  G.char.inventory[invIndex]={id:current.id,name:current.name,icon:current.icon,desc:current.desc,slot:current.slot,stats:current.stats||{}};
 } else {
  G.char.inventory.splice(invIndex,1);
 }
 eq.apply(G.char);
 G.char.equipment=G.char.equipment||{weapon:null,offhand:null,armor:null,trinket:null};
 G.char.equipment[eq.slot]={id:eq.id,name:eq.name,icon:eq.icon,desc:eq.desc,stats:eq.stats||{},rarity:eq.rarity||null};
 toast(`${eq.icon} ${eq.name} equipped from inventory!`,'success');
 saveRun(G.char);
 showShop();
}

function useInventoryItem(itemId){
 const item=SHOP.find(i=>i.id===itemId);
 if(!item){toast('Unknown item','danger');return;}
 G.char.inventory=G.char.inventory||[];
 const idx=G.char.inventory.findIndex(i=>i.id===itemId);
 if(idx===-1){toast('Item not found','danger');return;}
 G.char.inventory.splice(idx,1);
 const msg=item.use(G.char);
 log(`${item.icon} Used ${item.name}: ${msg}`,'log-hit');
 toast(`${item.icon} ${msg}`,'success');
 saveRun(G.char);
 renderHUD();
 renderEnemies();
 // Refresh gear panel if open
 if(document.getElementById('combat-gear-panel')) openCombatGearPanel();
}

// ── VICTORY ───────────────────────────────────────────────────────
function endVictory() {
 recordRunResult(G.char,true);clearRun();
 stopAllMusic(); // stop battle music on victory
 show('screen-victory');
 const c=G.char;
 $('victory-name').textContent=`${c.name} Clears Fate of the Fallen!`;
 $('victory-stats').innerHTML=`
 <div class="run-stat"><span class="run-stat-label">LEVEL</span><span class="run-stat-val">${c.level}</span></div>
 <div class="run-stat"><span class="run-stat-label">ENEMIES SLAIN</span><span class="run-stat-val">${c.runKills||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">GOLD EARNED</span><span class="run-stat-val">${c.runGold||c.gold}g</span></div>
 <div class="run-stat"><span class="run-stat-label">LEGACY POINTS EARNED</span><span class="run-stat-val run-stat-crit">⚡${c.runLP||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">DECK SIZE</span><span class="run-stat-val">${c.deck.length}</span></div>
 <div class="run-stat run-stat-divider"></div>
 <div class="run-stat"><span class="run-stat-label">DAMAGE DEALT</span><span class="run-stat-val run-stat-dmg">${c.runDmgDealt||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">DAMAGE TAKEN</span><span class="run-stat-val run-stat-taken">${c.runDmgTaken||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">HEALING DONE</span><span class="run-stat-val run-stat-heal">${c.runHealingDone||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">HIGHEST HIT</span><span class="run-stat-val run-stat-crit">${c.runHighestHit||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">CARDS PLAYED</span><span class="run-stat-val">${c.runCardsPlayed||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">CRITICAL HITS</span><span class="run-stat-val run-stat-crit">${c.runCrits||0}</span></div>
 <div class="run-stat"><span class="run-stat-label">CRITICAL FAILS</span><span class="run-stat-val run-stat-taken">${c.runCritFails||0}</span></div>
 `;
 $('btn-victory-new').onclick=()=>{G={char:null,encounterIdx:0,phase:'title',currentAdventure:null};initTitle();};
}

// ── LEGACY VAULT ──────────────────────────────────────────────────
function showLegacyShop(forceClass, activeTab, selectedId) {
 show('screen-legacy');
 const co=loadCarryover(), lp=getLegacyPoints(co);
 const unlocked=co.unlockedClasses||['Rogue'];
 if($('legacy-pts'))$('legacy-pts').textContent=lp;
 if($('legacy-lifetime'))$('legacy-lifetime').textContent=co.lifetimeLP||0;
 if(!window._lgClass||!CLASSES[window._lgClass])window._lgClass=unlocked[0]||'Rogue';
 if(forceClass)window._lgClass=forceClass;
 if(!window._lgTab)window._lgTab='upgrades';
 if(activeTab)window._lgTab=activeTab;
 if(!window._lgSelected)window._lgSelected=null;
 if(selectedId!==undefined)window._lgSelected=selectedId;

 const selClass=window._lgClass;
 const levels=co.legacyLevels||{};
 const classLevels=((co.classLegacyLevels||{})[selClass])||{};
 const unlockedEquip=co.unlockedEquipment||[];
 const startingEquip=co.startingEquipment||{};

 const panel=$('legacy-vault-content');
 if(!panel)return;
 panel.innerHTML='';
 panel.style.cssText='display:flex;gap:0;width:100%;flex:1;min-height:0;overflow:hidden;align-items:stretch';

 // ── LEFT: CLASS LIST ─────────────────────────────
 const classCol=document.createElement('div');
 classCol.className='lv-classes';
 // LP summary at top
 const lpTop=document.createElement('div');
 lpTop.style.cssText='padding:12px;background:rgba(200,160,40,0.07);border-bottom:1px solid rgba(120,90,20,0.4);text-align:center;flex-shrink:0';
 lpTop.innerHTML=`<div style="font-family:var(--font-pixel);font-size:13px;color:var(--chrome-gold-rim)">⚡${lp}</div><div style="font-family:var(--font-pixel);font-size:4px;color:var(--parch-text-dim);margin-top:2px">LEGACY POINTS</div>`;
 classCol.appendChild(lpTop);
 const clsLabel=document.createElement('div');
 clsLabel.style.cssText='padding:8px 14px 4px;font-family:var(--font-pixel);font-size:4px;color:rgba(255,255,255,0.2);letter-spacing:0.15em';
 clsLabel.textContent='CLASSES';
 classCol.appendChild(clsLabel);
 const sortedClasses=Object.entries(CLASSES).sort(([a],[b])=>{
 const aU=unlocked.includes(a), bU=unlocked.includes(b);
 if(aU!==bU) return aU?-1:1;
 return 0;
 });
 sortedClasses.forEach(([name,cls])=>{
 const isUnlocked=unlocked.includes(name), isActive=name===selClass;
 const btn=document.createElement('button');
 btn.className='lv-class-btn'+(isActive?' active':'')+(isUnlocked?'':' locked');
 btn.innerHTML=`<span class="cls-icon">${cls.icon}</span><span>${name}</span>`;
 btn.onclick=()=>showLegacyShop(name,window._lgTab);
 classCol.appendChild(btn);
 });
 panel.appendChild(classCol);

 // ── CENTER: TABS + ITEM GRID ──────────────────────
 const center=document.createElement('div');
 center.className='lv-center';

 // Tab bar
 const tabBar=document.createElement('div');
 tabBar.className='lv-tabs';
 const tabs=[{id:'upgrades',label:'📦 Upgrades'},{id:'equipment',label:'⚔️ Equipment'},{id:'heroes',label:`${CLASSES[selClass]?.icon} Heroes`}];
 tabs.forEach(t=>{
 const btn=document.createElement('button');
 btn.className='lv-tab'+(window._lgTab===t.id?' active':'');
 btn.textContent=t.label;
 btn.onclick=()=>showLegacyShop(selClass,t.id,null);
 tabBar.appendChild(btn);
 });
 center.appendChild(tabBar);

 // Unlock banner for locked classes
 const selClassUnlocked=unlocked.includes(selClass);
 if(!selClassUnlocked){
 const cost=CLASS_UNLOCK_COSTS[selClass]||30, canAfford=lp>=cost;
 const banner=document.createElement('div');
 banner.className='lv-unlock-banner';
 banner.innerHTML=`<span>🔒 ${CLASSES[selClass]?.icon} ${selClass} is locked</span>`
   +`<button class="btn btn-primary btn-sm lv-unlock-btn"${canAfford?'':' disabled'}>${canAfford?`Unlock for ⚡${cost} LP`:`Need ⚡${cost} LP (you have ⚡${lp})`}</button>`;
 if(canAfford)banner.querySelector('.lv-unlock-btn').onclick=()=>buyClassUnlock(selClass);
 center.appendChild(banner);
 }

 const itemsPane=document.createElement('div');
 itemsPane.className='lv-items';
 if(!selClassUnlocked){
 const lockOverlay=document.createElement('div');
 lockOverlay.className='lv-lock-overlay';
 lockOverlay.innerHTML=`<div class="lv-lock-icon">🔒</div><div class="lv-lock-msg">${CLASSES[selClass]?.icon} ${selClass} is Locked</div>`;
 itemsPane.appendChild(lockOverlay);
 center.appendChild(itemsPane);
 panel.appendChild(center);
 return;
 }

 const makeItem=(id,icon,name,sub,badge,locked,selected,maxed)=>{
 const div=document.createElement('div');
 let cls='lv-item';
 if(selected)cls+=' selected'; if(maxed)cls+=' maxed'; if(locked)cls+=' locked';
 div.className=cls;
 div.innerHTML=`<div class="lv-item-icon">${icon}</div><div class="lv-item-info"><div class="lv-item-name">${name}</div><div class="lv-item-sub">${sub}</div>${badge?`<div class="lv-item-badge">${badge}</div>`:''}</div>`;
 // Hover → preview detail panel without re-render
 div.addEventListener('mouseenter',()=>renderLvDetail(id));
 div.addEventListener('mouseleave',()=>{ if(window._lgSelected!==id) renderLvDetail(window._lgSelected); });
 return div;
 };

 if(window._lgTab==='upgrades'){
 const k=selClass.toLowerCase().replace(/\s/g,'');
 const arsenalIds=[`lg_arsenal2_${k}`,`lg_arsenal3_${k}`,`lg_arsenal4_${k}`];
 const globalUpgs=LEGACY_UPGRADES.filter(u=>!u.class);
 const arsenalUpgs=LEGACY_UPGRADES.filter(u=>arsenalIds.includes(u.id));
 const classUpgs=LEGACY_UPGRADES.filter(u=>u.class===selClass&&!arsenalIds.includes(u.id));

 const renderGroup=(upgs,title)=>{
 if(!upgs.length)return;
 const hdr=document.createElement('div');hdr.className='lv-category-hdr';hdr.textContent=title;
 itemsPane.appendChild(hdr);
 const grid=document.createElement('div');grid.className='lv-item-grid';
 [...upgs].sort((a,b)=>a.cost-b.cost).forEach(upg=>{
 const lvlStore=upg.class?classLevels:levels;
 const curLvl=lvlStore[upg.id]||0, isMax=curLvl>=upg.maxLevel;
 const nextCost=upg.cost*(curLvl+1);
 const prereqMet=!upg.requires||(lvlStore[upg.requires]||0)>=1;
 const sub=isMax?'MAX':prereqMet?`⚡${nextCost} LP`:`🔒 Locked`;
 const badge=upg.maxLevel>1?`Lv ${curLvl}/${upg.maxLevel}`:(isMax?'✔':'');
 const el=makeItem(upg.id,isMax?'✅':prereqMet?upg.icon:'🔒',upg.name,sub,badge,!prereqMet,window._lgSelected===upg.id,isMax);
 el.onclick=()=>{ if(prereqMet){window._lgSelected=upg.id; document.querySelectorAll('.lv-item').forEach(x=>x.classList.remove('selected')); el.classList.add('selected'); renderLvDetail(upg.id);} };
 grid.appendChild(el);
 });
 itemsPane.appendChild(grid);
 };
 renderGroup(globalUpgs,'GENERAL UPGRADES');
 if(classUpgs.length)renderGroup(classUpgs,selClass.toUpperCase()+' CLASS UPGRADES');
 if(arsenalUpgs.length)renderGroup(arsenalUpgs,'ARSENAL — DRAFT TIER UNLOCKS');

 } else if(window._lgTab==='equipment'){
 // ── STARTING EQUIPMENT ───────────────────────────────────────
 const startHdr=document.createElement('div');startHdr.className='lv-category-hdr';
 startHdr.textContent='🏪 STARTING EQUIPMENT';
 itemsPane.appendChild(startHdr);
 const slotSubLabels={weapon:'── WEAPONS ──',offhand:'── OFF-HAND ──',armor:'── ARMOR ──',trinket:'── TRINKETS ──'};
 ['weapon','offhand','armor','trinket'].forEach(slot=>{
  const baseItems=EQUIPMENT_SHOP.filter(e=>e.slot===slot&&!e.bossLoot);
  if(!baseItems.length) return;
  const subHdr=document.createElement('div');
  subHdr.style.cssText='font-family:var(--font-pixel);font-size:5px;color:var(--parch-text-dim);letter-spacing:0.1em;margin:8px 0 4px;padding-left:4px';
  subHdr.textContent=slotSubLabels[slot];
  itemsPane.appendChild(subHdr);
  const grid=document.createElement('div');grid.className='lv-item-grid';
  baseItems.forEach(eq=>{
   const isUnlocked=unlockedEquip.includes(eq.id);
   const isStart=startingEquip[slot]===eq.id;
   const lpCost=Math.round(eq.cost*0.6);
   const sub=isUnlocked?(isStart?'★ Starting Gear':'⚡ Set as starter'):`⚡${lpCost} LP`;
   const badge=isStart?'LOADOUT':'';
   const el=makeItem(eq.id,eq.icon,eq.name,sub,badge,false,window._lgSelected===eq.id,isStart);
   el.onclick=()=>{window._lgSelected=eq.id; document.querySelectorAll('.lv-item').forEach(x=>x.classList.remove('selected')); el.classList.add('selected'); renderLvDetail(eq.id);};
   grid.appendChild(el);
  });
  itemsPane.appendChild(grid);
 });
 // ── DUNGEON DROPS ─────────────────────────────────────────────
 DUNGEONS.forEach(dg=>{
  const dgHdr=document.createElement('div');dgHdr.className='lv-category-hdr';
  dgHdr.textContent=`${dg.icon} ${dg.name.toUpperCase()}`;
  itemsPane.appendChild(dgHdr);
  dg.bosses.forEach(boss=>{
   const bossItems=BOSS_LOOT[boss.key];
   if(!bossItems||!bossItems.length) return;
   const bossHdr=document.createElement('div');
   bossHdr.style.cssText='font-family:var(--font-pixel);font-size:5px;color:var(--chrome-gold);letter-spacing:0.1em;margin:8px 0 4px;padding-left:4px';
   bossHdr.textContent=`── ${boss.icon} ${boss.name.toUpperCase()} ──`;
   itemsPane.appendChild(bossHdr);
   const grid=document.createElement('div');grid.className='lv-item-grid';
   bossItems.forEach(item=>{
    const isUnlocked=unlockedEquip.includes(item.id);
    const rar=RARITY[item.rarity]||null;
    const sub=isUnlocked?'✔ Found':'🔒 Not yet found';
    const badge=rar?rar.label:'';
    const el=makeItem(item.id,item.icon,item.name,sub,badge,!isUnlocked,window._lgSelected===item.id,false);
    if(rar&&isUnlocked) el.style.setProperty('--lv-item-accent',rar.color);
    el.onclick=()=>{window._lgSelected=item.id; document.querySelectorAll('.lv-item').forEach(x=>x.classList.remove('selected')); el.classList.add('selected'); renderLvDetail(item.id);};
    grid.appendChild(el);
   });
   itemsPane.appendChild(grid);
  });
 });

 } else if(window._lgTab==='heroes'){
 const classHeroes=HEROES[selClass]||[];
 const cd=getClassData(co,selClass), unlockedHeroes=cd.unlockedHeroes||[];
 const hdr=document.createElement('div');hdr.className='lv-category-hdr';
 hdr.textContent=selClass.toUpperCase()+' HEROES';
 itemsPane.appendChild(hdr);
 const grid=document.createElement('div');grid.className='lv-item-grid';
 classHeroes.forEach(hero=>{
 const heroUnlocked=hero.unlockCost===0||unlockedHeroes.includes(hero.id);
 const sub=heroUnlocked?'✔ Unlocked':`⚡${hero.unlockCost} LP`;
 const el=makeItem(hero.id,hero.icon,hero.name,sub,'',false,window._lgSelected===hero.id,heroUnlocked);
 el.onclick=()=>{window._lgSelected=hero.id; document.querySelectorAll('.lv-item').forEach(x=>x.classList.remove('selected')); el.classList.add('selected'); renderLvDetail(hero.id);};
 grid.appendChild(el);
 });
 itemsPane.appendChild(grid);
 }
 center.appendChild(itemsPane);
 panel.appendChild(center);

 // ── RIGHT: DETAIL PANEL ───────────────────────────
 const detail=document.createElement('div');
 detail.className='lv-detail';

 const sel=window._lgSelected;
 if(!sel){
 detail.innerHTML=`<div class="lv-empty">Select an item<br>to see details</div>`;
 } else if(window._lgTab==='upgrades'){
 const upg=LEGACY_UPGRADES.find(u=>u.id===sel);
 if(upg){
 const curLvl=levels[upg.id]||0, isMax=curLvl>=upg.maxLevel;
 const nextCost=upg.cost*(curLvl+1), canAfford=lp>=nextCost;
 const prereqMet=!upg.requires||(levels[upg.requires]||0)>=1;
 const prereqUpg=!prereqMet?LEGACY_UPGRADES.find(u=>u.id===upg.requires):null;
 const pips=upg.maxLevel>1?Array.from({length:upg.maxLevel},(_,i)=>`<div class="lv-pip${i<curLvl?' filled':''}"></div>`).join(''):'';
 detail.innerHTML=`
 <div class="lv-detail-icon">${upg.icon}</div>
 <div class="lv-detail-name">${upg.name}</div>
 ${upg.class?`<div style="font-family:var(--font-pixel);font-size:5px;color:var(--parch-text-dim);margin-bottom:8px">${upg.class} Class</div>`:'<div style="font-family:var(--font-pixel);font-size:5px;color:var(--parch-text-dim);margin-bottom:8px">Global</div>'}
 ${upg.maxLevel>1?`<div class="lv-detail-progress"><div class="lv-detail-prog-label">Level ${curLvl} / ${upg.maxLevel}</div><div class="lv-pips" style="margin-bottom:4px">${pips}</div></div>`:''}
 <div class="lv-detail-desc">${prereqMet?upg.desc(Math.max(1,curLvl)):`Requires: ${prereqUpg?.name||upg.requires}`}</div>
 ${!isMax&&prereqMet?`<div class="lv-detail-cost">⚡ ${nextCost} LP per level</div>`:''}
 <div class="lv-detail-btn">
 ${isMax?`<div style="font-family:var(--font-pixel);font-size:6px;color:var(--chrome-gold-rim);text-align:center">✔ MAXED OUT</div>`:
 !prereqMet?`<button class="btn btn-ghost" style="width:100%" disabled>🔒 ${prereqUpg?.name||'Prerequisite'} required</button>`:
 `<button class="btn btn-primary${canAfford?'':' btn-ghost'}" style="width:100%" ${canAfford?'':'disabled'} onclick="buyLegacyUpgrade('${upg.id}')">⚡${nextCost} LP — Upgrade${curLvl>0?' (Lv '+(curLvl+1)+')':''}</button>`}
 </div>`;
 }
 } else if(window._lgTab==='equipment'){
 const eq=EQUIPMENT_SHOP.find(e=>e.id===sel);
 if(eq){
 const isUnlocked=unlockedEquip.includes(eq.id);
 const isStart=startingEquip[eq.slot]===eq.id;
 const isBoss=!!eq.bossLoot;
 const rar=isBoss&&RARITY[eq.rarity]?RARITY[eq.rarity]:null;
 const rarColor=rar?rar.color:'var(--chrome-gold-hi)';
 const lpCost=isBoss?null:Math.round(eq.cost*0.6);
 const canAfford=!isBoss&&lp>=(lpCost||0);
 const statsStr=Object.entries(eq.stats||{}).filter(([k,v])=>v&&typeof v==='number').map(([k,v])=>`${v>0?'+':''}${v} ${k}`).join('<br>');
 const bossName=isBoss?getBossNameForItem(eq.id):null;
 if(isBoss&&!isUnlocked){
 detail.innerHTML=`
 <div class="lv-detail-icon" style="filter:grayscale(1) brightness(0.4)">❓</div>
 <div class="lv-detail-name" style="color:var(--parch-text-dim)">??? </div>
 <div class="lv-detail-desc" style="color:var(--parch-text-dim);font-style:italic">This relic has not yet been found.</div>
 <div class="lv-detail-cost" style="color:rgba(255,120,120,0.7)">🔒 Defeat ${bossName} to discover it</div>
 <div class="lv-detail-btn" style="display:flex;flex-direction:column;gap:6px">
 <button class="btn btn-ghost" style="width:100%" disabled>🔒 Not yet found</button>
 </div>`;
 } else {
 detail.innerHTML=`
 <div class="lv-detail-icon" style="${rar?`filter:drop-shadow(0 0 12px ${rar.color}88)`:''}">${eq.icon}</div>
 ${rar?`<div style="font-family:var(--font-pixel);font-size:6px;color:${rar.color};letter-spacing:0.12em;margin-bottom:4px">${rar.label.toUpperCase()}</div>`:''}
 <div class="lv-detail-name" style="color:${rarColor}">${eq.name}</div>
 <div style="font-family:var(--font-pixel);font-size:5px;color:var(--parch-text-dim);margin-bottom:8px;text-transform:uppercase">${eq.slot}</div>
 ${statsStr?`<div class="lv-detail-stats">${statsStr}</div>`:''}
 <div class="lv-detail-desc">${eq.desc}</div>
 ${isBoss?`<div style="font-family:var(--font-pixel);font-size:5px;color:rgba(200,160,40,0.6);margin-bottom:4px">Drop: ${bossName}</div>`:''}
 ${isUnlocked?`<div class="lv-detail-cost">✔ ${isBoss?'Found':'Unlocked'}</div>`:`<div class="lv-detail-cost">⚡ ${lpCost} LP to unlock</div>`}
 <div class="lv-detail-btn" style="display:flex;flex-direction:column;gap:6px">
 ${isUnlocked
 ?isStart
  ?`<button class="btn btn-ghost" style="width:100%" onclick="toggleStartEquip('${eq.id}','${eq.slot}',false)">✕ Remove from loadout</button>`
  :`<button class="btn btn-primary" style="width:100%" onclick="toggleStartEquip('${eq.id}','${eq.slot}',true)">★ Set as starting ${eq.slot}</button>`
 :`<button class="btn btn-primary${canAfford?'':' btn-ghost'}" style="width:100%" ${canAfford?'':'disabled'} onclick="buyLegacyEquip('${eq.id}')">⚡${lpCost} LP — Unlock</button>`
 }
 </div>`;
 }
 }
 } else if(window._lgTab==='heroes'){
 const classHeroes=HEROES[selClass]||[];
 const cd=getClassData(co,selClass), unlockedHeroes=cd.unlockedHeroes||[];
 const hero=classHeroes.find(h=>h.id===sel);
 if(hero){
 const heroUnlocked=hero.unlockCost===0||unlockedHeroes.includes(hero.id);
 const canAfford=lp>=hero.unlockCost;
 detail.innerHTML=`
 <div class="lv-detail-icon">${hero.icon}</div>
 <div class="lv-detail-name">${hero.name}</div>
 <div style="font-family:var(--font-pixel);font-size:5px;color:var(--parch-text-dim);margin-bottom:10px">❤ ${hero.hp} HP</div>
 <div style="font-family:var(--font-pixel);font-size:6px;color:var(--chrome-gold-hi);margin-bottom:4px">${hero.abilityName} <span style="color:var(--parch-text-dim);font-size:5px">(DC ${hero.abilityDC}+)</span></div>
 <div class="lv-detail-desc">${hero.abilityDesc}</div>
 <div style="font-size:9px;color:rgba(255,255,255,0.2);font-style:italic;margin-bottom:12px">"${hero.lore}"</div>
 ${heroUnlocked?`<div class="lv-detail-cost">✔ Unlocked</div>`:`<div class="lv-detail-cost">⚡ ${hero.unlockCost} LP</div>`}
 <div class="lv-detail-btn">
 ${heroUnlocked
 ?`<div style="font-family:var(--font-pixel);font-size:6px;color:var(--chrome-gold-rim);text-align:center">AVAILABLE TO PLAY</div>`
 :hero.unlockCost===0
 ?`<div style="font-family:var(--font-pixel);font-size:6px;color:#5d5;text-align:center">FREE STARTER</div>`
 :`<button class="btn btn-primary${canAfford?'':' btn-ghost'}" style="width:100%" ${canAfford?'':'disabled'} onclick="buyHeroUnlock('${hero.id}','${selClass}')">⚡${hero.unlockCost} LP — Unlock</button>`
 }
 </div>`;
 }
 }

 // Initial detail render
 setTimeout(()=>renderLvDetail(sel),0);

 panel.appendChild(detail);
 if($('btn-legacy-back'))$('btn-legacy-back').onclick=initTitle;
}

function renderLvDetail(sel) {
 const detailEl=document.querySelector('.lv-detail');
 if(!detailEl)return;
 const co=loadCarryover(), lp=getLegacyPoints(co);
 const selClass=window._lgClass||'Rogue';
 const tab=window._lgTab||'upgrades';
 const levels=co.legacyLevels||{};
 const classLevels=((co.classLegacyLevels||{})[selClass])||{};
 const unlockedEquip=co.unlockedEquipment||[];
 const startingEquip=co.startingEquipment||{};

 if(!sel){
 detailEl.innerHTML='<div class="lv-empty">Hover or click an item<br>to see details</div>';
 return;
 }

 if(tab==='upgrades'){
 const upg=LEGACY_UPGRADES.find(u=>u.id===sel);
 if(!upg){detailEl.innerHTML='<div class="lv-empty">Hover or click an item<br>to see details</div>';return;}
 const lvlStore=upg.class?classLevels:levels;
 const curLvl=lvlStore[upg.id]||0, isMax=curLvl>=upg.maxLevel;
 const nextCost=upg.cost*(curLvl+1), canAfford=lp>=nextCost;
 const prereqMet=!upg.requires||(lvlStore[upg.requires]||0)>=1;
 const prereqUpg=!prereqMet?LEGACY_UPGRADES.find(u=>u.id===upg.requires):null;
 const pips=upg.maxLevel>1?Array.from({length:upg.maxLevel},(_,i)=>`<div class="lv-pip${i<curLvl?' filled':''}"></div>`).join(''):'';
 detailEl.innerHTML=`
 <div class="lv-detail-icon">${upg.icon}</div>
 <div class="lv-detail-name">${upg.name}</div>
 <div style="font-family:var(--font-pixel);font-size:5px;color:var(--parch-text-dim);margin-bottom:8px">${upg.class?upg.class+' Class':'General Upgrade'}</div>
 ${upg.maxLevel>1?`<div class="lv-detail-progress"><div class="lv-detail-prog-label">Level ${curLvl} / ${upg.maxLevel}</div><div class="lv-pips" style="margin-bottom:6px">${pips}</div></div>`:''}
 <div class="lv-detail-desc">${prereqMet?upg.desc(Math.max(1,curLvl)):`<span style="color: ">Requires: ${prereqUpg?.name||upg.requires}</span>`}</div>
 ${!isMax&&prereqMet?`<div class="lv-detail-cost">⚡ ${nextCost} LP</div>`:''}
 <div class="lv-detail-btn">
 ${isMax
 ?`<div style="font-family:var(--font-pixel);font-size:6px;color:var(--chrome-gold-rim);text-align:center">✔ MAXED OUT</div>`
 :!prereqMet
 ?`<button class="btn btn-ghost" style="width:100%" disabled>🔒 ${prereqUpg?.name||'Prerequisite'} required</button>`
 :`<button class="btn btn-primary${canAfford?'':' btn-ghost'}" style="width:100%" ${canAfford?'':'disabled'} onclick="buyLegacyUpgrade('${upg.id}')">⚡${nextCost} LP — Upgrade${curLvl>0?' (Lv '+(curLvl+1)+')':''}</button>`}
 </div>`;

 } else if(tab==='equipment'){
 const eq=EQUIPMENT_SHOP.find(e=>e.id===sel);
 if(!eq){detailEl.innerHTML='<div class="lv-empty">Hover or click an item<br>to see details</div>';return;}
 const isUnlocked=unlockedEquip.includes(eq.id);
 const isStart=startingEquip[eq.slot]===eq.id;
 const isBoss=!!eq.bossLoot;
 const rar=isBoss&&RARITY[eq.rarity]?RARITY[eq.rarity]:null;
 const rarColor=rar?rar.color:'var(--chrome-gold-hi)';
 const lpCost=isBoss?null:Math.round(eq.cost*0.6);
 const canAfford=!isBoss&&lp>=(lpCost||0);
 const statsStr=Object.entries(eq.stats||{}).filter(([k,v])=>v&&typeof v==='number').map(([k,v])=>`${v>0?'+':''}${v} ${k}`).join('<br>');
 const bossName=isBoss?getBossNameForItem(eq.id):null;
 if(isBoss&&!isUnlocked){
 detailEl.innerHTML=`
 <div class="lv-detail-icon" style="filter:grayscale(1) brightness(0.4)">❓</div>
 <div class="lv-detail-name" style="color:var(--parch-text-dim)">??? </div>
 <div class="lv-detail-desc" style="color:var(--parch-text-dim);font-style:italic">This relic has not yet been found.</div>
 <div class="lv-detail-cost" style="color:rgba(255,120,120,0.7)">🔒 Defeat ${bossName} to discover it</div>
 <div class="lv-detail-btn" style="display:flex;flex-direction:column;gap:6px">
 <button class="btn btn-ghost" style="width:100%" disabled>🔒 Not yet found</button>
 </div>`;
 } else {
 detailEl.innerHTML=`
 <div class="lv-detail-icon" style="${rar?`filter:drop-shadow(0 0 12px ${rar.color}88)`:''}">${eq.icon}</div>
 ${rar?`<div style="font-family:var(--font-pixel);font-size:6px;color:${rar.color};letter-spacing:0.12em;margin-bottom:4px">${rar.label.toUpperCase()}</div>`:''}
 <div class="lv-detail-name" style="color:${rarColor}">${eq.name}</div>
 <div style="font-family:var(--font-pixel);font-size:5px;color:var(--parch-text-dim);margin-bottom:8px;text-transform:uppercase">${eq.slot}</div>
 ${statsStr?`<div class="lv-detail-stats">${statsStr}</div>`:''}
 <div class="lv-detail-desc">${eq.desc}</div>
 ${isBoss?`<div style="font-family:var(--font-pixel);font-size:5px;color:rgba(200,160,40,0.6);margin-bottom:4px">Drop: ${bossName}</div>`:''}
 ${isUnlocked?`<div class="lv-detail-cost">✔ ${isBoss?'Found':'Unlocked'}</div>`:`<div class="lv-detail-cost">⚡ ${lpCost} LP to unlock</div>`}
 <div class="lv-detail-btn" style="display:flex;flex-direction:column;gap:6px">
 ${isUnlocked
 ?isStart
  ?`<button class="btn btn-ghost" style="width:100%" onclick="toggleStartEquip('${eq.id}','${eq.slot}',false)">✕ Remove from loadout</button>`
  :`<button class="btn btn-primary" style="width:100%" onclick="toggleStartEquip('${eq.id}','${eq.slot}',true)">★ Set as starting ${eq.slot}</button>`
 :`<button class="btn btn-primary${canAfford?'':' btn-ghost'}" style="width:100%" ${canAfford?'':'disabled'} onclick="buyLegacyEquip('${eq.id}')">⚡${lpCost} LP — Unlock</button>`
 }
 </div>`;
 }

 } else if(tab==='heroes'){
 const classHeroes=HEROES[selClass]||[];
 const cd=getClassData(co,selClass), unlockedHeroes=cd.unlockedHeroes||[];
 const hero=classHeroes.find(h=>h.id===sel);
 if(!hero){detailEl.innerHTML='<div class="lv-empty">Hover or click an item<br>to see details</div>';return;}
 const heroUnlocked=hero.unlockCost===0||unlockedHeroes.includes(hero.id);
 const canAfford=lp>=hero.unlockCost;
 detailEl.innerHTML=`
 <div class="lv-detail-icon">${hero.icon}</div>
 <div class="lv-detail-name">${hero.name}</div>
 <div style="font-family:var(--font-pixel);font-size:5px;color:var(--parch-text-dim);margin-bottom:10px">❤ ${hero.hp} HP</div>
 <div style="font-family:var(--font-pixel);font-size:6px;color:var(--chrome-gold-hi);margin-bottom:4px">${hero.abilityName} <span style="color:var(--parch-text-dim);font-size:5px">(DC ${hero.abilityDC}+)</span></div>
 <div class="lv-detail-desc">${hero.abilityDesc}</div>
 <div style="font-size:9px;color:rgba(255,255,255,0.2);font-style:italic;margin-bottom:12px">"${hero.lore}"</div>
 ${heroUnlocked?`<div class="lv-detail-cost">✔ Unlocked</div>`:`<div class="lv-detail-cost">⚡ ${hero.unlockCost} LP</div>`}
 <div class="lv-detail-btn">
 ${heroUnlocked
 ?`<div style="font-family:var(--font-pixel);font-size:6px;color:var(--chrome-gold-rim);text-align:center">AVAILABLE TO PLAY</div>`
 :hero.unlockCost===0
 ?`<div style="font-family:var(--font-pixel);font-size:6px;color:#5d5;text-align:center">FREE STARTER</div>`
 :`<button class="btn btn-primary${canAfford?'':' btn-ghost'}" style="width:100%" ${canAfford?'':'disabled'} onclick="buyHeroUnlock('${hero.id}','${selClass}')">⚡${hero.unlockCost} LP — Unlock</button>`}
 </div>`;
 }
}

function confirmRefundUpgrades() {
 const co=loadCarryover();
 const selClass=window._lgClass||'Rogue';
 const generalLevels=co.legacyLevels||{};
 const classLevels=((co.classLegacyLevels||{})[selClass])||{};
 let generalRefund=0, classRefund=0;
 Object.entries(generalLevels).forEach(([id,lvl])=>{
 const upg=LEGACY_UPGRADES.find(u=>u.id===id&&!u.class);
 if(upg&&lvl>0){ for(let l=1;l<=lvl;l++) generalRefund+=upg.cost*l; }
 });
 Object.entries(classLevels).forEach(([id,lvl])=>{
 const upg=LEGACY_UPGRADES.find(u=>u.id===id&&u.class===selClass);
 if(upg&&lvl>0){ for(let l=1;l<=lvl;l++) classRefund+=upg.cost*l; }
 });
 const totalRefund=generalRefund+classRefund;
 if(totalRefund===0){toast('No upgrades to refund.','');return;}
 const breakdown=[];
 if(generalRefund>0)breakdown.push(`⚡${generalRefund} LP from General upgrades (shared)`);
 if(classRefund>0)breakdown.push(`⚡${classRefund} LP from ${selClass} upgrades`);
 modal(
 '↩ Refund All Upgrades?',
 `Refunding:\n${breakdown.join('\n')}\n\nTotal: ⚡${totalRefund} LP returned.\n\nClass/hero/equipment unlocks are NOT affected.`,
 'Confirm Refund',
 ()=>{
 if(generalRefund>0) co.legacyLevels={};
 if(classRefund>0){ co.classLegacyLevels=co.classLegacyLevels||{}; co.classLegacyLevels[selClass]={}; }
 co.legacyPoints=(co.legacyPoints||0)+totalRefund;
 saveCarryover(co);
 toast(`↩ Refunded ⚡${totalRefund} LP!`,'success');
 showLegacyShop(selClass,window._lgTab);
 }
 );
 // Add a cancel button to the modal
 const mBtn=$('m-btn');
 if(mBtn){
 const cancelBtn=document.createElement('button');
 cancelBtn.className='btn btn-ghost';
 cancelBtn.textContent='Cancel';
 cancelBtn.style.marginRight='8px';
 cancelBtn.onclick=()=>$('modal-overlay').classList.remove('open');
 mBtn.parentElement.insertBefore(cancelBtn,mBtn);
 }
}

function buyClassUnlock(clsName){
 const co=loadCarryover(),cost=CLASS_UNLOCK_COSTS[clsName]||30,lp=getLegacyPoints(co);
 if(lp<cost){toast('Not enough LP!','danger');return;}
 co.legacyPoints=(co.legacyPoints||0)-cost;
 co.unlockedClasses=co.unlockedClasses||['Rogue'];
 if(!co.unlockedClasses.includes(clsName))co.unlockedClasses.push(clsName);
 saveCarryover(co);toast(`${CLASSES[clsName]?.icon} ${clsName} unlocked!`,'success');
 showLegacyShop(clsName);
}
function buyHeroUnlock(heroId,clsName){
 const co=loadCarryover(),hero=getHero(heroId);if(!hero)return;
 const lp=getLegacyPoints(co);
 if(lp<hero.unlockCost){toast('Not enough LP!','danger');return;}
 co.legacyPoints=(co.legacyPoints||0)-hero.unlockCost;
 const cd=getClassData(co,clsName);
 cd.unlockedHeroes=cd.unlockedHeroes||[];
 if(!cd.unlockedHeroes.includes(heroId))cd.unlockedHeroes.push(heroId);
 saveCarryover(co);toast(`${hero.icon} ${hero.name.split(',')[0]} unlocked!`,'success');
 showLegacyShop(clsName);
}
function buyLegacyEquip(itemId){
 const co=loadCarryover();
 const item=EQUIPMENT_SHOP.find(e=>e.id===itemId);if(!item)return;
 const lpCost=Math.round(item.cost*0.6);
 const lp=getLegacyPoints(co);
 if(lp<lpCost){toast('Not enough LP!','danger');return;}
 co.legacyPoints=(co.legacyPoints||0)-lpCost;
 co.unlockedEquipment=co.unlockedEquipment||[];
 if(!co.unlockedEquipment.includes(itemId))co.unlockedEquipment.push(itemId);
 saveCarryover(co);
 toast(`${item.icon} ${item.name} unlocked!`,'success');
 showLegacyShop();
}

function toggleStartEquip(itemId, slot, equip){
 const co=loadCarryover();
 co.startingEquipment=co.startingEquipment||{};
 if(equip){
 co.startingEquipment[slot]=itemId;
 const item=EQUIPMENT_SHOP.find(e=>e.id===itemId);
 toast(`${item?.icon||'⚔️'} ${item?.name||itemId} set as starting ${slot}!`,'success');
 } else {
 delete co.startingEquipment[slot];
 toast('Removed from starting loadout.','');
 }
 saveCarryover(co);
 showLegacyShop();
}

function buyLegacyUpgrade(upgradeId){
 const co=loadCarryover(),upg=LEGACY_UPGRADES.find(u=>u.id===upgradeId);if(!upg)return;
 // Determine which store to use
 const isClassUpg=!!upg.class;
 const selClass=window._lgClass||'Rogue';
 if(isClassUpg){
 co.classLegacyLevels=co.classLegacyLevels||{};
 co.classLegacyLevels[selClass]=co.classLegacyLevels[selClass]||{};
 } else {
 co.legacyLevels=co.legacyLevels||{};
 }
 const levels=isClassUpg?co.classLegacyLevels[selClass]:co.legacyLevels;
 if(upg.requires){
 const reqLvl=levels[upg.requires]||0;
 if(reqLvl<1){const rq=LEGACY_UPGRADES.find(u=>u.id===upg.requires);toast(`Requires ${rq?.name||upg.requires} first!`,'danger');return;}
 }
 const curLvl=levels[upgradeId]||0;
 if(curLvl>=upg.maxLevel){toast('Already maxed!','danger');return;}
 const cost=upg.cost*(curLvl+1);
 if((co.legacyPoints||0)<cost){toast('Not enough LP!','danger');return;}
 co.legacyPoints-=cost;
 levels[upgradeId]=curLvl+1;
 saveCarryover(co);
 toast(`${upg.icon} ${upg.name} Lv${curLvl+1}!`,'success');
 showLegacyShop(selClass,window._lgTab);
}

// ── BOOT ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
 initTitle();
 // Attempt autoplay; if blocked, start on first user interaction
 const m = document.getElementById('title-music');
 if(m){
 try{ const sv=localStorage.getItem('musicVolume'); m.volume=sv!==null?parseInt(sv)/100:0.45; }catch(e){ m.volume=0.45; }
 m.play().then(()=>{
 window._titleMusicUnlocked = true;
 const btn=document.getElementById('btn-mute');
 if(btn) btn.textContent = m.muted ? '🔇 Muted' : '🔊 Music';
 }).catch(()=>{
 const unlock=()=>{
  m.play().catch(()=>{});
  window._titleMusicUnlocked = true;
  const btn=document.getElementById('btn-mute');
  if(btn) btn.textContent = m.muted ? '🔇 Muted' : '🔊 Music';
  document.removeEventListener('click',unlock);
  document.removeEventListener('keydown',unlock);
 };
 document.addEventListener('click', unlock);
 document.addEventListener('keydown', unlock);
 });
 }
});

