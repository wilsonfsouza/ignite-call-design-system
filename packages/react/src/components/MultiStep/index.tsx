import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps {
  currentStep?: number
  size: number
}

export function MultiStep({ currentStep = 1, size }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Step {currentStep} of {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}
