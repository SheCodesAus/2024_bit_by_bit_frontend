// HOOKS
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useState } from "react";

function ManageUserAccordion({ userData, processData }) {
  console.log("userData: ", userData);
  console.log("processData: ", processData);

  const mergedUserById = (a1, a2) =>
    a1.map((user) => ({
      ...a2.find((process) => process.mentor === user.id && process),
      ...user,
    }));

  const mergedData = mergedUserById(userData, processData);
  console.log("mergedData: ", mergedData);

  function mapProcesses(data) {
    return {
      slack_provided: data.user_onboarding_task_slack,
      linkedIn_provided: data.user_onboarding_task_linkedin,
      CodeofConduct_provided: data.user_onboarding_task_CodeofConduct,
      tshirtsent: data.user_onboarding_task_tshirtsent,
      feedbackrequested: data.user_offboarding_task_feedbackrequested,
      feedbackreceived: data.user_offboarding_task_feedbackreceived,
      tshirtreceived: data.user_offboarding_task_tshirtreceived,
    };
  }
  const mappedData = {};
  for (const key in mergedData) {
    if (mergedData.hasOwnProperty(key)) {
      mappedData[key] = mapProcesses(mergedData[key]);
    }
  }
  console.log("mappedData: ", mappedData);

  const [isProcessChecked, setIsProcessChecked] = useState({
    ...mappedData,
  });

  const userAccordion = mergedUserById(userData, processData).map(
    (user, index) => (
      <Accordion defaultIndex={[0]} allowMultiple key={index}>
        <AccordionItem>
          <AccordionButton>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              className="grid grid-cols-6 text-wrap"
            >
              <div className="px-4 py-2">{user.first_name}</div>
              <div className="px-4 py-2">{user.last_name}</div>
              <div className="px-4 py-2">{user.email}</div>
              <div className="px-4 py-2">{user.contact_number}</div>
              <div className="px-4 py-2">{user.linkedIn}</div>
              <div className="px-4 py-2">{user.slack}</div>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left"></Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className="flex bg-orange-300">
            <Box as="span" flex="1" textAlign="left"></Box>
            <div className="">
              <h2 className="font-semibold">Onboarding tasks</h2>
              <div className="flex">
                <div className="grid grid-cols-1 px-4 py-2">
                  <label>Slack link Provided?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["slack_provided"]}
                  />
                </div>
                <div className="grid grid-cols-1  px-4 py-2">
                  <label>LinkedIn link Provided?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["linkedIn_provided"]}
                  />
                </div>
                <div className="grid grid-cols-1 px-4 py-2">
                  <label>Mentor Code of Conduct provided?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["CodeofConduct_provided"]}
                  />
                </div>
                <div className="grid grid-cols-1 px-4 py-2">
                  <label>Mentor t-shirt provided?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["tshirtsent"]}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="font-semibold">Offboarding tasks</h2>
              <div className="flex">
                <div className="grid grid-cols-1 px-4 py-2">
                  <label>Feedback Requested?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["feedbackrequested"]}
                  />
                </div>
                <div className="grid grid-cols-1  px-4 py-2">
                  <label>Feedback Recieved?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["feedbackreceived"]}
                  />
                </div>
                <div className="grid grid-cols-1 px-4 py-2">
                  <label>Mentor t-shirt returned?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["tshirtreceived"]}
                  />
                </div>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    )
  );

  return (
    <>
      <section className="grid grid-cols-6">
        <h2 className="font-semibold px-4 py-2">First Name</h2>
        <h2 className="font-semibold px-4 py-2">Second Name</h2>
        <h2 className="font-semibold px-4 py-2">Email</h2>
        <h2 className="font-semibold px-4 py-2">Contact Number</h2>
        <h2 className="font-semibold px-4 py-2">Slack</h2>
        <h2 className="font-semibold px-4 py-2">LinkedIn</h2>
      </section>
      {userAccordion}
    </>
  );
}

export default ManageUserAccordion;
