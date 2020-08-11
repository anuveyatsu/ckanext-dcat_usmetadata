import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'formik';
import ReactTags from 'react-tag-autocomplete';
import './index.css';

const TagsAutocomplete = (props) => {
  const { tags, name, helptext } = props;

  return (
    <FieldArray
      name={name}
      render={(arrayHelpers) => (
        <div className="react-tags-input grid-col-12">
          <div id="tags-error" className="error-msg hidden" type="string" placeholder="" value="">
            Tags are required
          </div>
          {helptext}
          <ReactTags
            tags={tags}
            suggestions={[]}
            allowNew
            ref={React.createRef()}
            onAddition={arrayHelpers.push}
            onDelete={arrayHelpers.remove}
            className="usa-input"
          />
        </div>
      )}
    />
  );
};

TagsAutocomplete.propTypes = {
  tags: PropTypes.any, // eslint-disable-line
  helptext: PropTypes.any, // eslint-disable-line
  name: PropTypes.string.isRequired,
};

export default TagsAutocomplete;
