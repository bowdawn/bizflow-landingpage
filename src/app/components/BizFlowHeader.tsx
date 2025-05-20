import { Col, Layout, Drawer, Menu, Button, Grid } from "antd";
import React, { FC, useRef, useState } from "react";
import CustomTitle from "./CustomTitle";
import { MenuOutlined, GlobalOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import CustomRow from "./CustomRow";
import CustomMenu from "./CustomMenu";
import logoPath from "../../core/images/bizflow_logo_color.png";
import englishPath from "../../core/images/language_icon_usa.png";
import spanishPath from "../../core/images/language_icon_spain.png";
import koreanPath from "../../core/images/language_icon_kor.png";
import {
  blogPath,
  companyPath,
  contactusPath,
  customersPath,
  platformPath,
  solutionsPath,
} from "../routes/routes";

const BizFlowHeader: FC = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const parentRef = useRef(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const location = useLocation();
  const screens = Grid.useBreakpoint();
  const showMenu = !screens.lg;
  const pathToKeyMap: Record<string, string> = {
    "/platform": "platform",
    "/solutions&services": "solutions",
    "/customers": "customers",
    "/blog": "blog",
    "/company": "company",
    "/contactus": "contactus",
  };
  const selectedKey = pathToKeyMap[location.pathname] || "";
  const menuItems = [
    {
      key: "platform",
      label: "Platform",
      onClick: () => navigate(platformPath),
    },
    {
      key: "solutions",
      label: "Solutions",
      onClick: () => navigate(solutionsPath),
    },
    {
      key: "customers",
      label: "Customers",
      onClick: () => navigate(customersPath),
    },
    {
      key: "blog",
      label: "Blog",
      onClick: () => navigate(blogPath),
    },
    {
      key: "company",
      label: "Company",
      onClick: () => navigate(companyPath),
    },
    {
      key: "contactus",
      label: "Contact Us",
      onClick: () => navigate(contactusPath),
    },
  ];
  const handleDrawerClose = () => {
    setDrawerVisible(false);
  };

  return (
    <div ref={parentRef}>
      <Layout.Header className="bizflow-header">
        <CustomRow
          justify="end"
          align="middle"
          inheritHeight
          style={{ position: "relative" }}
        >
          <CustomTitle
            white
            level={5}
            marginless
            style={{
              textAlign: true ? "left" : "center",
              width: !showMenu ? "auto" : "100%",
              position: "absolute",
              left: !showMenu ? "0%" : "50%",
              top: "50%",
              transform: !showMenu
                ? "translate(0%, -50%)"
                : "translate(-50%, -50%)",
            }}
          >
            <img
              onClick={() => {
                navigate("/");
              }}
              src={logoPath}
              alt="bizflow-logo"
              draggable="true"
              style={{ width: 100 }}
            />
          </CustomTitle>
          <Col
            flex="none"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {showMenu ? null : (
              <CustomMenu
                mode="horizontal"
                selectedKeys={[selectedKey]}
                items={menuItems}
                style={{
                  minWidth: "70px",
                  textAlign: "right",
                }}
              />
            )}

            <div
              className={`button-wrapper ${
                expanded ? "expanded" : "collapsed"
              }`}
            >
              <Button
                size="large"
                shape="circle"
                icon={<img src={englishPath} alt="english" />}
              />
              <Button
                size="large"
                shape="circle"
                icon={<img src={spanishPath} alt="spanish" />}
              />
              <Button
                size="large"
                shape="circle"
                icon={<img src={koreanPath} alt="korean" />}
              />
            </div>
            <Button
              size="large"
              shape="circle"
              icon={<GlobalOutlined />}
              className="ant-btn-borderless"
              onClick={() => setExpanded((prev) => !prev)}
            />
            {showMenu ? (
              <>
                <MenuOutlined
                  style={{
                    paddingLeft: "8px",
                    color: "#75C143",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                  onClick={() => setDrawerVisible(true)}
                />
                <Drawer
                  placement="left"
                  onClose={handleDrawerClose}
                  open={drawerVisible}
                  closable={true}
                >
                  <Menu
                    items={menuItems}
                    selectedKeys={[selectedKey]}
                    onClick={handleDrawerClose}
                  />
                </Drawer>
              </>
            ) : null}
          </Col>
        </CustomRow>
      </Layout.Header>
    </div>
  );
};

export default BizFlowHeader;
