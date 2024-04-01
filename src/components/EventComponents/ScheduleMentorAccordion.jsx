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

function ScheduleMentorAccordion({ eventData, userData, processData }) {
  console.log("eventData: ", eventData);
  console.log("userData: ", userData);
  console.log("processData: ", processData);

  const mergedUserById = (a1, a2) =>
    a1.map((user) => ({
      ...a2.find((process) => process.mentor === user.id && process),
      ...user,
    }));

  const mergedData = mergedUserById(eventData, processData);
  console.log("mergedData: ", mergedData);

  function mapProcesses(data) {
    return {
      contract: data.event_onboarding_task_contrack,
      slackinvite: data.event_onboarding_task_slackinvite,
      googlecalendarinvite: data.event_onboarding_task_googlecalendarinvite,
      lmsinvite: data.event_onboarding_task_lmsinvite,
      mentorbio: data.event_onboarding_task_mentorbio,
      createimgasset: data.event_onboarding_task_createimgasset,
      reconfirmdates: data.event_onboarding_task_reconfirmdates,
      buildinginformation: data.event_onboarding_task_buildinginformation,
      invoicesent: data.event_offboarding_task_invoicesent,
      invoicereceived: data.event_offboarding_task_invoicereceived,
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

  const userAccordion = mergedUserById(eventData, processData).map(
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
              <div className="px-4 py-2">{user.role_requested}</div>
              <div className="px-4 py-2">{user.role_asigned}</div>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left"></Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className="flex bg-purple-300">
            <Box as="span" flex="1" textAlign="left"></Box>
            <div className="">
              <h2 className="font-semibold">Onboarding tasks</h2>
              <div className="flex">
                <div className="grid grid-cols-1 px-4 py-2">
                  <label>Contract Provided?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["contract"]}
                  />
                </div>
                <div className="grid grid-cols-1  px-4 py-2">
                  <label>Slack invite Provided?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["slackinvite"]}
                  />
                </div>
                <div className="grid grid-cols-1 px-4 py-2">
                  <label>Google Calendar Invite provided?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["googlecalendarinvite"]}
                  />
                </div>
                <div className="grid grid-cols-1 px-4 py-2">
                  <label>LMS invite provided?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["lmsinvite"]}
                  />
                </div>
                <div className="grid grid-cols-1 px-4 py-2">
                  <label>Mentor Bio provided?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["mentorbio"]}
                  />
                </div>
                <div className="grid grid-cols-1 px-4 py-2">
                  <label>Image asset created?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["createimgasset"]}
                  />
                </div>
                <div className="grid grid-cols-1 px-4 py-2">
                  <label>Reconfirmed dates?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["reconfirmdates"]}
                  />
                </div>
                <div className="grid grid-cols-1 px-4 py-2">
                  <label>Building information provided?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["buildinginformation"]}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="font-semibold">Offboarding tasks</h2>
              <div className="flex">
                <div className="grid grid-cols-1 px-4 py-2">
                  <label>Invoice Requested?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["invoicesent"]}
                  />
                </div>
                <div className="grid grid-cols-1  px-4 py-2">
                  <label>Invoice Recieved?</label>
                  <input
                    type="checkbox"
                    checked={isProcessChecked["invoicereceived"]}
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
        <h2 className="font-semibold px-4 py-2">Role Requested</h2>
        <h2 className="font-semibold px-4 py-2">Role Assigned</h2>
      </section>
      {userAccordion}
    </>
  );
}

export default ScheduleMentorAccordion;
