$(document).ready(function() {
    function sum() {
       var total = 0;
        // select all elements with class name
        var itemPrices = $('.item-price');
        var quanity = $('.item-qty input');
        // claculate sum, turn text into number, multiply price * quanity
        for (i = 0; i < quanity.length; i++) {

            var itemPrice = Number($(itemPrices[i]).text().replace(/\$/,""));
            var subTotal = (Number($(quanity[i]).val())) * itemPrice;

            if (subTotal !== 0) {
                $($('.sub-total')[i]).html('$' + subTotal + '.00');
            } else {
                $($('.sub-total')[i]).html('$0.00');
            }
            //combine default value of 0 with subTotal
            total += subTotal;
        }
        return total;
    }

    function updateTotal(sum) {
        $('#totalPrice').html('$' + sum + '.00');

    }


    function addItem() {
        var newPrice = Number($('#price').val()).toFixed(2);
        var newItem = $('#item').val();



        if (!newItem || isNaN(newPrice)) {
            alert('You must enter both item name and unit price to continue!');
        } else {
            $('#lastRow').before('<div class="row item"><div class="item-name col-xs-3" id="item" style="color: #fff">' + newItem + '</div><div class="item-price col-xs-3">$' + newPrice + '</div><div class="item-qty col-xs-3" id="cost"><input type="number" placeholder="QTY"></div><div class="col-xs-1"><button class="btn btn-danger">Remove</button></div><div class="sub-total col-xs-2">$--.--</div></div>');
        }
        $('#lastRow').find('#item', '#price').val('');
    }



    $(document).on('keyup', '.item-qty input', function() {
            updateTotal(sum());
    })

    $('#addProduct').on('click', function() {
            addItem();
    })

    $(document).on('keydown', '#cost input', function() {
            updateTotal(sum());
    })

    $(document).on('click', '.btn-danger', function() {
        $(this).closest('div.row').remove();
        updateTotal(sum());
    })


})