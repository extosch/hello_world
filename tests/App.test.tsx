import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../src/App'

describe('App integration', () => {
  test('processes input and replaces digits with *', () => {
    render(<App />)

    const input = screen.getByTestId('input') as HTMLTextAreaElement
    const button = screen.getByTestId('process-button')
    const output = screen.getByTestId('output') as HTMLTextAreaElement

    // Type text with digits
    fireEvent.change(input, { target: { value: 'Hello 123 World 45' } })
    fireEvent.click(button)

    expect(output.value).toBe('Hello *** World **')
  })
})
