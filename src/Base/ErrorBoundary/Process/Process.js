import React from 'react';
import { Layout } from "../../Layout/Layout";
import { Search } from './Search/Search';
import { PROCESSES } from "../../../api/reducers/process/processes";
import Bands from "./Bands/Connector";
import LoginWrapper from './Login/LoginWrapper/LoginWrapper';
import BandArea from './Login/BandArea/Connector';
import Info from "./Info/Connector";
import "./Process.scss";

const NotFound = () => <p>Wir konnten die Seite leider nicht finden</p>;

const getComponentByProcess = (process) => {
  switch (process) {
    case PROCESSES.search:
      return <Search />;
    case PROCESSES.bands:
      return <Bands />;
    case PROCESSES.login:
      return <LoginWrapper />;
    case PROCESSES.bandArea:
      return <BandArea />;
    case PROCESSES.info:
      return <Info />;
    default:
      return (
        <>
          <NotFound />
          <Search />
        </>
      );
  }
}

/**
 * Decides which major process to show.
 */
export const Process = ({ process }) => {
  return (
    <Layout>
      <div className="Process">
        {getComponentByProcess(process)}
      </div>
    </Layout>
  );
}

