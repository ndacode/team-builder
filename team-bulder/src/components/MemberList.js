


import React from "react";

const Members = props => {
//   console.log("This is from members", props);
console.log(props.memberList);
  return (
    <div className="member-list">
        
      {props.memberList.map((member, index) => {
        return (
          <div className="member" key={index}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Members;