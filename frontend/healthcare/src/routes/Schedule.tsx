import { useState } from "react"
import PatientStep1 from "../components/PatientStep1"
import PatientStep2 from "../components/PatientStep2"
import { useParams } from "react-router-dom"
import CitaProvider from "../contexts/CitaContext"

export default function Schedule() {

    const { id } = useParams()

    console.log( id );
    const [step, setStep] = useState(1)

    return (
      <>
        <CitaProvider>
          {step === 1 ? (
            <PatientStep1
              id={id}
              setStep={setStep}
            />
          ) : step === 2 ? (
            <PatientStep2
              setStep={setStep}
            />
          ) : ''}
        </CitaProvider>
      </>
    )
}
