import styled from "styled-components";

const RecentMembers = styled.div`
  body {
    margin-top: 60px;
  }

  .container-widget .panel {
    margin-bottom: 15px;
    border-radius: 0px;
    border: 1px #e6e9ee solid;
  }

  .panel-info {
    background: #3f51b5
      url(http://themesground.com/modern/demo1/HTML/img/intro-bg.png) repeat top
      left;
    color: #fff;
  }

  .panel-success {
    background: #1ab394
      url(http://themesground.com/modern/demo1/HTML/img/intro-bg.png) repeat top
      left;
    color: #fff;
  }

  .panel-widget {
    overflow: hidden;
    border: none;
  }

  .panel .panel-title {
    color: #58666e;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0px;
  }
  .panel-title {
    font-family: "Montserrat", sans-serif;
    color: #58666e;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 16px 20px;
    margin: -20px;
    background: #fff;
    margin-bottom: 5px;
    border-bottom: none;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    letter-spacing: 1px;
  }
  .panel-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
  }
  .basic-list {
    margin-bottom: 0;
    padding: 0;
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 10px;
  }

  /* Basic List */
  .basic-list {
    margin-bottom: 0;
    padding: 0;
  }
  .basic-list li {
    display: block;
    position: relative;
    padding: 12px 0;
  }
  .basic-list li:last-child {
    border-bottom: none;
  }
  .basic-list .right {
    position: absolute;
    right: 0;
    display: inline-block;
    padding: 3px 6px;
    font-weight: 600;
  }

  /* Image List */
  .image-list li {
    padding-left: 50px;
  }
  .image-list .img {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    border-radius: 0px;
  }
  .image-list .desc {
    font-size: 12px;
    opacity: 0.8;
    display: block;
  }
`;

export default RecentMembers;
