import { useContext } from "react";
import CardBackground from "../components/CardBackground/CardBackground";
import Carousel from "../components/Carousel/Carousel";
import { ActivitiesContext } from "../context/ActivitiesProvider";

export function Home() {
  const { activities } = useContext(ActivitiesContext);

  const mockData = [
    {
      title: "Father's Day",
      description:
        "this activty is Ullamco magna velit ipsum minim elit ad sint exercitation eiusmod eiusmod nulla nulla eu sint.",
      background:
        "https://image.shutterstock.com/image-vector/happy-fathers-day-greeting-card-260nw-1087739567.jpg",
      backgroundColor: "bg-[#4F6D7A]/85",
      navigateTo: "/activity/new/1", //activity id in the backend
    },
    {
      title: "Mother's Day",
      description:
        "this activty is Ullamco magna velit ipsum minim elit ad sint exercitation eiusmod eiusmod nulla nulla eu sint.",
      background:
        "https://img.freepik.com/free-vector/hand-drawn-mother-s-day-illustration_23-2148926319.jpg",
      backgroundColor: "bg-[#4F6D7A]/85",
      navigateTo: "/activity/new/1", //activity id in the backend
    },
    {
      title: "Father's Day",
      description:
        "this activty is Ullamco magna velit ipsum minim elit ad sint exercitation eiusmod eiusmod nulla nulla eu sint.",
      background:
        "https://image.shutterstock.com/image-vector/happy-fathers-day-greeting-card-260nw-1087739567.jpg",
      backgroundColor: "bg-[#4F6D7A]/85",
      navigateTo: "/activity/new/1", //activity id in the backend
    },
    {
      title: "Mother's Day",
      description:
        "this activty is Ullamco magna velit ipsum minim elit ad sint exercitation eiusmod eiusmod nulla nulla eu sint.",
      background:
        "https://img.freepik.com/free-vector/hand-drawn-mother-s-day-illustration_23-2148926319.jpg",
      backgroundColor: "bg-[#4F6D7A]/85",
      navigateTo: "/activity/new/1", //activity id in the backend
    },
    {
      title: "Father's Day",
      description:
        "this activty is Ullamco magna velit ipsum minim elit ad sint exercitation eiusmod eiusmod nulla nulla eu sint.",
      background:
        "https://image.shutterstock.com/image-vector/happy-fathers-day-greeting-card-260nw-1087739567.jpg",
      backgroundColor: "bg-[#4F6D7A]/85",
      navigateTo: "/activity/new/1", //activity id in the backend
    },
    {
      title: "Mother's Day",
      description:
        "this activty is Ullamco magna velit ipsum minim elit ad sint exercitation eiusmod eiusmod nulla nulla eu sint.",
      background:
        "https://img.freepik.com/free-vector/hand-drawn-mother-s-day-illustration_23-2148926319.jpg",
      backgroundColor: "bg-[#4F6D7A]/85",
      navigateTo: "/activity/new/1", //activity id in the backend
    },
    {
      title: "Father's Day",
      description:
        "this activty is Ullamco magna velit ipsum minim elit ad sint exercitation eiusmod eiusmod nulla nulla eu sint.",
      background:
        "https://image.shutterstock.com/image-vector/happy-fathers-day-greeting-card-260nw-1087739567.jpg",
      backgroundColor: "bg-[#4F6D7A]/85",
      navigateTo: "/activity/new/1", //activity id in the backend
    },
  ];

  return (
    <div className="p-[50px]">
      <section className="mb-10 bg-neutral-300/50 p-5 rounded-lg">
        <h2 className="text-3xl font-semibold">Strategies</h2>
        <p className="text-base font-extralight mb-2">
          lorem ipsum dolor sit amet
        </p>

        <Carousel
          children={mockData.map(
            ({
              title,
              description,
              background,
              backgroundColor,
              navigateTo,
            }) => {
              return (
                <CardBackground
                  title={title}
                  description={description}
                  background={background}
                  backgroundColor={backgroundColor}
                  navigateTo={navigateTo}
                ></CardBackground>
              );
            }
          )}
        ></Carousel>
      </section>
      <section>
        <h2 className="text-3xl font-semibold">Your Activities</h2>
        <p className="text-base font-extralight mb-2">
          lorem ipsum dolor sit amet
        </p>
        {!activities.length ? (
          <div className="p-[70px] flex flex-col items-center justify-center">
            <p className="font-bold text-xl mb-2">Nothing to see here!</p>
            <p className="font-extralight">
              Create an activity and share it with your students
            </p>
          </div>
        ) : (
          <div className="mt-8">
            {activities.map(
              ({
                title,
                description,
                background,
                backgroundColor,
                navigateTo,
              }) => {
                return (
                  <CardBackground
                    title={title}
                    description={description}
                    background={background}
                    backgroundColor={backgroundColor}
                    navigateTo={navigateTo}
                  ></CardBackground>
                );
              }
            )}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
