import React from 'react';
import styled, { css } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faMicrophoneAlt, faPaperPlane, faSearch } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  background: #F44A4A;\n  border: none;\n  border-radius: 999em;\n  width: 52px;\n  height: 52px;\n  cursor: pointer;\n  transition: background-color .2s ease-in-out;\n\n  &:hover{\n    background: #A72424;\n  }\n  &:focus{\n    outline: none;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 40px;\n  margin-right: 10px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  background: none;\n  width: 100%;\n  height: 25.6px;\n  font-family: Arial;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  color: #B9BBC4;\n\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 10px;\n  flex: 1;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 23px;\n  height: 23px;\n  color: #B9BBC4;\n  margin: 0 auto;\n  font-size: 15px;\n  line-height: 15px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 40px;\n  height: 40px;\n  color: #B9BBC4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 99em;\n  transition: background-color .2s ease-in-out;\n  cursor: pointer;\n\n  &:hover{\n    background-color: #e6e6e6;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  border-radius: 4px;\n  background-color: #F9F8F8;\n  align-items: center;\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n  opacity: 1;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
library.add(faPaperclip);
library.add(faMicrophoneAlt);
library.add(faPaperPlane);
var MessageContainer = styled.form(_templateObject());
var IconContainer = styled.div(_templateObject2());
var IconButtonContainer = styled.div(_templateObject3());
var MessageInputContainer = styled.div(_templateObject4());
var MessageInput = styled.input(_templateObject5());
var AudioClip = styled.div(_templateObject6());
var Button = styled.button(_templateObject7());

var SendBox = function SendBox(_ref) {
  var placeholder = _ref.placeholder,
      value = _ref.value,
      onAttachClick = _ref.onAttachClick,
      onChange = _ref.onChange,
      onMicClick = _ref.onMicClick,
      onSubmit = _ref.onSubmit;
  return React.createElement(MessageContainer, {
    onSubmit: onSubmit,
    action: ""
  }, React.createElement("label", {
    htmlFor: "labChatMessageInput"
  }, React.createElement(IconContainer, {
    onClick: onAttachClick
  }, React.createElement(FontAwesomeIcon, {
    icon: "paperclip",
    color: "#B9BBC4"
  }))), React.createElement(MessageInputContainer, null, React.createElement(MessageInput, {
    id: "labChatMessageInput",
    type: "search",
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    autoComplete: "off"
  })), React.createElement(AudioClip, null, React.createElement(IconContainer, {
    onClick: onMicClick
  }, React.createElement(FontAwesomeIcon, {
    icon: "microphone-alt",
    color: "#B9BBC4"
  }))), React.createElement(Button, {
    onClick: onSubmit
  }, React.createElement(IconButtonContainer, null, React.createElement(FontAwesomeIcon, {
    size: "lg",
    icon: "paper-plane",
    color: "#FFFFFF"
  }))));
};

SendBox.defaultProps = {
  placeholder: '',
  value: '',
  onAttachClick: function onAttachClick() {},
  onMicClick: function onMicClick() {},
  onChange: function onChange() {},
  onSubmit: function onSubmit() {}
};

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  background: none;\n  width: 100%;\n  height: 25.6px;\n  font-family: Arial;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  color: #BABBC4;\n\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 10px;\n  flex: 1;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  width: 18px;\n  height: 18px;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  border-radius: 4px;\n  background-color: #F8F7F7;\n  align-items: center;\n  height: 48px;\n  padding-left: 16px;\n  padding-right: 16px;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
library.add(faSearch);
var SearchContainer = styled.form(_templateObject$1());
var IconContainer$1 = styled.div(_templateObject2$1());
var SearchInputContainer = styled.div(_templateObject3$1());
var SearchInput = styled.input(_templateObject4$1());

var SearchBox = function SearchBox(_ref) {
  var placeholder = _ref.placeholder,
      value = _ref.value,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit;
  return React.createElement(SearchContainer, {
    onSubmit: onSubmit,
    action: ""
  }, React.createElement("label", {
    "aria-label": "search",
    htmlFor: "labChatSearchInput"
  }, React.createElement(IconContainer$1, null, React.createElement(FontAwesomeIcon, {
    icon: "search",
    color: "#BABBC4"
  }))), React.createElement(SearchInputContainer, null, React.createElement(SearchInput, {
    id: "labChatSearchInput",
    type: "search",
    placeholder: placeholder,
    value: value,
    onChange: onChange
  })));
};

SearchBox.defaultProps = {
  placeholder: '',
  value: '',
  onChange: function onChange() {},
  onSubmit: function onSubmit() {}
};

