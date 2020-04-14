import Precision from '../assets/precision/precision.png'
import PresstheAttack from '../assets/precision/keystones/press-the-attack.png'
import LethalTempo from '../assets/precision/keystones/lethal-tempo.png'
import FleetFootwork from '../assets/precision/keystones/fleet-footwork.png'
import Conqueror from '../assets/precision/keystones/conqueror.png'
import Overheal from '../assets/precision/t1/overheal.png'
import Triumph from '../assets/precision/t1/triumph.png'
import PresenceofMind from '../assets/precision/t1/presence-of-mind.png'
import LegendAlacrity from '../assets/precision/t2/legend-alacrity.png'
import LegendTenacity from '../assets/precision/t2/legend-tenacity.png'
import LegendBloodline from '../assets/precision/t2/legend-bloodline.png'
import CoupdeGrace from '../assets/precision/t3/coup-de-grace.png'
import CutDown from '../assets/precision/t3/cut-down.png'
import LastStand from '../assets/precision/t3/last-stand.png'
import Domination from '../assets/domination/domination.png'
import Electrocute from '../assets/domination/keystones/electrocute.png'
import Predator from '../assets/domination/keystones/predator.png'
import DarkHarvest from '../assets/domination/keystones/dark-harvest.png'
import HailofBlades from '../assets/domination/keystones/hail-of-blades.png'
import CheapShot from '../assets/domination/t1/cheap-shot.png'
import TasteofBlood from '../assets/domination/t1/taste-of-blood.png'
import SuddenImpact from '../assets/domination/t1/sudden-impact.png'
import ZombieWard from '../assets/domination/t2/zombie-ward.png'
import GhostPoro from '../assets/domination/t2/ghost-poro.png'
import EyeballCollection from '../assets/domination/t2/eyeball-collection.png'
import RavenousHunter from '../assets/domination/t3/ravenous-hunter.png'
import IngeniousHunter from '../assets/domination/t3/ingenious-hunter.png'
import RelentlessHunter from '../assets/domination/t3/relentless-hunter.png'
import UltimateHunter from '../assets/domination/t3/ultimate-hunter.png'
import Sorcery from '../assets/sorcery/sorcery.png'
import SummonAery from '../assets/sorcery/keystones/summon-aery.png'
import ArcaneComet from '../assets/sorcery/keystones/arcane-comet.png'
import PhaseRush from '../assets/sorcery/keystones/phase-rush.png'
import NullifyingOrb from '../assets/sorcery/t1/nullifying-orb.png'
import ManaflowBand from '../assets/sorcery/t1/manaflow-band.png'
import NimbusCloak from '../assets/sorcery/t1/nimbus-cloak.png'
import Transcendence from '../assets/sorcery/t2/transcendence.png'
import Celerity from '../assets/sorcery/t2/celerity.png'
import AbsoluteFocus from '../assets/sorcery/t2/absolute-focus.png'
import Scorch from '../assets/sorcery/t3/scorch.png'
import Waterwalking from '../assets/sorcery/t3/waterwalking.png'
import GatheringStorm from '../assets/sorcery/t3/gathering-storm.png'
import Resolve from '../assets/resolve/resolve.png'
import GraspoftheUndying from '../assets/resolve/keystones/grasp-of-the-undying.png'
import Aftershock from '../assets/resolve/keystones/aftershock.png'
import Guardian from '../assets/resolve/keystones/guardian.png'
import Demolish from '../assets/resolve/t1/demolish.png'
import FontofLife from '../assets/resolve/t1/font-of-life.png'
import ShieldBash from '../assets/resolve/t1/shield-bash.png'
import Conditioning from '../assets/resolve/t2/conditioning.png'
import SecondWind from '../assets/resolve/t2/second-wind.png'
import BonePlating from '../assets/resolve/t2/bone-plating.png'
import Overgrowth from '../assets/resolve/t3/overgrowth.png'
import Revitalize from '../assets/resolve/t3/revitalize.png'
import Unflinching from '../assets/resolve/t3/unflinching.png'
import Inspiration from '../assets/inspiration/inspiration.png'
import GlacialAugment from '../assets/inspiration/keystones/glacial-augment.png'
import UnsealedSpellbook from '../assets/inspiration/keystones/unsealed-spellbook.png'
import PrototypeOmnistone from '../assets/inspiration/keystones/prototype-omnistone.png'
import HextechFlashtraption from '../assets/inspiration/t1/hextech-flashtraption.png'
import MagicalFootwear from '../assets/inspiration/t1/magical-footwear.png'
import PerfectTiming from '../assets/inspiration/t1/perfect-timing.png'
import FuturesMarket from '../assets/inspiration/t2/futures-market.png'
import MinionDematerializer from '../assets/inspiration/t2/minion-dematerializer.png'
import BiscuitDelivery from '../assets/inspiration/t2/biscuit-delivery.png'
import CosmicInsight from '../assets/inspiration/t3/cosmic-insight.png'
import ApproachVelocity from '../assets/inspiration/t3/approach-velocity.png'
import TimeWarpTonic from '../assets/inspiration/t3/time-warp-tonic.png'

