import React, { useState, useEffect } from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";

const App = () => {
  const [surveyJson, setSurveyJson] = useState(null);

  // Fetch survey JSON from file
  useEffect(() => {
    fetch("demo.json") // Path to the JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the survey JSON file");
        }
        return response.json();
      })
      .then((data) => {
        setSurveyJson(data);
      })
      .catch((error) => {
        console.error("Error loading survey JSON:", error);
      });
  }, []);

  // Handle survey completion
  const handleSurveyComplete = (sender) => {
    const userResponses = sender.data; // User responses stored here
    console.log("User Responses:", userResponses);

    // Example: Save responses to a database or API
    // fetch("/api/saveResponses", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(userResponses),
    // });
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>Grade 1 2 progress</h1>
      {surveyJson ? (
        <Survey
          model={new Model(surveyJson)}
          onComplete={handleSurveyComplete}
        />
      ) : (
        <p>Loading survey...</p>
      )}
    </div>
  );
};

export default App;
