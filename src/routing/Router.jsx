import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { path } from "../constans";
import { privateRoutes } from "./routes";
import { v4 as uuid } from "uuid";
export const Router = function () {
   return (
      <BrowserRouter>
         <Switch>
            {privateRoutes.map(({ path, Component }) => {

               return (<Route path={path} exact={true} key={uuid()} ><Component></Component></Route>)

            })}
            <Redirect to={path.MAIN_ROUTE}></Redirect>
         </Switch >
      </BrowserRouter>
   )

}
