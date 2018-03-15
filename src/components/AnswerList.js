import React from 'react'
import styled from 'styled-components'
import CheckIcon from 'react-feather/dist/icons/check'
import RemoveIcon from 'react-feather/dist/icons/x'
import shuffle from 'lodash/shuffle'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Answer = styled.li`
  display: flex;
  align-items: center;
`

const Radio = styled.input`
  cursor: pointer;

  ~ svg {
    visibility: hidden;
  }

  &:checked {
    ~ svg {
      visibility: visible;
    }

    &[data-correct='true'] {
      + label,
      ~ svg {
        color: #27ae60;
      }
    }

    &[data-correct='false'] {
      + label,
      ~ svg {
        color: #e74c3c;
      }
    }
  }
`

const Label = styled.label`
  margin: 0 0.5rem;
  cursor: pointer;
`

class AnswerList extends React.PureComponent {
  state = {
    answers: [],
  }

  componentWillMount() {
    this.setState({ answers: shuffle(this.props.list) })
  }

  render() {
    const { answers } = this.state
    const { qIndex } = this.props
    return (
      <List>
        {answers.map((answer, aIndex) => {
          const id = `question-${qIndex}-answer-${aIndex}`
          return (
            <Answer key={answer.text}>
              <Radio type="radio" id={id} name={`question-${qIndex}`} data-correct={answer.correct} />
              <Label htmlFor={id}>{answer.text}</Label>
              {answer.correct ? <CheckIcon size={16} /> : <RemoveIcon size={16} />}
            </Answer>
          )
        })}
      </List>
    )
  }
}

export default AnswerList
