jQuery( function( $ ) {
	'use strict';

	function toggleBillingCustomerTypeFields() {
		var type = $( 'input[name="billing_customer_type"]:checked' ).val();
		var $corporate = $( '.billing-corporate-field' );
		var $individual = $( '.billing-individual-field' );

		if ( 'kurumsal' === type ) {
			$corporate.show().addClass( 'validate-required' ).find( 'input' ).prop( 'disabled', false );
			$individual.hide().removeClass( 'validate-required' ).find( 'input' ).val( '' ).prop( 'disabled', true );
		} else {
			$individual.show().addClass( 'validate-required' ).find( 'input' ).prop( 'disabled', false );
			$corporate.hide().removeClass( 'validate-required' ).find( 'input' ).val( '' ).prop( 'disabled', true );
		}
	}

	$( document.body ).on( 'change', 'input[name="billing_customer_type"]', toggleBillingCustomerTypeFields );
	$( document.body ).on( 'updated_checkout', toggleBillingCustomerTypeFields );
	toggleBillingCustomerTypeFields();
} );
