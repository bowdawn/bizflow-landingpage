import { Button, Col, Space, Grid, ConfigProvider, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import BizFlowHeader from "../components/BizFlowHeader";
import CustomLayout from "../components/CustomLayout";
import CustomContent from "../components/CustomContent";
import CustomRow from "../components/CustomRow";
import ScrollableContainer from "../components/ScrollableContainer";
import CustomSpinContainer from "../components/CustomSpinContainer";
import vidPath from "../../core/videos/bizflow_m_video.mp4";
import CustomTitle from "../components/CustomTitle";
import CustomText from "../components/CustomText";
import landingCarouselPic1 from "../../core/images/new_landing_midcarousel1_272x427.png";
import landingCarouselPic2 from "../../core/images/new_landing_midcarousel2_272x427.png";
import landingCarouselPic3 from "../../core/images/new_landing_midcarousel3_272x427.png";
import landingCarouselPic4 from "../../core/images/new_landing_midcarousel4_272x427.png";
import landingBottomPic1 from "../../core/images/new_landing_bottom1.png";
import landingBottomPic2 from "../../core/images/new_landing_bottom2.png";
import BizFlowFooter from "../components/BizFlowFooter";
import CustomSpace from "../components/CustomSpace";
import { contactusPath, platformPath, solutionsPath } from "../routes/routes";
import { CheckSquareOutlined } from "@ant-design/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const checklistItems1 = [
  "Build custom solutions fast using drag-and-drop tools that let citizen developers create apps and visualizations without coding.",
  "Enhance team collaboration with real-time tools that enable communication and task tracking, eliminating manual updates.",
  "Streamline business processes by automating workflows, reducing errors, and cutting costs for greater efficiency.",
  "Customize workflows on-the-fly by leveraging reusable data, importable UI components, and flexible modifications.",
];
const checklistItems2 = [
  "One inbox to manage and monitor tasks from one place for better visibility and control.",
  "Stay organized by consolidating reminders, automating task routing, and receiving alerts.",
  "Secure & compliant with robust data management, access controls, and compliance features.",
  "Enhance communication by tracking tasks, accessing updates, and managing documents in one place for faster execution.",
];

