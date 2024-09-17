import {render, screen} from '@testing-library/react'
import { ToggleSwitch, ToggleSwitchTheme } from '../../ToggleSwitch'

describe('Theme switch button', () => {
    test('with themes', () => {
        render(<ToggleSwitch label='TEST' themes={[ToggleSwitchTheme.EMULATOR_SMALL]}/>)
        expect(screen.getByRole("checkbox")).toBeInTheDocument()
        screen.debug() 
    })
})