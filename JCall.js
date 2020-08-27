var guard = require('storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
function start() {
	var myParam =request.httpParameterMap.param.stringValue;

		if (myParam != null)
		{
			
			ISML.renderTemplate(
					'call/jnotEmpty.isml', 
					{
					paramOnPdict : myParam
					}
					);
	
		}
		else{
		ISML.renderTemplate(
		'call/jEmpty.isml',
		{
		paramOnPdict:'param not found'
		}
		);
		};
};
exports.Start = guard.ensure(['get'], start);