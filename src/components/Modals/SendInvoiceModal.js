import React, { Component } from 'react';

import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

import './styles.scss';

class SendInvoiceModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipients: [],
            invoiceItems: []
        }
    }

    selectRecipient = (recipients) => {
        this.setState({ recipients })
    }

    addInvoiceItem = () => {
        this.setState(prevState => ({ invoiceItems: [...prevState.invoiceItems, {}] }))
    }

    render() {
        return (
            <>
                <Modal size="lg" className="send-invoice-modal" show={this.props.open} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Send Invoice</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className="bb-1">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1"><i className="fa fa-users"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <TagsInput
                                className={"recipient-tag-input"}
                                tagProps={{
                                    className: 'recipient-tag',
                                    classNameRemove: 'recipient-tag-remove'
                                }}
                                inputProps={{
                                    className: 'recipient-form-control',
                                    placeholder: 'Select Recipient'
                                }}
                                value={this.state.recipients}
                                onChange={this.selectRecipient} />
                        </InputGroup>

                        <InputGroup className="bb-1">
                            <FormControl
                                placeholder="Title.."
                                aria-label="title"
                            />
                        </InputGroup>

                        <InputGroup className="bb-1">
                            <label className='custom-label'>Invoice Date</label>
                            <FormControl
                                type='date'
                                placeholder="Title.."
                                aria-label="title"
                            />
                            <FormControl
                                type='date'
                                className="bl-1"
                                placeholder="Title.."
                                aria-label="title"
                            />
                        </InputGroup>

                        <InputGroup className="mb-1">
                            <label className='custom-label'>Items</label>
                            <div className='invoice-items'>

                                {this.state.invoiceItems.map((value, index) => {
                                    return <div className='item' key={index}>Item {index + 1}</div>
                                })}

                                <Button variant="default" onClick={this.addInvoiceItem} className="btn-add-item">+ Add Item</Button>
                            </div>
                        </InputGroup>
                    </Modal.Body>

                    <Modal.Footer>
                        <InputGroup>
                            <span>Send Via : </span> <Form.Check custom type="checkbox" id={'sync-check'} label={"Sync"} /> <Form.Check custom id={'email-check'} type="checkbox" label={"Email"} />
                        </InputGroup>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" className="btn-custom-send" id="dropdown-basic">Send</Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.props.onClose}>Send</Dropdown.Item>
                                <Dropdown.Item onClick={this.props.onClose}>Save & Cancel</Dropdown.Item>
                                <Dropdown.Item onClick={this.props.onClose}>Discard</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default SendInvoiceModal;
