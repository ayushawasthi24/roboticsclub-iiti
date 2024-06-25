import React, { useRef, useEffect } from "react";
import "./MeetTheTeam.css";

const teamMembers = [
  { id: 1, name: "Bhawana Chaudhary", position: "President", photo: "/john-doe.jpg" },
  {
    id: 2,
    name: "Jane Smith",
    position: "Vice President",
    photo: "/jane-smith.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Treasurer",
    photo: "/michael-johnson.jpg",
  },
  {
    id: 4,
    name: "Michael Jackson",
    position: "Secretary",
    photo: "/michael-jackson.jpg",
  },
  // Add more team members as needed
];

const MeetTheTeam = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const scroll = () => {
      if (container) {
        container.scrollTo({
          left: container.scrollLeft + container.clientWidth,
          behavior: "smooth",
        });
      }
    };

    let scrollInterval = setInterval(scroll, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Meet the Team
        </h2>
        <div className="team-carousel" ref={containerRef}>
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
              <div className="bg-gray-700 shadow-lg rounded-lg overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-64 w-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-300">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
