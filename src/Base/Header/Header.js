import React from 'react';
import { Layout } from "../Layout/Layout";
import { SecondaryButton } from "../Components/Button/Button";
import "./Header.scss";

export const Header = ({
  error,
  onGoToLogin
}) => {
  return (
    <header>
      <Layout>
        <span>{error}</span>
        <SecondaryButton
          label="Login"
          onClick={onGoToLogin}
        />
      </Layout>
    </header>
  );
}