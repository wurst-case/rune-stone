import Precision from '../assets/precision/precision.webp'
import PresstheAttack from '../assets/precision/keystones/press-the-attack.webp'
import LethalTempo from '../assets/precision/keystones/lethal-tempo.webp'
import FleetFootwork from '../assets/precision/keystones/fleet-footwork.webp'
import Conqueror from '../assets/precision/keystones/conqueror.png'
import Overheal from '../assets/precision/t1/overheal.webp'
import Triumph from '../assets/precision/t1/triumph.webp'
import PresenceofMind from '../assets/precision/t1/presence-of-mind.webp'
import LegendAlacrity from '../assets/precision/t2/legend-alacrity.webp'
import LegendTenacity from '../assets/precision/t2/legend-tenacity.webp'
import LegendBloodline from '../assets/precision/t2/legend-bloodline.webp'
import CoupdeGrace from '../assets/precision/t3/coup-de-grace.webp'
import CutDown from '../assets/precision/t3/cut-down.webp'
import LastStand from '../assets/precision/t3/last-stand.webp'
import Domination from '../assets/domination/domination.png'
import Electrocute from '../assets/domination/keystones/electrocute.webp'
import Predator from '../assets/domination/keystones/predator.webp'
import DarkHarvest from '../assets/domination/keystones/dark-harvest.png'
import HailofBlades from '../assets/domination/keystones/hail-of-blades.png'
import CheapShot from '../assets/domination/t1/cheap-shot.webp'
import TasteofBlood from '../assets/domination/t1/taste-of-blood.png'
import SuddenImpact from '../assets/domination/t1/sudden-impact.webp'
import ZombieWard from '../assets/domination/t2/zombie-ward.png'
import GhostPoro from '../assets/domination/t2/ghost-poro.png'
import EyeballCollection from '../assets/domination/t2/eyeball-collection.png'
import RavenousHunter from '../assets/domination/t3/ravenous-hunter.webp'
import IngeniousHunter from '../assets/domination/t3/ingenious-hunter.png'
import RelentlessHunter from '../assets/domination/t3/relentless-hunter.png'
import UltimateHunter from '../assets/domination/t3/ultimate-hunter.png'
import Sorcery from '../assets/sorcery/sorcery.webp'
import SummonAery from '../assets/sorcery/keystones/summon-aery.webp'
import ArcaneComet from '../assets/sorcery/keystones/arcane-comet.webp'
import PhaseRush from '../assets/sorcery/keystones/phase-rush.webp'
import NullifyingOrb from '../assets/sorcery/t1/nullifying-orb.webp'
import ManaflowBand from '../assets/sorcery/t1/manaflow-band.webp'
import NimbusCloak from '../assets/sorcery/t1/nimbus-cloak.webp'
import Transcendence from '../assets/sorcery/t2/transcendence.webp'
import Celerity from '../assets/sorcery/t2/celerity.webp'
import AbsoluteFocus from '../assets/sorcery/t2/absolute-focus.webp'
import Scorch from '../assets/sorcery/t3/scorch.webp'
import Waterwalking from '../assets/sorcery/t3/waterwalking.webp'
import GatheringStorm from '../assets/sorcery/t3/gathering-storm.webp'
import Resolve from '../assets/resolve/resolve.webp'
import GraspoftheUndying from '../assets/resolve/keystones/grasp-of-the-undying.webp'
import Aftershock from '../assets/resolve/keystones/aftershock.webp'
import Guardian from '../assets/resolve/keystones/guardian.webp'
import Demolish from '../assets/resolve/t1/demolish.png'
import FontofLife from '../assets/resolve/t1/font-of-life.png'
import ShieldBash from '../assets/resolve/t1/shield-bash.png'
import Conditioning from '../assets/resolve/t2/conditioning.png'
import SecondWind from '../assets/resolve/t2/second-wind.png'
import BonePlating from '../assets/resolve/t2/bone-plating.png'
import Overgrowth from '../assets/resolve/t3/overgrowth.png'
import Revitalize from '../assets/resolve/t3/revitalize.png'
import Unflinching from '../assets/resolve/t3/unflinching.png'
import Inspiration from '../assets/inspiration/inspiration.webp'
import GlacialAugment from '../assets/inspiration/keystones/glacial-augment.webp'
import UnsealedSpellbook from '../assets/inspiration/keystones/unsealed-spellbook.webp'
import PrototypeOmnistone from '../assets/inspiration/keystones/prototype-omnistone.webp'
import HextechFlashtraption from '../assets/inspiration/t1/hextech-flashtraption.webp'
import MagicalFootwear from '../assets/inspiration/t1/magical-footwear.webp'
import PerfectTiming from '../assets/inspiration/t1/perfect-timing.webp'
import FuturesMarket from '../assets/inspiration/t2/futures-market.webp'
import MinionDematerializer from '../assets/inspiration/t2/minion-dematerializer.webp'
import BiscuitDelivery from '../assets/inspiration/t2/biscuit-delivery.webp'
import CosmicInsight from '../assets/inspiration/t3/cosmic-insight.webp'
import ApproachVelocity from '../assets/inspiration/t3/approach-velocity.webp'
import TimeWarpTonic from '../assets/inspiration/t3/time-warp-tonic.webp'

