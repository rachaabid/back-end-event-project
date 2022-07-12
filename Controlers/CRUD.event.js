const Event = require('../models/event');

exports.createEvent = async (req, res) => {
  try {
    const event = {
      eventName: req.body.eventName,
      eventDescription: req.body.eventDescription,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      photo: req.body.photo,
      price: req.body.price,
      availableTicketNumber: req.body.availableTicketNumber,
      eventType: req.body.eventType,
      location: req.body.location
    }
    await Event.create(event)
    res.send({ message: 'Event created' })
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    });
  }
}

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.send(events);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    });
  }
}

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.idEvent)
    res.send(event);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    });
  }
}

exports.update = async (req, res) => {
  try {
    await Event.findByIdAndUpdate(req.params.idEvent)
    res.send({ message: 'Event updated' })
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    });
  }
}

exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndRemove(req.params.idEvent)
    res.send({ message: 'Event deleted' })
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured'
    });
  }
}