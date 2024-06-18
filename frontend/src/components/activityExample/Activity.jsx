import { useContext, useState } from "react";
import { ActivitiesContext } from "../../context/ActivitiesProvider";
import { useNavigate } from "react-router-dom";

const SidekickComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { addActivity } = useContext(ActivitiesContext);
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const createActivity = () => {
    addActivity({
      title: "Father's Day",
      description:
        "this activty is Ullamco magna velit ipsum minim elit ad sint exercitation eiusmod eiusmod nulla nulla eu sint.",
      background:
        "https://image.shutterstock.com/image-vector/happy-fathers-day-greeting-card-260nw-1087739567.jpg",
      backgroundColor: "bg-[#4F6D7A]/85",
      navigateTo: "/activity/new/1", //activity id in the backend
    });

    navigate("/inicio");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto flex space-x-6 h-[600px]">
      {/* Left Section */}
      <div className="w-full overflow-y-auto">
        <div className="flex space-x-4 items-start">
          <div>
            <div className="flex mb-6">
              <img
                className="mr-4"
                src="../../src/assets/father.jpg"
                width="50px"
                height="30px"
                alt=""
              />
              <div>
                <p className="font-semibold">Activity</p>
                <h2 className="text-2xl font-bold">Father's Day Activity</h2>
              </div>
            </div>
            <p className="text-gray-600 mt-1 text-sm">
              Give your students managed access to their very own AI assistant.
            </p>
            <p className="text-gray-600 mt-2 text-sm">
              Students can take advantage of AIs powerful capabilities to
              explore various topics, answer questions, quiz themselves, and
              more. You have full access to all chat sessions, allowing you to
              monitor student activity.
            </p>
            <div className="mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="description"
              >
                What do you want to do with your students?{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                className="w-full h-20 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                placeholder="Describe what you want it to help your students with. Be as creative or specific as you want!"
                rows={10}
              ></textarea>
            </div>
            <div className="block mt-4 bg-slate-200/40 p-4 rounded-lg transition-all duration-300">
              <div
                className="cursor-pointer text-gray-600 hover:text-black flex justify-between transition-colors duration-300"
                onClick={handleToggle}
              >
                <p className="text-sm font-semibold">More Options</p>
                <img
                  width="20px"
                  height="20px"
                  src="../../src/assets/chevron.svg"
                  alt="chevron"
                  className={`transform transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {isExpanded && (
                <div className="mt-8 space-y-4 transition-opacity duration-300">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-semibold mb-2"
                      htmlFor="option1"
                    >
                      Class description
                    </label>
                    <textarea
                      id="option1"
                      className="w-full h-28 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300"
                      placeholder="Describe the audience or participants. Give as much detail as you'd like the AI to know to adapt tone, language, length of message, personality, etc."
                    ></textarea>
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-semibold mb-2"
                      htmlFor="option2"
                    >
                      How would you like to interact with your students?
                    </label>
                    <textarea
                      id="option2"
                      className="w-full h-28 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300"
                      placeholder="Suggest a tone, level of detail, tutoring style, etc to customize how Sidekick works with your students."
                    ></textarea>
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-semibold mb-2"
                      htmlFor="option3"
                    >
                      What rules do you want to set for this session?
                    </label>
                    <textarea
                      id="option3"
                      className="w-full h-28 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300"
                      placeholder="Share any concrete rules around what Sidekick will and won't do with your students. Note: Persistent students may find ways around these guardrails. Sidekick will flag those instances to you."
                    ></textarea>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-10 flex space-x-2">
              <button
                onClick={() => createActivity()}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Right Section (Chat) */}
      <div className=" bg-gray-100 rounded-lg p-4 flex flex-col w-full">
        <div className="flex-1 overflow-y-auto">
          {/* Chat messages */}
          <div className="mb-4">
            <div className="flex justify-start mb-2">
              <div className="bg-white p-3 rounded-lg shadow w-[200px]">
                <p className="text-sm text-gray-600">
                  Hello! How can I assist you today?
                </p>
              </div>
            </div>
            <div className="flex justify-end mb-2">
              <div className="bg-blue-500 text-white p-3 rounded-lg shadow w-[200px]">
                <p className="text-sm">I need help with my homework.</p>
              </div>
            </div>
            {/* More messages */}
          </div>
        </div>
        <div className="mt-2">
          <div className="flex">
            <input
              type="text"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="Send a message"
            />
            <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillOpacity=".25"
                  stroke="currentColor"
                  d="m16.205 5.265l-6.49 2.164c-1.634.544-2.45.816-2.776 1.129a2 2 0 0 0 0 2.884c.325.313 1.142.585 2.775 1.13c.33.11.494.164.64.241a2 2 0 0 1 .833.833c.077.146.132.31.242.64c.544 1.633.816 2.45 1.129 2.775a2 2 0 0 0 2.884 0c.313-.325.585-1.142 1.13-2.775l2.163-6.491c.552-1.656.828-2.484.391-2.921c-.437-.437-1.265-.161-2.92.39Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidekickComponent;