import Bandle from '../assets/bandle/bandle.png'

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
    src: Bandle,
    colorHex: '#EA781E',
    colorRGB: '234,120,30',
    tierNames: ['Enchantments', 'Scoops', 'Tactics'],
    keystones: [
      {
        name: '[W]-ray',
        details:
          'Damaging or debuffing an enemy champion with your champion’s [W] (i.e. second ability) applies an additional 10 − 40 (based on level) (based on [W] level) (+ 15% bonus AD) (+ 10% AP) damage. Healing or shielding yourself or an allied champion with your champion’s [W] applies an additional 35 − 80 (based on level) (based on [W] level) (+ 40% bonus AD) (+ 25% AP) healing or shielding. Damaging, healing, and shielding over time effects cannot activate [W]-ray more than once every 0.5 seconds.',
        src: PresstheAttack,
      },
      {
        name: 'Very Stable Errant Electromagikinetic Ion-Emitter',
        details:
          'Every second, you have a 1.67% chance to emit a pulse that Ionizes all Enemy and Allied champions in range for 4 seconds. Ionized Enemy champions lose 20% decaying movement speed, except while moving towards Allied champions, and receive 10% more damage from all sources. Ionized Allied champions gain 20% decaying movement speed, while moving away from Enemy champions, and receive 10% less damage from all sources. The Very Stable Errant Electromagikinetic Ion-Emitter can only activate while at least one Enemy champion is in range. Range: 1001',
        src: LethalTempo,
      },
      {
        name: 'Behold Yjolldrhorn, and Tremble',
        details:
          'Whenever a friendly Yordle champion reaches level 6, 11, or 16, you sound Yjolldrhorn. Each blast of Yjolldrhorn permanently grants 0.6% dodge and 0.2 magic resistance to allied champions for the remainder of the game. Yordles receive two stacks per blast. Additionally, Yjolldrhorn stacks apply to all living, friendly non-champion units (including minions and summoned units) but only last until their deaths. ',
        src: FleetFootwork,
      },
    ],
    tier1: [
      {
        name: '(Un)lucky 7s',
        details: 'Reduces your death timer by up to 7 seconds.',
        src: Overheal,
      },
      {
        name: 'No Place Like Home',
        details: 'Reduces Recall’s cast time by 1 second.',
        src: Triumph,
      },
      {
        name: 'Port-a-Portal',
        details:
          'Reduces Recall’s cast time by 5.5 seconds.  Receiving damage, dealing damage or debuffing units will put you in-combat, disabling Recall for 5 seconds.',
        src: PresenceofMind,
      },
      {
        name: 'Forgotten Trunk of Fulfilled Wishes',
        details:
          'Receive a Forgotten Trunk of Fulfilled WIshes at 4 minutes. When opened, the Forgotten Trunk of Fulfilled Wishes inflicts 125 true damage divided between all living enemy champions. One use. “The initials G.D.R. are etched on the bottom.”',
        src: EyeballCollection,
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
        src: LegendTenacity,
      },
      {
        name: 'Doran’s Delivery, Off-Site',
        details:
          'Subscribe to Doran’s Delivery by purchasing Doran’s Shield, Doran’s Ring, or Doran’s Blade at the start of the game.  Subscribers will receive an off-site delivery that contains one of the other Doran’s items after 11 minutes, and again after 22 minutes.  Items delivered by this service are combined with the existing Doran’s item and therefore do not occupy additional inventory space.  Doran’s Delivery subscribers cannot purchase any additional Doran’s items from the shopkeeper after the initial purchase.',
        src: LegendBloodline,
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
    src: Precision,
    colorHex: '#BDA878',
    colorRGB: '189,168,120',
    tierNames: ['Heroism', 'Legend', 'Combat'],
    keystones: [
      {
        name: 'Press the Attack',
        details: '',
        src: PresstheAttack,
      },
      {
        name: 'Lethal Tempo',
        details: '',
        src: LethalTempo,
      },
      {
        name: 'Fleet Footwork',
        details: '',
        src: FleetFootwork,
      },
      {
        name: 'Conqueror',
        details: '',
        src: Conqueror,
      },
    ],
    tier1: [
      {
        name: 'Overheal',
        details: '',
        src: Overheal,
      },
      {
        name: 'Triumph',
        details: '',
        src: Triumph,
      },
      {
        name: 'Presence of Mind',
        details: '',
        src: PresenceofMind,
      },
    ],
    tier2: [
      {
        name: 'Legend: Alacrity',
        details: '',
        src: LegendAlacrity,
      },
      {
        name: 'Legend: Tenacity',
        details: '',
        src: LegendTenacity,
      },
      {
        name: 'Legend Bloodline',
        details: '',
        src: LegendBloodline,
      },
    ],
    tier3: [
      {
        name: 'Coup de Grace',
        details: '',
        src: CoupdeGrace,
      },
      {
        name: 'Cut Down',
        details: '',
        src: CutDown,
      },
      {
        name: 'Last Stand',
        details: '',
        src: LastStand,
      },
    ],
  },
  {
    name: 'Domination',
    src: Domination,
    colorHex: '#D74444',
    colorRGB: '215,68,68',
    tierNames: ['Malice', 'Tracking', 'Hunter'],
    keystones: [
      {
        name: 'Electrocute',
        details: '',
        src: Electrocute,
      },
      {
        name: 'Predator',
        details: '',
        src: Predator,
      },
      {
        name: 'Dark Harvest',
        details: '',
        src: DarkHarvest,
      },
      {
        name: 'Hail of Blades',
        details: '',
        src: HailofBlades,
      },
    ],
    tier1: [
      {
        name: 'Cheap Shot',
        details: '',
        src: CheapShot,
      },
      {
        name: 'Taste of Blood',
        details: '',
        src: TasteofBlood,
      },
      {
        name: 'Sudden Impact',
        details: '',
        src: SuddenImpact,
      },
    ],
    tier2: [
      {
        name: 'Zombie Ward',
        details: '',
        src: ZombieWard,
      },
      {
        name: 'Ghost Poro',
        details: '',
        src: GhostPoro,
      },
      {
        name: 'Eyeball Collection',
        details: '',
        src: EyeballCollection,
      },
    ],
    tier3: [
      {
        name: 'Ravenous Hunter',
        details: '',
        src: RavenousHunter,
      },
      {
        name: 'Ingenious Hunter',
        details: '',
        src: IngeniousHunter,
      },
      {
        name: 'Relentless Hunter',
        details: '',
        src: RelentlessHunter,
      },
      {
        name: 'Ultimate Hunter',
        details: '',
        src: UltimateHunter,
      },
    ],
  },
  {
    name: 'Sorcery',
    src: Sorcery,
    colorHex: '#D74444',
    colorRGB: '113,122,245',
    tierNames: ['Artifact', 'Excellence', 'Power'],
    keystones: [
      {
        name: 'Summon Aery',
        details: '',
        src: SummonAery,
      },
      {
        name: 'Arcane Comet',
        details: '',
        src: ArcaneComet,
      },
      {
        name: 'Phase Rush',
        details: '',
        src: PhaseRush,
      },
    ],
    tier1: [
      {
        name: 'Nullifying Orb',
        details: '',
        src: NullifyingOrb,
      },
      {
        name: 'Manaflow Band',
        details: '',
        src: ManaflowBand,
      },
      {
        name: 'Nimbus Cloak',
        details: '',
        src: NimbusCloak,
      },
    ],
    tier2: [
      {
        name: 'Transcendence',
        details: '',
        src: Transcendence,
      },
      {
        name: 'Celerity',
        details: '',
        src: Celerity,
      },
      {
        name: 'Absolute Focus',
        details: '',
        src: AbsoluteFocus,
      },
    ],
    tier3: [
      {
        name: 'Scorch',
        details: '',
        src: Scorch,
      },
      {
        name: 'Waterwalking',
        details: '',
        src: Waterwalking,
      },
      {
        name: 'Gathering Storm',
        details: '',
        src: GatheringStorm,
      },
    ],
  },
  {
    name: 'Resolve',
    src: Resolve,
    colorHex: '#A1D287',
    colorRGB: '161,210,135',
    tierNames: ['Strength', 'Resistance', 'Vitality'],
    keystones: [
      {
        name: 'Grasp of the Undying',
        details: '',
        src: GraspoftheUndying,
      },
      {
        name: 'Aftershock',
        details: '',
        src: Aftershock,
      },
      {
        name: 'Guardian',
        details: '',
        src: Guardian,
      },
    ],
    tier1: [
      {
        name: 'Demolish',
        details: '',
        src: Demolish,
      },
      {
        name: 'Font of Life',
        details: '',
        src: FontofLife,
      },
      {
        name: 'Shield Bash',
        details: '',
        src: ShieldBash,
      },
    ],
    tier2: [
      {
        name: 'Conditioning',
        details: '',
        src: Conditioning,
      },
      {
        name: 'Second Wind',
        details: '',
        src: SecondWind,
      },
      {
        name: 'Bone Plating',
        details: '',
        src: BonePlating,
      },
    ],
    tier3: [
      {
        name: 'Overgrowth',
        details: '',
        src: Overgrowth,
      },
      {
        name: 'Revitalize',
        details: '',
        src: Revitalize,
      },
      {
        name: 'Unflinching',
        details: '',
        src: Unflinching,
      },
    ],
  },
  {
    name: 'Inspiration',
    src: Inspiration,
    colorHex: '##47AFBB',
    colorRGB: '71,175,187',
    tierNames: ['Contraptions', 'Tomorrow', 'Beyond'],
    keystones: [
      {
        name: 'Glacial Augment',
        details: '',
        src: GlacialAugment,
      },
      {
        name: 'Unsealed Spellbook',
        details: '',
        src: UnsealedSpellbook,
      },
      {
        name: 'Prototype Omnistone',
        details: '',
        src: PrototypeOmnistone,
      },
    ],
    tier1: [
      {
        name: 'Hextech Flashtraption',
        details: '',
        src: HextechFlashtraption,
      },
      {
        name: 'Magical Footwear',
        details: '',
        src: MagicalFootwear,
      },
      {
        name: 'Perfect Timing',
        details: '',
        src: PerfectTiming,
      },
    ],
    tier2: [
      {
        name: 'Futures Market',
        details: '',
        src: FuturesMarket,
      },
      {
        name: 'Minion Dematerializer',
        details: '',
        src: MinionDematerializer,
      },
      {
        name: 'Biscuit-Delivery',
        details: '',
        src: BiscuitDelivery,
      },
    ],
    tier3: [
      {
        name: 'Cosmic Insight',
        details: '',
        src: CosmicInsight,
      },
      {
        name: 'Approach Velocity',
        details: '',
        src: ApproachVelocity,
      },
      {
        name: 'Time Warp Tonic',
        details: '',
        src: TimeWarpTonic,
      },
    ],
  },
]
