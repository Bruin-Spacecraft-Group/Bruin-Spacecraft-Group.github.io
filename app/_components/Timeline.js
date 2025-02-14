import React from "react";

// Timeline item component
const TimelineItem = ({ title, date, status }) => {
  return (
    <div className={`timeline-item ${status}`}>
      <h3 className="font-light text-xl">{title}</h3>
      <p className="font-semibold text-sm">{date}</p>
    </div>
  );
};

// Timeline component
const Timeline = () => {
  const events = [
    { title: "RAPID-1 Internal PDR", date: "November 2023", status: "past" },
    { title: "RAPID-1 Internal CDR", date: "January 2024", status: "past" },
    { title: "RAPID-1 Internal FDR", date: "April 2024", status: "past" },
    {
      title: "RAPID-1 hold, RAPID-0 initiation",
      date: "April 2024",
      status: "past",
    },
    {
      title: "Manufactured all flatsat flight PCBs & first chassis prototype",
      date: "June 2024",
      status: "past",
    },
    {
      title: "Began flatsat testing campaign",
      date: "September 2024",
      status: "past",
    },
    {
      title: "NASA CSLI proposal submitted",
      date: "November 2024",
      status: "past",
    },
    {
      title: "Flatsat testing campaign conclusion",
      date: "December 2024",
      status: "past",
    },
    {
      title: "First flight engineering model",
      date: "March 2025",
      status: "current",
    },
    {
      title: "Qualification testing campaign on engineering model",
      date: "April 2025",
      status: "planned",
    },
    { title: "Delivery-ready", date: "May 2025+", status: "planned" },
  ];

  return (
    <div className="timeline">
      {events.map((event, index) => (
        <TimelineItem
          key={index}
          title={event.title}
          date={event.date}
          status={event.status}
        />
      ))}
    </div>
  );
};

export default Timeline;
