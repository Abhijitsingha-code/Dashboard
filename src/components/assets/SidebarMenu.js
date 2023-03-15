import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import StyleIcon from "@mui/icons-material/Style";
import TextsmsIcon from "@mui/icons-material/Textsms";
import MonitorIcon from "@mui/icons-material/Monitor";
import DescriptionIcon from "@mui/icons-material/Description";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';


const appMenus = [
  {
    id: 1,
    title: "Project",
    Icon: InsertChartOutlinedOutlinedIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon,
    subMenu:[
      {
        id:1,
        title:'Dashboard',
        MenuIcon: StyleIcon,
        path:'/dashboard'
      },
      {
        id:2,
        title:'Project List',
        MenuIcon: ShowChartOutlinedIcon,
        path:'/project-list'
      },
      {
        id:3,
        title:'Form 1',
        MenuIcon: InsertChartOutlinedOutlinedIcon,
        path:'/form1'
      },
      {
        id:4,
        title:'Form 2',
        MenuIcon: InsertChartOutlinedOutlinedIcon,
        path:'/form2'
      },
    ]
  },
  {
    id: 2,
    title: "CRM",
    Icon: GroupsIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon,
    subMenu:[
      {
        id:1,
        title:'Dashboard',
        path:'/dashboard'
      },
      {
        id:2,
        title:'Project List',
        path:'/project-list'
      },
      {
        id:3,
        title:'Form 1',
        path:'/form1'
      },
      {
        id:4,
        title:'Form 2',
        path:'/form2'
      },
    ]
  },
  {
    id: 3,
    title: "Sales",
    Icon: TrendingUpIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon,
    subMenu:[
      {
        id:1,
        title:'Dashboard',
        path:'/dashboard'
      },
      {
        id:2,
        title:'Project List',
        path:'/project-list'
      },
      {
        id:3,
        title:'Form 1',
        path:'/form1'
      },
      {
        id:4,
        title:'Form 2',
        path:'/form2'
      },
    ]
  },
  {
    id: 4,
    title: "Crypto",
    Icon: MonetizationOnOutlinedIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon,
    subMenu:[
      {
        id:1,
        title:'Dashboard',
        path:'/dashboard'
      },
      {
        id:2,
        title:'Project List',
        path:'/project-list'
      },
      {
        id:3,
        title:'Scrum Board',
        path:'/project/scrumboard'
      },
      {
        id:4,
        title:'Issue',
        path:'/project/Issue'
      },
    ]
  },
  {
    id: 5,
    title: "Knowledge Base",
    Icon: ImportContactsOutlinedIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon
  },
  {
    id: 6,
    title: "Account",
    Icon: AccountCircleOutlinedIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon
  },
];
const uiComponentMenus = [
  {
    id: 1,
    title: "Common",
    Icon: StyleIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon,
  },
  {
    id: 2,
    title: "Feedback",
    Icon: TextsmsIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon,
  },
  {
    id: 3,
    title: "Data Display",
    Icon: MonitorIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon,
  },
  {
    id: 4,
    title: "Forms",
    Icon: DescriptionIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon,
  },
  {
    id: 5,
    title: "Navigation",
    Icon: NavigationOutlinedIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon,
  },
  {
    id: 6,
    title: "Graph",
    Icon: PieChartOutlinedIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon,
  },
];

const authenMenu = [
  {
    id: 1,
    title: "Sign In",
    Icon: GppGoodOutlinedIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon,
  },
  {
    id: 2,
    title: "Sign Up",
    Icon: PersonAddAlt1OutlinedIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon,
  },
  {
    id: 3,
    title: "Forgot Password",
    Icon: LockPersonOutlinedIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon,
  },
  {
    id: 4,
    title: "Reset Password",
    Icon: KeyOutlinedIcon,
    IconOpen: ExpandMoreIcon,
    IconClose: ExpandLessIcon,
  },
];

const profileData = [
  {
    id:1,
    title:'Profile',
    path:'/profile',
    Icon:Person2Icon,
  },
  {
    id:2,
    title:'Account Setting',
    path:'/acount-setting',
    Icon:SettingsOutlinedIcon,
  },
  {
    id:3,
    title:'Activity Log',
    path:'/activity-log',
    Icon:ShowChartOutlinedIcon,
  },
]

export { appMenus, uiComponentMenus, authenMenu ,profileData};
