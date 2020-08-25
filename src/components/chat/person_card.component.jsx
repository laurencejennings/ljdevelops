import React, { Component } from "react";
import tw, { styled } from "twin.macro";
import Avatar from "../avatar/avatar.component";

const Wrapper = styled.div`
${({rounded}) => rounded && tw`rounded-md`}
  ${tw`flex items-center relative shadow-md bg-white`}
`;

const TextWrap = styled.div`
  ${tw`text-sm`}
`;

const Name = styled.p`
  ${tw`text-gray-900 leading-none`}
`;
const Description = styled.p`
  ${tw`text-gray-600`}
`;
const Notifications = styled.div`
  ${tw`rounded-full w-5 h-5 text-center  absolute top-0 right-0 m-2 bg-red-500 text-white align-middle`}
  p {
    ${tw`text-xs leading-5`}
  }
`;
const Children = styled.div`
  ${tw`flex flex-col`}
`
export default ({
  avatar,
  alt,
  notifications,
  currentUser,
  className,
  children,
  rounded,
  name
}) => (
  <Wrapper rounded={rounded} className={className}>
    <div to="/" className="nav-item nav-link">
      <Avatar sm src={avatar} text={alt} />
      </div>
      <div className="flex justify-between items-center pr-4 w-full">
    <TextWrap>
      <Name>{name}</Name>
      <Description>{currentUser ? currentUser.description : ''}</Description>
    </TextWrap>
    {notifications > 0 ? (
      <Notifications>
        <p>{notifications}</p>
      </Notifications>
    ) : null}
    {currentUser && children ? <Children>{children}</Children> : null }
    </div>
  </Wrapper>
);
