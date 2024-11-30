import { useState } from "react"
import PatientStep1 from "../components/PatientStep1"
import PatientStep2 from "../components/PatientStep2"


export default function Schedule() {

    const [step, setStep] = useState(1)

    return (
      <>
        {step === 1 ? (
          <PatientStep1
            setStep={setStep}
          />
        ) : step === 2 ? (
          <PatientStep2
            setStep={setStep}
          />
        ) : ''}
      </>
    )
}
