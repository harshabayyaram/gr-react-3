import React from "react";
import Card from "./Card";
import profile1 from "../images/profile.jpg";
import profile2 from "../images/profile2.jpg";

function Page() {
  return (
    <div className="flex">
      <Card
        designation="Film Director, Producer"
        fee="$14/hour"
        name="Jeffrey Abrams,51"
        location="New York, United States"
        bio="Abrams was born in newyork city and raised in los angeles"
        profile={profile1}
        status = "online"
      />

      <Card
        designation="Actor, Film Director"
        fee="$9/hour"
        name="Baltasar kormakur,52"
        location="Reykjavik, Iceland"
        bio="Icelandic actor, theater and film director, adn film producer."
        profile={profile2}
        status = "Last seen 17mins ago"
      />
    </div>
  );
}

export default Page;