import PrecisionBg from '../assets/precision/bg.png'
import SorceryBg from '../assets/sorcery/bg.png'
import DominationBg from '../assets/domination/bg.png'
import InspirationBg from '../assets/inspiration/bg.png'
import ResolveBg from '../assets/resolve/bg.png'
import BandleBg from '../assets/bandle/bg.png'

import Bandle from '../assets/bandle/bandle.png'
import WRay from '../assets/bandle/keystones/wray.png'
import Magnet from '../assets/bandle/keystones/magnet.png'
import Horn from '../assets/bandle/keystones/horn.png'
import Unlucky7s from '../assets/bandle/t1/unlucky7s.png'
import NoPlaceHome from '../assets/bandle/t1/home.png'
import Portal from '../assets/bandle/t1/portal.png'
import Chest from '../assets/bandle/t1/chest.png'
import Hex from '../assets/bandle/t2/hex.png'
import Delivery from '../assets/bandle/t2/delivery.png'

export default [
  {
    name: 'Secondary Path',
    src: '',
    colorHex: '#E6D3A0',
    colorRGB: '230, 211, 160',
    tierNames: ['Secondary', 'Secondary', 'Secondary'],
    keystones: [],
    tier1: [],
    tier2: [],
    tier3: [],
  },
  {
    name: 'Bandle',
    subtitle: 'Subtittle goes here',
    details: 'A short one sentance summary of path',
    src: Bandle,
    bg: BandleBg,
    // colorHex: '#EA781E',
    // colorRGB: '234,120,30',
    colorHex: '#11aeff',
    colorRGB: '17,174,255',
    tierNames: ['Enchantments', 'Scoops', 'Tactics'],
    keystones: [
      {
        name: '[W]-ray',
        details:
          'Damaging or debuffing an enemy champion with your champion’s [W] (i.e. second ability) applies an additional 10 − 40 (based on level) (based on [W] level) (+ 15% bonus AD) (+ 10% AP) damage. Healing or shielding yourself or an allied champion with your champion’s [W] applies an additional 35 − 80 (based on level) (based on [W] level) (+ 40% bonus AD) (+ 25% AP) healing or shielding. Damaging, healing, and shielding over time effects cannot activate [W]-ray more than once every 0.5 seconds.',
        src: WRay,
      },
      {
        name: 'Very Stable Errant Electromagikinetic Ion-Emitter',
        details:
          'Every second, you have a 1.67% chance to emit a pulse that Ionizes all Enemy and Allied champions in range for 4 seconds. Ionized Enemy champions lose 20% decaying movement speed, except while moving towards Allied champions, and receive 10% more damage from all sources. Ionized Allied champions gain 20% decaying movement speed, while moving away from Enemy champions, and receive 10% less damage from all sources. The Very Stable Errant Electromagikinetic Ion-Emitter can only activate while at least one Enemy champion is in range. Range: 1001',
        src: Magnet,
      },
      {
        name: 'Behold Yjolldrhorn, and Tremble',
        details:
          'Whenever a friendly Yordle champion reaches level 6, 11, or 16, you sound Yjolldrhorn. Each blast of Yjolldrhorn permanently grants 0.6% dodge and 0.2 magic resistance to allied champions for the remainder of the game. Yordles receive two stacks per blast. Additionally, Yjolldrhorn stacks apply to all living, friendly non-champion units (including minions and summoned units) but only last until their deaths. ',
        src: Horn,
      },
    ],
    tier1: [
      {
        name: '(Un)lucky 7s',
        details: 'Reduces your death timer by up to 7 seconds.',
        src: Unlucky7s,
      },
      {
        name: 'No Place Like Home',
        details: 'Reduces Recall’s cast time by 1 second.',
        src: NoPlaceHome,
      },
      {
        name: 'Port-a-Portal',
        details:
          'Reduces Recall’s cast time by 5.5 seconds.  Receiving damage, dealing damage or debuffing units will put you in-combat, disabling Recall for 5 seconds.',
        src: Portal,
      },
      {
        name: 'Forgotten Trunk of Fulfilled Wishes',
        details:
          'Receive a Forgotten Trunk of Fulfilled WIshes at 4 minutes. When opened, the Forgotten Trunk of Fulfilled Wishes inflicts 125 true damage divided between all living enemy champions. One use. “The initials G.D.R. are etched on the bottom.”',
        src: Chest,
      },
    ],
    tier2: [
      {
        name: 'Finders, Keepers',
        details:
          'Find an extra 90 gold at the start of the game...somewhere in your team’s base. “Au: a piece of candy!”',
        src: LegendAlacrity,
      },
      {
        name: 'DISCOUNTCODE:HEX',
        details:
          'Start the game with a Hextech Discount Code that replaces one Amplifying Tome when crafting a Hextech Revolver.  Hurry!  After 3:30, the deal begins to expire, increasing the crafting cost of Hextech Revolver by 1 gold each second, up to 435 gold. “Limited time offer. Sponsored by EMCA Co.”',
        src: Hex,
      },
      {
        name: 'Doran’s Delivery, Off-Site',
        details:
          'Subscribe to Doran’s Delivery by purchasing Doran’s Shield, Doran’s Ring, or Doran’s Blade at the start of the game.  Subscribers will receive an off-site delivery that contains one of the other Doran’s items after 11 minutes, and again after 22 minutes.  Items delivered by this service are combined with the existing Doran’s item and therefore do not occupy additional inventory space.  Doran’s Delivery subscribers cannot purchase any additional Doran’s items from the shopkeeper after the initial purchase.',
        src: Delivery,
      },
    ],
    tier3: [
      {
        name: 'Sneak Attack',
        details:
          'While your champion is not visible to the enemy team, your non-ultimate spells that damage enemy champions will refund 20%-33% (based on spell level) of their cooldowns and 90% of their mana or energy costs but will deal 20%-33% (based on spell level) reduced damage.',
        src: CoupdeGrace,
      },
      {
        name: 'Big Things; Small Packages',
        details:
          'Empowers the passive on-hit bonuses granted by finished items, causing them to inflict true damage instead of physical or magic damage.',
        src: CutDown,
      },
      {
        name: 'Zim’s Magical Rune Randomization Machine',
        details:
          'Each time Zim’s Magical Rune Randomization Machine is selected, this rune is replaced with a non-keystone rune from an unselected row in any rune tree after a three-second delay.  Good luck!',
        src: LastStand,
      },
    ],
  },
  {
    name: 'Precision',
    subtitle: 'Become a legend',
    details: 'Improved attacks andustained damage',
    src: Precision,
    bg: PrecisionBg,
    colorHex: '#BDA878',
    colorRGB: '189,168,120',
    tierNames: ['Heroism', 'Legend', 'Combat'],
    keystones: [
      {
        name: 'Press the Attack',
        details: `<p>Hitting an enemy champion with 3 consecutive basic attacks will deal 40 - 180 bonus adaptive damage (based on level) and makes them vulnerable, increasing the damage they take by 8-12% from all sources for 6s.</p>`,
        src: PresstheAttack,
      },
      {
        name: 'Lethal Tempo',
        details: `<p>1.5s after damaging a champion gain 40 to 110% (at levels 1-18) Attack Speed (based on level) for 3s. Attacking a champion extends the effect to 6s.</p><p>Cooldown: 6s</p><p>Lethal Tempo allows you to temporarily exceed the attack speed limit.</p>`,
        src: LethalTempo,
      },
      {
        name: 'Fleet Footwork',
        details: `<p>Attacking a moving builds Energy stacks. At 100 stacks, your next attack is Energized.</p><p>Energized attacks heal you for 3 - 60 (+0.3 bonus AD, +0.3 AP) and grant 30% increased Movement Speed for 1s.</p><p>Ranged champions: healing from minions is 20% effective.</p>`,
        src: FleetFootwork,
      },
      {
        name: 'Conqueror',
        details: `<p>After 4 seconds in combat, your first attack an enemy champion grants you 10-35 AD, based on level, for 3 seconds and converts 20% of your damage to champions to true damage.</p><p>Melee only: Damaging enemy champions refreshes this buff.</p>`,
        src: Conqueror,
      },
    ],
    tier1: [
      {
        name: 'Overheal',
        details: `<p>Excess healing on you becomes a shield, for up to 10% of your total health + 10.</p><p>Shield is built up from 20-100% (at levels 1-18) of excess healing from self or allies.</p>`,
        src: Overheal,
      },
      {
        name: 'Triumph',
        details: `<p>Takedowns restore 12% of your missing health and grant an additional 25 gold.</p>`,
        src: Triumph,
      },
      {
        name: 'Presence of Mind',
        details: `<p>Takedowns restore 20% of your maximum mana and refund 10% of your ultimate's cooldown.</p>`,
        src: PresenceofMind,
      },
    ],
    tier2: [
      {
        name: 'Legend: Alacrity',
        details: `<p>Gain 3% Attack Speed plus an additional 1.5% for every <em>Legend</em> stack (max 10 stacks).</p><p>Earn progress toward <em>Legend</em> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.</p>`,
        src: LegendAlacrity,
      },
      {
        name: 'Legend: Tenacity',
        details: `<p>Gain 5% tenacity plus an additional 2.5% for every <em>Legend</em> stack (max 10 stacks).</p><p>Earn progress toward <em>Legend</em> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.</p>`,
        src: LegendTenacity,
      },
      {
        name: 'Legend Bloodline',
        details: `<p>Gain 0.6% life steal for every <em>Legend</em> stack (max 20 stacks).</p><p>Earn progress toward <em>Legend</em> stacks for every champion takedown, epic monster takedown, large monster kill, and minion kill.</p>`,
        src: LegendBloodline,
      },
    ],
    tier3: [
      {
        name: 'Coup de Grace',
        details: `<p>Deal 7% more damage to champions who have less than 40% health.</p><p>Additionally, takedowns on champions grant an <span>adaptive</span> bonus of 9 Attack Damage or 15 Ability Power for 10s.</p>`,
        src: CoupdeGrace,
      },
      {
        name: 'Cut Down',
        details: `<p>Deal 5%-15% more damage to champions with 10%-100% more max health than you.</p>`,
        src: CutDown,
      },
      {
        name: 'Last Stand',
        details: `<p>Deal 5 - 11% increased damage to champions while you are below 60% health, maximum damage gained at 30% health.</p>`,
        src: LastStand,
      },
    ],
  },
  {
    name: 'Domination',
    subtitle: 'Hunt and eliminate prey',
    details: 'Burst damage and target access',
    src: Domination,
    bg: DominationBg,
    colorHex: '#D74444',
    colorRGB: '215,68,68',
    tierNames: ['Malice', 'Tracking', 'Hunter'],
    keystones: [
      {
        name: 'Electrocute',
        details: `<p>Hitting a champion with 3 <strong>separate</strong> attacks or abilities in 2s deals bonus <span>adaptive damage</span>.</p><p>Damage: 30-180 (+0.40 Bonus AD, +0.25 AP) damage.</p><p>Cooldown: 25-20s</p>`,
        src: Electrocute,
      },
      {
        name: 'Predator',
        details: `<p>Enchants your boots with the active effect 'Predator.'</p><p>Channel for 1.5s out of combat to gain 45% Movement Speed for 15s. Damaging attacks or abilities end this effect, dealing 60 - 140 (+0.4 bonus AD)(+0.25 AP) bonus <span>adaptive damage</span>.</p><p>Cooldown: 150 - 100s. Starts the game on cooldown and goes on cooldown if interrupted while channeling.</p>`,
        src: Predator,
      },
      {
        name: 'Dark Harvest',
        details: `<p>Damaging a champion below 50% health deals **adaptive damage** and harvests their soul, permanently increasing Dark Harvest's damage by 5.</p><p>Dark Harvest damage: 40-80 (based on level) (+5 damage per soul) (+0.25 bonus AD) (+0.15 bonus AP)</p><p>Cooldown: 45s (resets to 1.5s on takedown)</p>`,
        src: DarkHarvest,
      },
      {
        name: 'Hail of Blades',
        details: `<p>Gain 110% Attack Speed for the first 3 attacks made against enemy champions.</p><p>No more than 2s can elapse between attacks or this effect will end.</p><p>Hail of Blades allows you to temporarily exceed the attack speed limit.</p><p>Cooldown: 4s out of combat.</p>`,
        src: HailofBlades,
      },
    ],
    tier1: [
      {
        name: 'Cheap Shot',
        details: `<p>Damaging champions with impaired movement or actions deals 10-45 bonus true damage (based on level).</p><p>Cooldown: 4s<br>Applies to damage occurring after the impairment.</p>`,
        src: CheapShot,
      },
      {
        name: 'Taste of Blood',
        details: `<p>Heal when you damage an enemy champion.</p><p>Healing: 18 - 35 (+0.20 bonus AD, +0.1 AP) health (based on level).</p><p>Cooldown: 20s</p>`,
        src: TasteofBlood,
      },
      {
        name: 'Sudden Impact',
        details: `<p>After exiting stealth or using a dash, leap, blink, or teleport, damage a champion to gain 7 Lethality and 6 Magic Penetration for 5s.</p><p>Cooldown: 4s</p>`,
        src: SuddenImpact,
      },
    ],
    tier2: [
      {
        name: 'Zombie Ward',
        details: `<p>Takedowns on enemy wards cause friendly zombie wards to sprout from their corpses.</p><p>Gain an adaptive force of 1.2 attack damage or 2.0 ability power for every zombie ward spawned, up to 10.</p><p>After spawning 10 zombie wards, additionally gain 10 adaptive force.</p>`,
        src: ZombieWard,
      },
      {
        name: 'Ghost Poro',
        details: `<p>When your wards expire they leave behind a Ghost Poro which grants vision for 60s. Nearby enemy champions scare the ghost poro away.</p><p>Gain an adaptive bonus of 1.2 attack damage or 2.0 ability power for every ghost poro spawned or that spots an enemy, up to 10.</p><p>After spawning 10 ghost poros, additionally gain 10 adaptive force.</p>`,
        src: GhostPoro,
      },
      {
        name: 'Eyeball Collection',
        details: `<p>Collect eyeballs for champion and ward takedowns. Gain an adaptive bonus of 1.2 Attack Damage or 2 Ability Power, per eyeball collected.</p><p>Upon completing your collection at 10 eyeballs, gain an adaptive bonus of 6 Attack Damage, or 10 Ability Power.</p><p>Collect 1 eyeball per champion takedown or assist.</p>`,
        src: EyeballCollection,
      },
    ],
    tier3: [
      {
        name: 'Ravenous Hunter',
        details: `<p>Heal for a percentage of the damage dealt by your abilities.</p><p>Healing: 1.5% + 2.5% per <em>Bounty Hunter</em> stack.</p><p>Earn a <em>Bounty Hunter</em> stack the first time you get a takedown on each enemy champion.</p><p><em>AoE:</em> Healing reduced to one third on AoE abilities.</p>`,
        src: RavenousHunter,
      },
      {
        name: 'Ingenious Hunter',
        details: `<p>Gain 15% <strong>Active Item CDR</strong> plus an additional 5% per <em>Bounty Hunter</em> stack (includes Trinkets).</p><p>Earn a <em>Bounty Hunter</em> stack the first time you get a takedown on each enemy champion.</p>`,
        src: IngeniousHunter,
      },
      {
        name: 'Relentless Hunter',
        details: `<p>Gain 10 out of combat <strong>Movement Speed</strong> plus 9 per <em>Bounty Hunter</em> stack.</p><p>Earn a <em>Bounty Hunter</em> stack the first time you get a takedown on each enemy champion.</p>`,
        src: RelentlessHunter,
      },
      {
        name: 'Ultimate Hunter',
        details: `<p>Your ultimate gains 5% <strong>reduced cooldown</strong>, plus an additional 4% per <em>Bounty Hunter</em> Stack.</p><p>Earn a <em>Bounty Hunter</em> stack the first time you get a takedown on each enemy champion.</p>`,
        src: UltimateHunter,
      },
    ],
  },
  {
    name: 'Sorcery',
    subtitle: 'Unleash destruction',
    details: 'Empowered abilities and resource manipulation',
    src: Sorcery,
    bg: SorceryBg,
    colorHex: '#D74444',
    colorRGB: '113,122,245',
    tierNames: ['Artifact', 'Excellence', 'Power'],
    keystones: [
      {
        name: 'Summon Aery',
        details: `<p>Your attacks and abilities send Aery to a target, damaging enemies or shielding allies.</p><p>Damage: 10 - 40 based on level (+0.10 AP and +0.15 bonus AD)<br>Shield: 35 - 80 based on level (+0.25 AP and +0.4 bonus AD)</p><p>Aery cannot be sent out to again until she returns to you.</p>`,
        src: SummonAery,
      },
      {
        name: 'Arcane Comet',
        details: `<p>Damaging a champion with an ability hurls a comet at their location, or, if Arcane Comet is on cooldown, reduces it’s remaining cooldown.</p><p><b>Adaptive damage</b>: 30 - 100 based on level (+0.20 AP and +0.35 bonus AD)</p><p>Cooldown: 20 - 8s</p><p>Cooldown Reduction:<br>- Single Target: 20%<br>- Area of Effect: 10%<br>- Damage Over Time: 5%</p>`,
        src: ArcaneComet,
      },
      {
        name: 'Phase Rush',
        details: `<p>Hitting an enemy champion with 3 attacks or separate abilities within 3s grants 25 - 40% Movement Speed based on level.</p><p>Duration: 3s<br>Cooldown: 15s<br>Additionally, gain 75% Slow Resistance for the duration.</p>`,
        src: PhaseRush,
      },
    ],
    tier1: [
      {
        name: 'Nullifying Orb',
        details: `<p>Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs 40 - 120 magic damage based on level (+0.10 AP and +0.15 bonus AD) for 4 seconds.</p><p>Cooldown: 60s</p>`,
        src: NullifyingOrb,
      },
      {
        name: 'Manaflow Band',
        details: `<p>Hitting enemy champions with a spell grants 25 maximum mana, up to 250 mana.  </p><p>After reaching 250 mana, Manaflow Band restores 1% of your missing mana every 5 seconds.  </p><p>Cooldown: 15 seconds</p>`,
        src: ManaflowBand,
      },
      {
        name: 'Nimbus Cloak',
        details: `<p>Shortly after using your Ultimate, gain a decaying Movement Speed increase that lasts for 2.5s and allows you to pass through units.</p><p>Increase: 100 Movement Speed<br>Cooldown: 60s, reduced by Cooldown Reduction</p>`,
        src: NimbusCloak,
      },
    ],
    tier2: [
      {
        name: 'Transcendence',
        details: `<p>Gain 10% CDR when you reach level 10.</p><p>Each percent of CDR exceeding the CDR limit is converted to an <b>adaptive</b> bonus of 1.2 Attack Damage or 2 Ability Power.</p>`,
        src: Transcendence,
      },
      {
        name: 'Celerity',
        details: `<p>All movement Speed bonuses are 7% more effective on you and gain 1% movement speed.</p>`,
        src: Celerity,
      },
      {
        name: 'Absolute Focus',
        details: `<p>While above 70% health, gain an <b>adaptive</b> bonus of up to 18 Attack Damage or 30 Ability Power (based on level).</p>`,
        src: AbsoluteFocus,
      },
    ],
    tier3: [
      {
        name: 'Scorch',
        details: `<p>Your next ability hit sets champions on fire dealing 15 - 35 bonus magic damage based on level after 1s.</p><p>Cooldown: 10s</p>`,
        src: Scorch,
      },
      {
        name: 'Waterwalking',
        details: `<p>Gain 25 Movement Speed and an <b>adaptive</b> bonus of up to 18 Attack Damage or 30 Ability Power (based on level) when in the river.</p>`,
        src: Waterwalking,
      },
      {
        name: 'Gathering Storm',
        details: `<p>Every 10 min. gain AP or AD, <strong>Adaptive</strong>.</p><p><em>10 min</em>: + 8 AP or 5 AD<br><em>20 min</em>: + 24 AP or 14 AD<br><em>30 min</em>: + 48 AP or 29 AD<br><em>40 min</em>: + 80 AP or 48 AD<br><em>50 min</em>: + 120 AP or 72 AD<br><em>60 min</em>: + 168 AP or 101 AD<br>etc...</p>`,
        src: GatheringStorm,
      },
    ],
  },
  {
    name: 'Resolve',
    subtitle: 'Live forever',
    details: 'Durability and crowd control',
    src: Resolve,
    bg: ResolveBg,
    colorHex: '#A1D287',
    colorRGB: '161,210,135',
    tierNames: ['Strength', 'Resistance', 'Vitality'],
    keystones: [
      {
        name: 'Grasp of the Undying',
        details: `<p>Every 4s in combat, your next basic attack on a champion will:</p><ul><li>Deal bonus damage equal to 4% of your max health</li><li>Heal you for 2% of your max health</li><li>Permanently increase your health by 5</li></ul><p><em>Ranged Champions:</em> Damage, healing, and permanent health gained reduced by 40%.</p>`,
        src: GraspoftheUndying,
      },
      {
        name: 'Aftershock',
        details: `<p>After immobilizing an enemy champion, increase your current Armor and Magic Resist by 70 + 50% your bonus resists for 2.5s. Then, after 2.5s deal magic damage to nearby enemies.</p><p>Damage: 10-120 (+4% your maximum health)<br>Cooldown: 35s</p>`,
        src: Aftershock,
      },
      {
        name: 'Guardian',
        details: `<p><em>Guard</em> allies within 175 units of you, and <em>Guard</em> allies you target with spells for 2.5s. While <em>Guarding</em>, if you or the ally would take damage, both of you gain a shield and are hasted for 1.5s.</p><p>Cooldown: 70 - 40 seconds<br>Shield Strength: 70 - 150 (+0.25 AP) (+12% bonus health).<br>Haste: 20% increased Movement Speed</p>`,
        src: Guardian,
      },
    ],
    tier1: [
      {
        name: 'Demolish',
        details: `<p>Charge up a powerful attack against a tower over 3s, when within 600 range of it. The charged attack deals 100 (+35% of your max health) bonus physical damage.</p><p>Cooldown: 45s</p>`,
        src: Demolish,
      },
      {
        name: 'Font of Life',
        details: `<p>Impairing the movement of an enemy champion marks them for 4s.</p><p>Ally champions who attack marked enemies heal for 5 + 1% of your max health.</p>`,
        src: FontofLife,
      },
      {
        name: 'Shield Bash',
        details: `<p>While shielded, gain 1-10 Armor and Magic Resist based on level.</p><p>Whenever you gain a shield, your next basic attack against an enemy champion deals 5-30 (+1.5% Bonus Health) (+8.5% New Shield amount) bonus <strong>adaptive</strong> damage.</p><p>You have up to 2s after the shield expires to use this effect.</p>`,
        src: ShieldBash,
      },
    ],
    tier2: [
      {
        name: 'Conditioning',
        details: `<p>After 10 min gain +9 Armor and Magic Resist and increase your total Armor and Magic Resist by 5%.</p>`,
        src: Conditioning,
      },
      {
        name: 'Second Wind',
        details: `<p>After taking damage from an enemy champion heal for 4%  of your missing health over 10 seconds.</p>`,
        src: SecondWind,
      },
      {
        name: 'Bone Plating',
        details: `<p>After taking damage from an enemy champion, the next 3 spells or attacks you receive deal 30 - 60 less damage.</p><p>Duration: 1.5s<br>Cooldown: 45s</p>`,
        src: BonePlating,
      },
    ],
    tier3: [
      {
        name: 'Overgrowth',
        details: `<p>Absorb life essence from monsters or enemy minions that die near you, permanently gaining 3 maximum health for every 8.</p><p>When you've absorbed 120 monsters or enemy minions, gain an additional 3.5% maximum health.</p>`,
        src: Overgrowth,
      },
      {
        name: 'Revitalize',
        details: `<p>Heals and shields are 5% stronger and increased by an additional 10% on targets below 40% health.  </p><p>*Include heals and shields cast on yourself*</p>`,
        src: Revitalize,
      },
      {
        name: 'Unflinching',
        details: `<p>Increase your Tenacity and Slow Resistance by 10% for each Summoner Spell on cooldown. After casting a Summoner Spell, gain 15% additional Tenacity and Slow Resistance for 10s.</p>`,
        src: Unflinching,
      },
    ],
  },
  {
    name: 'Inspiration',
    subtitle: 'Outwit mere mortals',
    details: 'Creative tools and rule bending',
    src: Inspiration,
    bg: InspirationBg,
    colorHex: '##47AFBB',
    colorRGB: '71,175,187',
    tierNames: ['Contraptions', 'Tomorrow', 'Beyond'],
    keystones: [
      {
        name: 'Glacial Augment',
        details: `<p>Basic attacking a champion slows them for 2s. The slow increases in strength over its duration.</p><ul><li><em>Ranged attacks</em> slow by up to 30%-40%  </li><li><em>Melee attacks</em> slow by up to 45%-55%</li></ul><p>Slowing a champion with active items shoots a freeze ray through them, freezing the nearby ground for 5s, slowing all units inside by 60%</p><p>Cooldown: 7-4s second per-unit cooldown</p>`,
        src: GlacialAugment,
      },
      {
        name: 'Unsealed Spellbook',
        details: `<p>Swap one of your Summoner Spells to a new, single use Summoner Spell. Each unique Summoner Spell you swap to permanently decreases your swap cooldown by 20s (initial swap cooldown is at 4 mins).</p><p>Your first swap becomes available at 6 mins.</p><p>Summoner Spells can only be swapped while out of combat.<br>After using a swapped Summoner Spell you must swap 3 more times before the first can be selected again.</p>`,
        src: UnsealedSpellbook,
      },
      {
        name: 'Prototype Omnistone',
        details: 'missing',
        src: PrototypeOmnistone,
      },
    ],
    tier1: [
      {
        name: 'Hextech Flashtraption',
        details: `<p>While Flash is on cooldown it is replaced by Hexflash.</p><p>Hexflash: Channel for 2 seconds to blink to a new location.</p><p>Cooldown: 20 seconds. Goes on a 10 second cooldown when you enter champion combat.</p>`,
        src: HextechFlashtraption,
      },
      {
        name: 'Magical Footwear',
        details: `<p>You get Slightly Magical Boots at 12 min, but you cannot buy boots before then. For each takedown you acquire the boots 45s sooner.</p>`,
        src: MagicalFootwear,
      },
      {
        name: 'Perfect Timing',
        details: `<p>Start the game with a Commencing Stopwatch that transforms into a Stopwatch after 8 min. Stopwatch has a one time use Stasis active.</p><p>Reduces the cooldown of Zhonyas Hourglass, Guardian Angel, and Gargoyle's Stoneplate by 15%.</p>`,
        src: PerfectTiming,
      },
    ],
    tier2: [
      {
        name: 'Futures Market',
        details: `<p>You can enter debt to buy items. The amount you can borrow increases over time.</p><p>Debt limit: 150 + 5/min<br>Lending Fee: 50 gold per item</p>`,
        src: FuturesMarket,
      },
      {
        name: 'Minion Dematerializer',
        details: `<p>Start the game with 3 Minion Dematerializers that kill and absorb lane minions instantly. Minion Dematerializers are on cooldown for the first 180s of the game.</p><p>Absorbing a minion increases your damage by +6% against that type of minion permanently, and an extra +3% for each additional minion of that type absorbed.</p>`,
        src: MinionDematerializer,
      },
      {
        name: 'Biscuit-Delivery',
        details: `<p>Biscuit Delivery: Gain a Total Biscuit of Everlasting will every 3 minutes, until 12 minutes.</p><p>Biscuits restore 15% of your missing health and mana and increase your mana cap by 40 mana permanently.</p><p>Champions without mana restore 20%  missing energy instead.</p>`,
        src: BiscuitDelivery,
      },
    ],
    tier3: [
      {
        name: 'Cosmic Insight',
        details: `<p>+5% CDR<br>+5% Max CDR<br>+5% Summoner Spell CDR<br>+5% Item CDR</p>`,
        src: CosmicInsight,
      },
      {
        name: 'Approach Velocity',
        details: `<p>Gain 15% Movement Speed towards nearby allies that are movement impaired or enemies that you impair.</p><p>Range: 1000</p>`,
        src: ApproachVelocity,
      },
      {
        name: 'Time Warp Tonic',
        details: `<p>Consuming a potion or biscuit grants 50% of its health and/or mana restoration immediately but prevents that consumable from being used again until the effect ends. Health/mana per tick is then reduced by half for the effect's regular duration.</p>`,
        src: TimeWarpTonic,
      },
    ],
  },
]
