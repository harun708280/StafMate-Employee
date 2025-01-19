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
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Private><DashLyout></DashLyout></Private>,
      children:[
        {
          path:'/dashboard',
          element:<Private><Overview></Overview></Private>
        },
        {
          path:'/dashboard/work-sheet',
          element:<Private><WorkSheetForm></WorkSheetForm></Private>
        },
        {
          path:'/dashboard/myPayment',
          element:<Private><MyPayment></MyPayment></Private>

        }
        
      ]
    }
    ,{
      path:'/hrDashboard',
      element:<Private><HrLayout></HrLayout></Private>,
      children:[
        {
          path:'/hrDashboard',
          element:<Private><HrOverview></HrOverview></Private>
        },{
          path:'/hrDashboard/details/:id',
          element:<Private><HrDetails></HrDetails></Private>
        },{
          path:'/hrDashboard/progress',
          element:<Private><Progress></Progress></Private>
        }
      ]
    },
    {
      path:'/adminDashboard',
      element:<Private><AdminLayOut></AdminLayOut></Private>,
      children:[
        {
          path:'/adminDashboard',
          element:<Private><AdminOverView></AdminOverView></Private>
        },
        {
          path:'/adminDashboard/paymentRequest',
          element:<Private><PaymentRequest></PaymentRequest></Private>
        },
        {
          path:'/adminDashboard/paymentHistory',
          element:<Private><PaymentHistory></PaymentHistory></Private>
        }
      ]
    }
  ]);

export default router