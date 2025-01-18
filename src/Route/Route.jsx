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
      element:<DashLyout></DashLyout>,
      children:[
        {
          path:'/dashboard',
          element:<Overview></Overview>
        },
        {
          path:'/dashboard/work-sheet',
          element:<WorkSheetForm></WorkSheetForm>
        },
        {
          path:'/dashboard/myPayment',
          element:<MyPayment></MyPayment>

        }
        
      ]
    }
    ,{
      path:'/hrDashboard',
      element:<HrLayout></HrLayout>,
      children:[
        {
          path:'/hrDashboard',
          element:<HrOverview></HrOverview>
        },{
          path:'/hrDashboard/details/:id',
          element:<HrDetails></HrDetails>
        },{
          path:'/hrDashboard/progress',
          element:<Progress></Progress>
        }
      ]
    },
    {
      path:'/adminDashboard',
      element:<AdminLayOut></AdminLayOut>,
      children:[
        {
          path:'/adminDashboard',
          element:<AdminOverView></AdminOverView>
        },
        {
          path:'/adminDashboard/paymentRequest',
          element:<PaymentRequest></PaymentRequest>
        },
        {
          path:'/adminDashboard/paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        }
      ]
    }
  ]);

export default router