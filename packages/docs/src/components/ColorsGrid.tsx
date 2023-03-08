import { colors } from '@design-system-scheduler-ui/tokens'
import { getContrast } from 'polished'

function getColorByContrastRatio(color: string) {
  const DEFAULT_TEXT_COLOR = '#fff'
  const DARK_TEXT_COLOR = '#111'

  const contrastRatio = getContrast(color, DEFAULT_TEXT_COLOR)

  const hasPoorContrastRatio = contrastRatio < 3.5

  return hasPoorContrastRatio ? DARK_TEXT_COLOR : DEFAULT_TEXT_COLOR
}

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getColorByContrastRatio(color),
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
