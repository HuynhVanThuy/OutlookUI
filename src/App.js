import { Accordion, Button, Dropdown, Form, Nav, Tab } from "react-bootstrap";
import {
  AiOutlineAppstore,
  AiOutlineCalendar,
  AiOutlineDelete,
  AiOutlineDown,
  AiOutlineEdit,
  AiOutlineInbox,
  AiOutlineLink,
  AiOutlineMacCommand,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineSend,
  AiOutlineStar,
  AiOutlineZoomIn,
} from "react-icons/ai";
import { BsArrow90DegLeft, BsArrow90DegRight, BsCalendar4Event, BsFilter, BsPinAngle, BsReplyAll } from "react-icons/bs";
import { RiFlag2Line, RiMailOpenLine } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiConfused } from "react-icons/bi";
import "./App.scss";
import { useState } from "react";

function App() {
  const [isShowNav, setIsShowNav] = useState(true);
  const [sideSelected, setSideSelected] = useState({
    name: "Inbox",
  });
  // const [contentSelect, setSideSelect] = useState({
  //   name: "Inbox",
  // });

  const sidebarData = [
    {
      name: "Favorites",
      child: [
        {
          icon: <AiOutlineInbox />,
          name: "Inbox",
        },
        {
          icon: <AiOutlineSend />,
          name: "Sent Items",
        },
        {
          icon: <AiOutlineEdit />,
          name: "Drafts",
        },
      ],
      actions: [
        {
          name: "Add favorite",
        },
      ],
    },
    {
      name: "Folders",
      child: [
        {
          icon: <AiOutlineInbox />,
          name: "Inbox",
        },
        {
          icon: <AiOutlineSend />,
          name: "Sent Items",
        },
        {
          icon: <AiOutlineEdit />,
          name: "Drafts",
        },
      ],
      actions: [
        {
          name: "Create new folder",
        },
      ],
    },
    {
      name: "Groups",
      child: [],
      actions: [
        {
          name: "New group",
        },
      ],
    },
  ];

  return (
    <div className="main">
      <div className="left-rail">
        <div className="item active">
          <AiOutlineMail />
        </div>
        <div className="item">
          <AiOutlineCalendar />
        </div>
        <div className="item">
          <AiOutlineLink />
        </div>
        <div className="item">
          <AiOutlineMacCommand />
        </div>
      </div>
      <div className="body-content">
        <div className="top-bar-container">
          <Tab.Container defaultActiveKey="home">
            <div className="top-bar">
              <div
                className="tooltip-home"
                onClick={() => setIsShowNav(!isShowNav)}
              >
                <AiOutlineMenu />
              </div>
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="home">
                    Home
                    <span className="tab-underline" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="view">
                    View
                    <span className="tab-underline" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="help">
                    Help
                    <span className="tab-underline" />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="home">
                <div className="tab-items">
                  <div className="group-bt-new d-flex align-items-center">
                    <Button className="btn-new-mail">
                      <AiOutlineMail />
                      New Email
                    </Button>
                    <Dropdown>
                      <Dropdown.Toggle variant="success"></Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          <AiOutlineMail />
                          Mail
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          <BsCalendar4Event />
                          Event
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </Tab.Pane>
              {/* <Tab.Pane eventKey="view">Second tab content</Tab.Pane>
              <Tab.Pane eventKey="help">Second tab content</Tab.Pane> */}
            </Tab.Content>
          </Tab.Container>
        </div>
        <div className="module-container">
          {isShowNav && (
            <div className="navigation-pane">
              <Accordion defaultActiveKey={[0]} alwaysOpen>
                {sidebarData.map((item, key) => (
                  <Accordion.Item eventKey={key} key={key}>
                    <Accordion.Header>{item.name}</Accordion.Header>
                    <Accordion.Body>
                      {item.child.map((childItem, childKey) => (
                        // <h1 key={childKey}>{childItem.name}</h1>
                        <div
                          className={`nav-child-item ${
                            childKey === 0 ? "active" : ""
                          }`}
                          key={childKey}
                          onClick={() =>
                            setSideSelected({ name: childItem.name })
                          }
                        >
                          {childItem.icon}
                          {childItem.name}
                        </div>
                      ))}
                      {item.actions.map((action, keyAction) => (
                        <div
                          className="nav-child-item nav-action"
                          key={keyAction}
                        >
                          <p className="text-truncate">{action.name}</p>
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          )}
          <div className="message-list">
            <div className="header-filter">
              <Form.Check inline />
              <span className="title">{sideSelected.name}</span>
              <AiOutlineStar />
              <div className="filter">
                <BsFilter />
                <span>Filter</span>
              </div>
            </div>
            {[...Array(20)].map((_, i) => (
              <div className="message" key={i}>
                <div className="left">
                  <Form.Check inline className="check-item" />
                  <div className="avatar">
                    <img src={`https://picsum.photos/700?sig=${i + 1}`} alt="avatar" />
                  </div>
                </div>
                <div className="mid">
                  <div className="header">
                    <div>AvePoint IT</div>
                    <div className="group-actions">
                      <RiMailOpenLine />
                      <RiFlag2Line />
                      <BsPinAngle />
                    </div>
                  </div>
                  <div className="body">
                    <div className="object text-truncate">Ticket Closed</div>
                    <div className="object-date">Wed 11:44 PM</div>
                  </div>
                  <div className="footer">
                    <div className="short-content text-truncate">
                      Dear Timo your ticket - Gitlab user Gitlab user Gitlab
                      user Gitlab user
                    </div>
                  </div>
                </div>
                <div className="right">
                  <AiOutlineDelete />
                </div>
              </div>
            ))}
          </div>
          <div className="message-content">
            <div className="header">
              <div className="object-title">Tiêu đề</div>
              <div className="zoom">
                <AiOutlineZoomIn />
                <AiOutlineDown />
              </div>
            </div>
            <div className="body">
              <div className="main-info">
                <img src="https://picsum.photos/700?sig=1" alt="avatar" />
                <div className="detail-info">
                  <div className="user-info">
                    <span className="name">AvePoint IT</span>
                    <span className="mail">{"<it-tickets@avepoint.freshservice.com>"}</span>
                    <div>To: Timo Huynh</div>
                  </div>
                  <div className="actions-container">
                    <div className="actions">
                      <div><BiConfused /></div>
                      <div><BsArrow90DegLeft /></div>
                      <div><BsReplyAll /></div>
                      <div><BsArrow90DegRight /></div>
                      <div><AiOutlineAppstore /></div>
                      <div><FiMoreHorizontal /></div>
                    </div>
                    <div className="date">
                      Wed 9/6/2023 11:44 PM
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-container">
                <div className="content">Content</div> 
                <div className="footer-content">
                  <Button className="btn-outlook"><BsArrow90DegLeft />Reply</Button>  
                  <Button className="btn-outlook"><BsArrow90DegRight />Forward</Button>  
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
