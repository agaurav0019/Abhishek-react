import React, { useState,useEffect } from "react";
import { colors } from "../../libs/types";
import "./rds-toast.scss"

export interface RdsToastProps {
  colorVariant?:colors;
  headerTitle: string;
  message: string;
  delay:number;
  autohide:boolean;
  borderColor:string;
  showHeader:boolean;
}
const RdsToast = (props: RdsToastProps) => {
   const[clicked, setClicked] = useState(false)
   let delay = props.delay || 5000;
   const handler = props.hasOwnProperty("autohide")&&props.autohide==true;
   console.log("delay - " + delay)

   useEffect(() => {
    if(handler==true){
        setTimeout(() => {
            setClicked(true)
           }, delay); 

    }
  } ,[handler]);

  
  const closeHandler =()=>{
    setClicked(true)
  }
 let borderColor ="border border-"+ props.borderColor||" "
  const isHeader = props.hasOwnProperty("showHeader")&&props.showHeader==true;
   let bg = " bg-"+props.colorVariant||"light"
   let classes =`${clicked==true? ' toast closed ' :' showed toast '}`;
  return (
    <>
      <div className={`${bg}`+`${classes}` +`${borderColor}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true" >
       {isHeader==true &&  <div><div className="toast-header p-2 d-flex justify-content-between">
          <strong className="text-bold "> {props.headerTitle} </strong>
            <button
            type="button"
            className="btn-close align-self-baseline"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={closeHandler}
            ></button>
          
        </div>
        <div className="toast-body">{props.message}</div></div>}
        {isHeader==false && <div  className="m-1 toastbody "> 
          <div className="toast-body toastbody ">{props.message}</div>
            <button
                    type="button"
                    className="btn-close align-self-baseline"
                    data-bs-dismiss="toast"
                    aria-label="Close"
                    onClick={closeHandler}
            ></button>
          </div>
            }
      </div>
    </>
  );
};
export default RdsToast;