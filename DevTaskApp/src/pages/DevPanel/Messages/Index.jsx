import React from "react";
import "../../../styles/messages/Messages.scss";
import MessagesCard from "../../../components/MessageCard";

function Index() {
  return (
    <div className="messages__wrapper">
      <MessagesCard
        user={"You"}
        text={
          "Quickly fire up a personal Ethereum blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates."
        }
        timestamp={`${5} seconds ago`}
        status={1}
      />
      <MessagesCard
        user={"John Cole"}
        text={
          "Quickly fire up a personal Ethereum blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates."
        }
        timestamp={`${5} seconds ago`}
        status={0}
      />
      <MessagesCard
        user={"Eric Backend"}
        text={
          "Quickly fire up a personal Ethereum blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates."
        }
        timestamp={`${5} seconds ago`}
        status={1}
      />
      <MessagesCard
        user={"Eric Backend"}
        text={
          "Quickly fire up a personal Ethereum blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates."
        }
        timestamp={`${5} seconds ago`}
        status={1}
      />
    </div>
  );
}

export default Index;
