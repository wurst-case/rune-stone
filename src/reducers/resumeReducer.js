import ActionTypes from '../constants/actionTypes'

export const initialState = {
  keystone: null,
  t1: null,
  t2: null,
  t3: null,
  open: {
    keystone: null,
    t1: null,
    t2: null,
    t3: null,
  },
  runeInfo: null,
  path: null,
  pathblah: [
    {
      name: 'Brian Bookman',
      colorRGB: '17,174,255',
      colorHex: '#11aeff',
      subtitle: '(310) 773-7359 brian.h.bookman@gmail.com',
      bgMobile:
        ' https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2FbgMobile.png?alt=media&token=3556e40a-eb69-40af-9939-30ea6b46acd4',
      bgMobileChrome:
        'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2FbgMobile.webp?alt=media&token=3dbcf84f-eb56-46b6-9699-48a0973a3dec',
      bgMobileSafari:
        'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2FbgMobile.jp2?alt=media&token=2f48d89e-73c3-461c-aec9-89f0d2e88eaf',
      img:
        'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2Fbandle.png?alt=media&token=49ad94bf-8cde-4b52-9b59-b69f7d8bf388',
      tierNames: ['Experience', 'Skills', 'Education'],
      keystones: [
        {
          name: 'Blizzard Entertainment',
          detail: `<p>Playtest and Gameplay QA Analyst for World of Warcraft, Irvine CA (May 2018 – Feb 2019)
          <li>Test writing, execution, and product delivery for: “World of Warcraft: Battle for Azeroth”</li>
          <li>Playtesting, difficulty-tuning, and qualitative feedback for pipeline content</li>
          <li>Encounter, Class, Art, Rewards, Quest, and Narrative test suites written+executed</li>
          <li>Black-box and grey-box (WoWEdit access, “unprecedented” for contractors)</li></p>`,
          tooltip: 'Playtest and Gameplay QA Analyst for World of Warcraft, Irvine CA (May 2018 – Feb 2019)',
          img:
            'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2Fks%2FW_ray_Keystone.png?alt=media&token=978ae544-6155-44ec-967d-08f10d2a6ca4',
        },
        {
          name: 'RuneStone.com',
          detail: 'Creator (2020-current)',
          tooltip: 'Creator (2020-current)',
          img:
            'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2Fks%2FMagnet_Keystone.png?alt=media&token=cda09c9d-bdc8-4607-ba47-8bc64e4f4455',
        },
        {
          name: 'Sony Game Studio',
          detail: 'Bug Crusher (2019-current)',
          tooltip: 'Bug Crusher (2019-current)',
          img:
            'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2Fks%2FHorn_Keystone.png?alt=media&token=3be114d9-df2d-405b-97fd-ae440cfcef5a',
        },
      ],
      tier1: [
        {
          name: 'Untitled',
          detail: 'Quality assurance for a pixel-platformer project for digital Steam game store release in 2020',
          tooltip: 'Pixel-platformer project for digital Steam game store release in 2020',
          img:
            'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2Ft1%2FDice_RUne.png?alt=media&token=b7bc7dd9-a406-4144-9513-3b296b8d7f01',
        },
        {
          name: 'Beyond Light',
          detail: 'Quality assurance for a tabletop roleplaying game.',
          tooltip: 'Quality assurance for a tabletop roleplaying game.',
          img:
            'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2Ft1%2FHome_rune.png?alt=media&token=afb6737c-fff6-4292-b79f-d53859c2e689',
        },
        {
          name: 'Hillary for America, Campaign for President, Russ for Wisconsin, Campaign for U.S. Senate',
          detail: `<p>Communications Assistant - United States, Wisconsin (May – November 2016)
          <li>Manage, track, and analyze campaign resource distributions</li>
          <li>Communicate with constituents as a representative of candidate(s) and Democratic Party</li>
          <li>Advance team relief for candidate</li>
          <li>GOTV (Get Out The Vote) canvassing and voter registration in remote counties</li></p>`,
          tooltip: 'Communications Assistant - United States, Wisconsin (May – November 2016)',
          img:
            'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2Ft1%2FPortal_rune.png?alt=media&token=f6c4b6da-8bc1-4d75-b067-0a84229e5976',
        },
        {
          name: 'Gods of Egypt, Motion Picture Film Project, Thunder Road Productions',
          detail: `<p>Associate Producer, Script Editor (2010 - 2016)
          <li>Pitched “Clash of the Titans in Egypt” film proposal to producers at Thunder Road</li>
          <li>Delivered storyboard for use by screenwriters.</li>
          <li>Script Editor throughout production and post-production</li>
          <li>Major motion picture release in 2016</li>
          </p>`,
          tooltip: 'Associate Producer, Script Editor (2010 - 2016)',
          img:
            'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2Ft1%2FChest_rune.png?alt=media&token=771036b3-43af-4dca-8a48-cc2e405897b6',
        },
      ],
      tier2: [
        {
          name: 'Project Management',
          detail:
            '<p><li>ISTQB Certified Tester Foundation Level (CTFL)</li><li> JIRA</li><li> Confluence</li><li> Testrail</li><li> AGILE</li><li> SQL</li></p>',
          tooltip: 'ISTQB Certified Tester Foundation Level (CTFL)...',
          img:
            'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2Ft2%2FCoin_Rune.png?alt=media&token=a8cd9504-6c84-4138-878b-4ed4afd73750',
        },
        {
          name: 'Gaming',
          detail: `<p><li>League of Legends (Diamond+, 7 years experience)</li><li>Teamfight Tactics (Diamond)</li><li>World of Warcraft
          (14 years experience)</li><li>Pokémon (GenIV Competitive player)</li><li>Megaman (all of them</li><li>lol)</li><li>DotA</li><li>Warcraft
          III</li><li>Starcraft 2</li><li>Age of Mythology</li><li>Age of Empires</li><li>Super Smash Bros.</li><li>Kingdom Hearts</li><li>Final Fantasy</li></p>`,
          tooltip: 'League of Legends (Diamond+, 7 years experience)...',
          img:
            'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2Ft2%2Fcard_Rune.png?alt=media&token=2f4ea3f7-914c-4f2e-9e97-cd987019c322',
        },
        {
          name: 'Miscellaneous',
          detail:
            '<p><li>Wikipedia/MediaWiki</li><li>Google Docs/Sheets/Slides</li><li>Adobe Photoshop / Illustrator / Dreamweaver</li><li>Microsoft Excel/Word/Outlook</li><li>WoWEdit</li><li>Starcraft/Warcraft Map Editor</li><li>Webex Teams</li><li>Slack</li></p>',
          tooltip: 'Wikipedia/MediaWiki, Google Docs/Sheets/Slides...',
          img:
            'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2Ft2%2FPakage_Rune.png?alt=media&token=309dedac-e343-4104-b675-6a6e5c4c5614',
        },
      ],
      tier3: [
        {
          name: 'Brown University',
          detail: '(2012 – 2013)<br/><br/>45 Prospect Street, Providence, RI 02912',
          tooltip: '(2012 – 2013)',
          img:
            'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2Ft3%2FSneak_Rune.png?alt=media&token=b3a79be1-152c-46fa-a2b3-a249bedc74b9',
        },
        {
          name: 'Bard College',
          detail: '(2010 – 2011)<br/><br/>30 Campus Road, Annandale-on-Hudson, NY 12504-5000',
          tooltip: '(2010 – 2011)',
          img:
            'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2Ft3%2FSword_Rune.png?alt=media&token=c9c10550-5ab5-4677-a953-7ff074f71ad9',
        },
        {
          name: 'Crossroads School for the Arts & Sciences',
          detail: '(1997 – 2010) <br/><br/>1714 21st Street, Santa Monica, CA 90404',
          tooltip: '(1997 – 2010) ',
          img:
            'https://firebasestorage.googleapis.com/v0/b/custom-rune-pages.appspot.com/o/runePathImages%2Fbandle%2Ft3%2FGear_Rune_v2.png?alt=media&token=7b451724-e322-48bd-9b31-8974f128981c',
        },
      ],
    },
  ],
}

export function resume(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOAD_RESUME:
      return { ...state, path: action.payload }
    case ActionTypes.SELECT_RESUME_KEYSTONE:
      return { ...state, keystone: action.payload }
    case ActionTypes.SELECT_RESUME_TIER1:
      return { ...state, t1: action.payload }
    case ActionTypes.SELECT_RESUME_TIER2:
      return { ...state, t2: action.payload }
    case ActionTypes.SELECT_RESUME_TIER3:
      return { ...state, t3: action.payload }
    case ActionTypes.TOGGLE_RESUME_MENU:
      if (action.payload.tier === 'FLAVOR') return state
      var newOpen = state.open
      newOpen[action.payload.tier.toLowerCase()] = !newOpen[action.payload.tier.toLowerCase()]
      return { ...state, open: newOpen }
    case ActionTypes.TOGGLE_RESUME_INFO:
      return { ...state, runeInfo: action.payload }
    // Editor
    case ActionTypes.LOAD_RESUME_EDITOR:
      return { ...state }
    case ActionTypes.SAVE_RESUME_EDITOR:
      return { ...state }
    default:
      return state
  }
}
