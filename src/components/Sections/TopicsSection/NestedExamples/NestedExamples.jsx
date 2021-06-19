import React from 'react';
import PropTypes from 'prop-types';
import { useFieldArray } from 'react-hook-form';

import classes from './NestedExamples.module.scss';
import CustomButton from '../../../shared/CustomButton/CustomButton';

const NestedExamples = ({ nestIndex, control, register }) => {

  const { fields, append, remove } = useFieldArray({
    control,
    name: `item[${nestIndex}].examples`,
  });

  const createNewExample = () => {
    append({ value: '' });
  };

  return (
    <div className={classes.NestedExamples}>
      <ul>
        {
          fields.map((example, index) => (
            <li key={example.id}>
              <textarea
                {...register(`item.${nestIndex}.examples[${index}].value`, {
                  required: true,
                })}
                defaultValue={example.value}
                maxLength={120}
              />
            </li>
          ))
        }
      </ul>
      <CustomButton
        label='+ add context'
        gray
        onClick={createNewExample}
      />
    </div>
  );
};

NestedExamples.propTypes = {
  nestIndex: PropTypes.number.isRequired,
  control: PropTypes.object,
  register: PropTypes.func,
};

export default NestedExamples;
