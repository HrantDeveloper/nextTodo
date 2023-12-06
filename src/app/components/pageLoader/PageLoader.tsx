import { memo } from "react";
import { PageLoaderWrapper } from "./PageLoader.styled";

const PageLoader:React.FC = () => {
  return (
    <PageLoaderWrapper>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </PageLoaderWrapper>
  );
};

export default memo(PageLoader);