const images = [
  {
    src: landingCarouselPic1,
    alt: "reduce cycle time from 5 hours to 15 minutes",
  },
  {
    src: landingCarouselPic2,
    alt: "creates more than $ 2 million in efficiencies annually",
  },
  {
    src: landingCarouselPic3,
    alt: "from hours of waiting to real time",
  },
  {
    src: landingCarouselPic4,
    alt: "paper forms to automated platform",
  },
];

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const showSpinning = false;

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  console.log(screens.lg);

  const section1Info = (
    <CustomSpace
      block
      direction="vertical"
      align={screens.lg ? "start" : "center"}
      size={16}
    >
      <Row justify={screens.lg ? "start" : "center"}>
        <CustomTitle white level={screens.lg?  1 : 3 }>
          <Space
            direction="vertical"
            align={screens.lg ? "start" : "center"}
            size={0}
          >
            <div>BizFlow M Portal:</div>
            <div> Workflows. Simplified.</div>
          </Space>
        </CustomTitle>
      </Row>

      <CustomText white center={!screens.lg}>
        BizFlow M portal simplifies work distribution and streamlines the flow
        of work by centralizing tasks in a single place
      </CustomText>
      <CustomRow>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#1D4CB1",
            },
          }}
        >
          <CustomSpace
            block={screens.lg ? false : true}
            direction={screens.lg ? "horizontal" : "vertical"}
            align="center"
            size={16}
          >
            <Button
              block={screens.lg ? false : true}
              type="primary"
              shape="round"
              onClick={() => navigate(platformPath)}
            >
              Explore the Platform
            </Button>
            <Button
              block={screens.lg ? false : true}
              shape="round"
              onClick={() => navigate(contactusPath)}
            >
              Schedule a Demo
            </Button>
          </CustomSpace>
        </ConfigProvider>
      </CustomRow>
    </CustomSpace>
  );
  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <CustomLayout fullscreen relative>
      <ScrollableContainer>
        <BizFlowHeader />
        <CustomContent padding={0}>
          <CustomRow
            className="ant-row-section ant-row-secondary-color"
            block
            justify="center"
            align="middle"
          >
            <CustomContent centerbox>
              <CustomRow
                className="ant-row-section-content"
                justify={"center"}
                align={"middle"}
              >
                {screens.lg ? <Col span={12}>{section1Info}</Col> : null}
                <Col span={screens.lg ? 12 : 24}>
                  <div
                    className={`video-container${
                      screens.lg ? " video-container-right" : ""
                    }`}
                  >
                    <video
                      width={"100%"}
                      autoPlay
                      loop
                      muted
                      onContextMenu={(e) => e.preventDefault()}
                    >
                      <source src={vidPath} type="video/mp4" />
                    </video>
                  </div>
                </Col>
                {screens.lg ? null : <Col span={24}>{section1Info} </Col>}
              </CustomRow>
            </CustomContent>
          </CustomRow>
          <CustomRow
            className="ant-row-section"
            block
            justify="center"
            align="middle"
          >
            <Space direction="vertical" align="center" size={30}>
              <label className="gradient-text" >
                Innovate and be more efficient with BizFlow M
              </label>
              {screens.lg ? (
                <CustomRow>
                  <Col span={6}>
                    <img
                      onClick={() => navigate(solutionsPath)}
                      width={"100%"}
                      className="clickable-bounce"
                      src={landingCarouselPic1}
                      alt="reduce cycle time from 5 hours to 15 minutes"
                    />
                  </Col>
                  <Col span={6}>
                    <img
                      className="clickable-bounce"
                      onClick={() => navigate(solutionsPath)}
                      width={"100%"}
                      src={landingCarouselPic2}
                      alt="creates more than $ 2 million in efficiencies annually"
                    />
                  </Col>
                  <Col span={6}>
                    <img
                      onClick={() => navigate(solutionsPath)}
                      width={"100%"}
                      className="clickable-bounce"
                      src={landingCarouselPic3}
                      alt="from hours of waiting to real time"
                    />
                  </Col>
                  <Col span={6}>
                    <img
                      onClick={() => navigate(solutionsPath)}
                      width={"100%"}
                      className="clickable-bounce"
                      src={landingCarouselPic4}
                      alt="paper forms to automated platform"
                    />
                  </Col>
                </CustomRow>
              ) : (
                <Carousel
                  autoPlay
                  infiniteLoop
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={true}
                  interval={4000}
                  transitionTime={600}
                >
                  {images.map((image, index) => (
                    <div key={index}>
                      <img src={image.src} alt={image.alt} />
              
                    </div>
                  ))}
                </Carousel>
              )}
            </Space>
          </CustomRow>
          <CustomRow
            className="ant-row-section ant-row-secondary-color"
            block
            justify="center"
            align="middle"
          >
            <CustomContent centerbox>
              <CustomRow
                className="ant-row-section-content"
                justify={"center"}
                align={"middle"}
              >
                {/* Image left (mobile view only) */}
                {!screens.lg && (
                  <Col span={24} className="image-container">
                    <img
                      width="100%"
                      src={landingBottomPic1}
                      alt="low code, collaboration, operational efficiency, cutting codes"
                    />
                  </Col>
                )}

                {/* Text content */}
                <Col span={screens.lg ? 12 : 24}>
                  <CustomSpace
                    block
                    direction="vertical"
                    align="center"
                    size={16}
                  >
                    <CustomTitle white  level={screens.lg?  1 : 3 } center={!screens.lg}>Improve the Flow of Work</CustomTitle>
                    <CustomText white>
                      Transform and simplify how your organization manages tasks
                    </CustomText>
                    {checklistItems1.map((item, index) => (
                      <Space key={index} align="start" size={20}>
                        <CheckSquareOutlined
                          style={{
                            color: "#1D4CB1",
                            fontSize: "35px",
                          }}
                        />
                        <CustomText white start>
                          {item}
                        </CustomText>
                      </Space>
                    ))}
                  </CustomSpace>
                </Col>

                {/* Image right (desktop view only) */}
                {screens.lg && (
                  <Col
                    span={12}
                    className="image-container image-container-right"
                  >
                    <img
                      width="100%"
                      src={landingBottomPic1}
                      alt="low code, collaboration, operational efficiency, cutting codes"
                    />
                  </Col>
                )}
              </CustomRow>
            </CustomContent>
          </CustomRow>
          <CustomRow
            className="ant-row-section"
            block
            justify="center"
            align="middle"
          >
            <CustomContent centerbox>
              <CustomRow
                className="ant-row-section-content"
                justify={"center"}
                align={"middle"}
              >
                <Col
                  span={screens.lg ? 12 : 24}
                  className={`image-container${
                    screens.lg ? " image-container-left" : ""
                  }`}
                >
                  <img
                    width={"100%"}
                    src={landingBottomPic2}
                    alt="organization management, progress report & dashboards, web-based process modeling, workforce management, bizflow m portal, api integration"
                  />
                </Col>
                <Col span={screens.lg ? 12 : 24}>
                  <CustomSpace
                    block
                    direction="vertical"
                    align="center"
                    size={16}
                    style={{}}
                  >
                    <CustomTitle  level={screens.lg?  1 : 3 } center={!screens.lg}  >Centralize Your Flow of Work</CustomTitle>

                    <CustomText>
                      Allow users to initiate, track, and complete tasks from a
                      single inbox
                    </CustomText>

                    {checklistItems1.map((item, index) => (
                      <Space key={index} align="start" size={20}>
                        <CheckSquareOutlined
                          style={{
                            color: "#1D4CB1",
                            fontSize: "35px",
                          }}
                        />
                        <CustomText start>{item}</CustomText>
                      </Space>
                    ))}
                  </CustomSpace>
                </Col>
              </CustomRow>
            </CustomContent>
          </CustomRow>
          <BizFlowFooter />
        </CustomContent>

        <CustomSpinContainer
          spinners={[
            {
              condition: showSpinning,
              spinning: true,
              fullscreen: true,
              tip: "Page is loading ...",
            },
          ]}
        />
      </ScrollableContainer>
    </CustomLayout>
  );
};
export default MainPage;
