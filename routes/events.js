/**
 * Event Routes
 * /api/events
 */

const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);

// Obtener evento
router.get('/', getEventos);

// Obtener evento
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos,
    ],
    crearEvento
);

// Actualizar evento
router.put(
    '/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos,
    ],
    actualizarEvento
);

// Borrar evento
router.delete('/:id', eliminarEvento);

module.exports = router;
