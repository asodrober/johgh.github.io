
<script>
    $(function(){
        $('tr').each(function(){
            $(this).find('td:first').prepend('<input class="check" type="checkbox"></input> ');
        });

        $(document).on('change', '.check', function() {
            $('tr').each(function(){
                var packages += $(this).find('td:first').html();
            });
            $('#install').html('sudo apt-get install' + packages)
        });

        $('table').addClass('tablesorter');
        $('table').tablesorter({
            theme : 'blue',
            sortList: [[2,0], [1,0], [0,0]],
        widgets: ["zebra", "filter"],
            widgetOptions : {
                filter_functions : { 2 : true }
                }
        });
    });
</script>
