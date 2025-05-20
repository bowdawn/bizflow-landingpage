import React, { useRef } from "react";
import { Button, Card, Result } from "antd";
import { useNavigate } from "react-router-dom";
import CustomLayout from "../components/CustomLayout";
import BizFlowHeader from "../components/BizFlowHeader";
import CustomContent from "../components/CustomContent";
import ScrollableContainer from "../components/ScrollableContainer";
import CustomRow from "../components/CustomRow";
import BizFlowFooter from "../components/BizFlowFooter";

const NotImplementedPage: React.FC = () => {
  const navigate = useNavigate();
  const parentRef = useRef(null);
  return (
    <CustomLayout fullscreen relative>
      <ScrollableContainer ref={parentRef}>
        <BizFlowHeader />
        <CustomRow className="ant-row-section">
          <CustomContent centerbox>
            <Card>
              <Result
                status="warning"
                title="Page was not implemented"
                subTitle="Only the main page was implemented for practice purposes."
                extra={
                  <Button
                    type="primary"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Back to Home
                  </Button>
                }
              />
            </Card>
          </CustomContent>
        </CustomRow>
        <BizFlowFooter />
      </ScrollableContainer>
    </CustomLayout>
  );
};
export default NotImplementedPage;
