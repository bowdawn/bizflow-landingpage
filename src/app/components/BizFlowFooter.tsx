import { Col, Layout, Space, Grid } from "antd";
import React, { FC, useRef } from "react";
import CustomTitle from "./CustomTitle";
import { useNavigate } from "react-router-dom";
import CustomRow from "./CustomRow";
import CustomContent from "./CustomContent";
import CustomLink from "./CustomLink";
import CustomText from "./CustomText";
import CustomSpace from "./CustomSpace";
import {
  platformPath,
  solutionsPath,
  customersPath,
  supportPath,
  companyPath,
  contactusPath,
} from "../routes/routes";

const BizFlowFooter: FC = () => {
  const navigate = useNavigate();
  const parentRef = useRef(null);
  const screens = Grid.useBreakpoint()

  return (
    <div ref={parentRef}>
      <Layout.Footer>
        <CustomRow
          className="ant-row-section"
          block
          justify="center"
          align="middle"
        >
          <CustomSpace block direction="vertical" size={30}>
            <CustomContent centerbox>
              <CustomRow
                className="ant-row-section-content"
                block
                justify={"center"}
                align={"top"}
              >
                <Col span={ screens.lg ? 12 : 24}>
                  <Space direction="vertical">
                    <CustomTitle white level={4}>
                      Site Map
                    </CustomTitle>
                    <Space direction="vertical" size={0}>
                      <CustomLink white onClick={() => navigate(platformPath)}>
                        Platform
                      </CustomLink>
                      <CustomLink white onClick={() => navigate(solutionsPath)}>
                        Solutions
                      </CustomLink>
                      <CustomLink white onClick={() => navigate(customersPath)}>
                        Customers
                      </CustomLink>
                      <CustomLink white onClick={() => navigate(supportPath)}>
                        Support
                      </CustomLink>
                      <CustomLink white onClick={() => navigate(companyPath)}>
                        Company
                      </CustomLink>
                      <CustomLink white onClick={() => navigate(contactusPath)}>
                        Contact
                      </CustomLink>
                    </Space>
                  </Space>
                </Col>
                <Col span={screens.lg ? 12 : 24}>
                  <CustomTitle white level={4}>
                    Contact
                  </CustomTitle>
                  <Space direction="vertical">
                    <CustomText white>
                      <div>— Corporate Office</div>
                      <div>3141 Fairview Park Drive, Suite 850</div>
                      <div>Falls Church, VA 22042</div>
                    </CustomText>
                    <CustomText white>
                      <div> Tel: +1 703 645 4500 </div>
                      <div>Email: info@bizflow.com</div>
                    </CustomText>
                  </Space>
                </Col>
              </CustomRow>
            </CustomContent>
            <CustomContent centerbox>
              <CustomRow
                className="ant-row-section-content"
                block
                justify={"center"}
                align={"top"}
              >
                <CustomRow block justify={"start"}>
                  <CustomText white>
                    © 2025 – BizFlow. All rights reserved.
                  </CustomText>
                </CustomRow>
              </CustomRow>
            </CustomContent>
          </CustomSpace>
        </CustomRow>
      </Layout.Footer>
    </div>
  );
};

export default BizFlowFooter;
