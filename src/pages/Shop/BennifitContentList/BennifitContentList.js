import React from "react";
import BennifitContent from "../../../layouts/BennifitContent/BennifitContent";
import { withRouter } from "react-router";
import useFetchWithCache from "../../../Hooks/Fetch";
import Loader from "../../../components/Loader/Loader";

const BennifitContentList = (props) => {
  const [data, isLoading] = useFetchWithCache("/home-page", props.match.path);
  let bennifitContent;
  if (isLoading) bennifitContent = <Loader />;
  else
    bennifitContent = Object.keys(data).map((item, i) => (
      <BennifitContent key={i} title={item} cards={data[item]} />
    ));

  return <> {bennifitContent}</>;
};

export default withRouter(BennifitContentList);
