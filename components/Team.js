import title from "../assets/title.gif";
import team1 from "../assets/team1.gif";
import team2 from "../assets/team2.gif";
import team3 from "../assets/team3.gif";
import Image from "next/image";

const Team = () => {
  return (
    <div className="bg-primary px-10" id="Team">
      <div className="flex justify-center ">
        <Image src={title} alt="team" width={400} />
      </div>
      <div className="flex justify-between">
        <div>
          <Image src={team1} alt="team" />
        </div>
        <div>
          <Image src={team2} alt="team" />
        </div>
        <div>
          <Image src={team3} alt="team" />
        </div>
      </div>
    </div>
  );
};

export default Team;