var defaultAvatar = "data:image/jpeg;base64,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";

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -4px;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 26px;\n  min-height: 26px;\n  max-width: 26px;\n  overflow: hidden;\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.08);\n  background-color: #f34848;\n  border-radius: 26px;\n  font-size: 14px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  width: 93%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: Arial;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.57;\n  letter-spacing: normal;\n  color: #000000;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 15px;\n  position: relative;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  min-width: 80px;\n  height: 22px;\n  opacity: 0.3;\n  font-family: Arial;\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.83;\n  letter-spacing: normal;\n  text-align: right;\n  color: #181c2f;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 16px;\n  height: 16px;\n  box-sizing: border-box;\n  background: ", ";\n  border: 3px solid #fff;\n  border-radius: 16px;\n"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n  height: 22px;\n  opacity: 0.3;\n  font-family: Arial;\n  font-size: 14px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.57;\n  letter-spacing: normal;\n  color: #181c2f;\n  text-transform: capitalize;\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n  height: 22px;\n  font-family: Arial;\n  font-size: 18px;\n  font-weight: 900;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.22;\n  letter-spacing: normal;\n  color: #313131;\n  width: 93%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 46px;\n  width: 46px;\n  height: 46px;\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 46px;\n  height: 46px;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n    ", ", ", ", ", ", ", " {\n      color: #fff;\n      opacity: 1;\n    }\n  "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  height: ", ";\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  background-color: ", ";\n  cursor: pointer;\n  overflow: hidden;\n\n  ", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var ChatPreviewContainer = styled.div(_templateObject$2(), function (props) {
  return props.infoPreview ? 'auto' : '143px';
}, function (props) {
  return props.active ? '#454545' : '#ffffff';
}, function (props) {
  return props.active && css(_templateObject2$2(), Title, Status, MessageBrief, LastMessage);
});
var PictureContainer = styled.div(_templateObject3$2());
var Image = styled.img(_templateObject4$2());
var Title = styled.div(_templateObject5$1());
var Status = styled.div(_templateObject6$1());
var StatusLed = styled.div(_templateObject7$1(), function (props) {
  return props.status === 'online' ? '#34d859' : '#cfd0d3';
});
var CardContainer = styled.div(_templateObject8());
var LastMessage = styled.div(_templateObject9());
var MessagesBriefContainer = styled.div(_templateObject10());
var MessageBrief = styled.div(_templateObject11());
var Badge = styled.div(_templateObject12());

var ChatPreview = function ChatPreview(_ref) {
  var title = _ref.title,
      image = _ref.image,
      badge = _ref.badge,
      lastMessage = _ref.lastMessage,
      status = _ref.status,
      active = _ref.active,
      infoPreview = _ref.infoPreview,
      onClick = _ref.onClick;
  return React.createElement(ChatPreviewContainer, {
    onClick: onClick,
    active: active,
    infoPreview: infoPreview
  }, React.createElement(CardContainer, null, React.createElement(PictureContainer, null, status && React.createElement(StatusLed, {
    status: status
  }), React.createElement(Image, {
    src: image
  })), React.createElement("div", {
    style: {
      flex: 1,
      marginLeft: '15px'
    }
  }, React.createElement(Title, null, title), !!status && React.createElement(Status, null, status)), !!lastMessage && lastMessage.time && React.createElement(LastMessage, null, moment(lastMessage.time).fromNow())), !!lastMessage && React.createElement(MessagesBriefContainer, null, React.createElement(MessageBrief, null, lastMessage.message), !!badge && React.createElement(Badge, null, badge)));
};

ChatPreview.defaultProps = {
  title: 'Untitled Chat',
  image: defaultAvatar,
  lastMessage: null,
  status: null,
  badge: 0,
  active: false,
  infoPreview: false,
  onClick: function onClick() {}
};

var bubbleMessage = function bubbleMessage(_ref) {
  var fill = _ref.fill;
  return React.createElement("svg", {
    width: "37",
    height: "14",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M25.8 1.381c.43 1.385 2.346 5.392 10.637 9.774.426.226.636.619.533 1.003-.103.384-.498.686-1.008.77-.046.008-1.156.19-3.152.32-5.689.374-17.414.29-32.286-4.425C-.568 8.939 31.28-1.587 25.8 1.381z",
    fill: fill,
    fillRule: "nonzero"
  }));
};

bubbleMessage.defaultProps = {
  fill: '#ffffff'
};

function _templateObject6$2() {
  var data = _taggedTemplateLiteral(["\n  height: 22px;\n  opacity: 0.3;\n  font-family: Arial;\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.83;\n  letter-spacing: normal;\n  color: #181c2f;\n  align-self: flex-end;\n  z-index: 3;\n  margin-right: 20px;\n  margin-left: auto;\n"]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n  width: auto;\n  font-family: Arial;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.57;\n  letter-spacing: normal;\n  padding: 20px;\n  border-radius: 100px;\n  display: inline-block;\n  color: #fff;\n  background: #F44A4A;\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: -8px;\n  left: auto;\n  right: 3px;\n  z-index: -1;\n  transform: rotateY(165deg) rotateZ(-15deg);\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, .1));\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      left: 3px;\n      right: auto;\n      transform: rotate(-15deg);\n    }\n    ", " {\n      color: #000;\n      background: #fff;\n    }\n    ", " {\n      align-self: flex-start;\n      margin-left: 20px;\n      margin-right: auto;\n    }\n  "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  background-color: transparent;\n  max-width: 50%;\n  position: relative;\n  align-self: ", ";\n\n  ", "\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var MessageContainer$1 = styled.div(_templateObject$3(), function (props) {
  return props.received ? 'flex-start' : 'flex-end';
}, function (props) {
  return props.received && css(_templateObject2$3(), BubbleMessageContainer, MessageBrief$1, MessageDate);
});
var MessageContainerInner = styled.div(_templateObject3$3());
var BubbleMessageContainer = styled.div(_templateObject4$3());
var MessageBrief$1 = styled.div(_templateObject5$2());
var MessageDate = styled.div(_templateObject6$2());

var Message = function Message(_ref) {
  var message = _ref.message,
      type = _ref.type,
      dateMessage = _ref.dateMessage,
      onClick = _ref.onClick,
      received = _ref.received;
  return React.createElement(MessageContainer$1, {
    received: received,
    onClick: onClick
  }, React.createElement(MessageContainerInner, null, React.createElement(MessageBrief$1, null, message), React.createElement(BubbleMessageContainer, null, React.createElement(bubbleMessage, {
    fill: received ? '#fff' : '#F44A4A'
  }))), dateMessage && React.createElement(MessageDate, null, moment(dateMessage).fromNow()));
};

Message.defaultProps = {
  message: null,
  type: 'text',
  dateMessage: null,
  received: true,
  onClick: function onClick() {}
};

export { SendBox, SearchBox, ChatPreview, Message };
