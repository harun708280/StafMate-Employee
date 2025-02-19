import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "../Component/Nav";
import Home from "../Page/Home";
import LayOut from "../Layout/LayOut";
import Login from "../Page/Login";
import RegistrationForm from "../Page/RegistrationForm";
import DashLyout from "../Layout/DashLyout";
import Overview from "../Empolye/Overview";
import WorkSheetForm from "../Empolye/WorkSheetForm";
import HrOverview from "../HR/HrOverview";
import HrLayout from "../Layout/HrLayout";
import Details from "../HR/Details";
import HrDetails from "../HR/HrDetails";
import Progress from "../HR/Progress";
import AdminLayOut from "../Layout/AdminLayOut";
import AdminOverView from "../Admin/AdminOverView";
import PaymentRequest from "../Admin/PaymentRequest";
import PaymentHistory from "../Admin/PaymentHistory";
import MyPayment from "../Empolye/MyPayment";
import Private from "../Private/Private";
import EmployeeRoute from "../Private/EmployeeRoute";
import HRRoute from "../Private/HRRoute";
import AdminRoute from "../Private/AdminRoute";
import Contact from "../Page/Contact";
import Message from "../Admin/Message";
import EmployeeDetails from "../Admin/EmployeeDetails";
import Profile from "@/Empolye/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<RegistrationForm></RegistrationForm>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        
      ]
    },
    {
      path:'/dashboard',
      element:<Private><EmployeeRoute><DashLyout></DashLyout></EmployeeRoute></Private>,
      children:[
        {
          path:'/dashboard',
          element:<Private><EmployeeRoute><Overview></Overview></EmployeeRoute></Private>
        },
        {
          path:'/dashboard/work-sheet',
          element:<Private><EmployeeRoute><WorkSheetForm></WorkSheetForm></EmployeeRoute></Private>
        },
        {
          path:'/dashboard/myPayment',
          element:<Private><EmployeeRoute><MyPayment></MyPayment></EmployeeRoute></Private>

        },
        {
          path:'/dashboard/profile',
          element:<Private><Profile></Profile></Private>
        }
        
      ]
    }
    ,{
      path:'/hrDashboard',
      element:<Private><HRRoute><HrLayout></HrLayout></HRRoute></Private>,
      children:[
        {
          path:'/hrDashboard',
          element:<Private><HRRoute><HrOverview></HrOverview></HRRoute></Private>
        },{
          path:'/hrDashboard/details/:id',
          element:<Private><HrDetails></HrDetails></Private>
        },{
          path:'/hrDashboard/progress',
          element:<Private><HRRoute><Progress></Progress></HRRoute></Private>
        },
        {
          path:'/hrDashboard/profile',
          element:<Private><Profile></Profile></Private>
        }
      ]
    },
    {
      path:'/adminDashboard',
      element:<Private><AdminRoute><AdminLayOut></AdminLayOut></AdminRoute></Private>,
      children:[
        {
          path:'/adminDashboard',
          element:<Private><AdminRoute><AdminOverView></AdminOverView></AdminRoute></Private>
        },
        {
          path:'/adminDashboard/paymentRequest',
          element:<Private><AdminRoute><PaymentRequest></PaymentRequest></AdminRoute></Private>
        },
        {
          path:'/adminDashboard/paymentHistory',
          element:<Private><AdminRoute><PaymentHistory></PaymentHistory></AdminRoute></Private>
        },
        {
          path:'/adminDashboard/sms',
          element:<Private><AdminRoute><Message></Message></AdminRoute></Private>
        },
        {
          path:'/adminDashboard/details/:id',
          element:<Private><EmployeeDetails></EmployeeDetails></Private>
        },
        {
          path:'/adminDashboard/profile',
          element:<Private><Profile></Profile></Private>
        }
      ]
    }
  ]);

export default router