var Main = {
    init: function(){
        $(window).load(function(){
            Main.loaded();
        });

        Main.unreadMessagesWatcher();
    },
    loaded: function(){
        $('body').addClass('fully-loaded');
    },
    unreadMessagesWatcher: function(){
        var num = $('.channel.active.unread').length ? $('.channel.active.unread').length : '';
        Main.showDockBadge(num);

        window.setTimeout(Main.unreadMessagesWatcher, 200);
    },
    showDockBadge: function(num){
        window.fluid.dockBadge = num;
    }
};

$(Main.init);
